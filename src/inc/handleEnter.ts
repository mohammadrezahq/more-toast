const positions = {
	'top-right': {
		v: 'top',
		h: 'right',
	},
	'top-center': {
		v: 'top',
		h: 'center',
	},
	'top-left': {
		v: 'top',
		h: 'left',
	},
	'middle-right': {
		v: 'middle',
		h: 'right',
	},
	'middle-center': {
		v: 'middle',
		h: 'center',
	},
	'middle-left': {
		v: 'middle',
		h: 'left',
	},
	'bottom-right': {
		v: 'bottom',
		h: 'right',
	},
	'bottom-center': {
		v: 'bottom',
		h: 'center',
	},
	'bottom-left': {
		v: 'bottom',
		h: 'left',
	},
};

const styles = {
	'slide-top': {
		animation: 'slide',
		direction: 'top',
		outDistance: '-50px',
	},
	'slide-right': {
		animation: 'slide',
		direction: 'right',
		outDistance: '-15em',
	},
	'slide-bottom': {
		animation: 'slide',
		direction: 'bottom',
		outDistance: '-50px',
	},
	'slide-left': {
		animation: 'slide',
		direction: 'left',
		outDistance: '-15em',
	},
	fade: {
		animation: 'fade',
		direction: '',
		outDistance: '',
	},
};

const verticalPositions = ['top', 'middle', 'bottom'];
const horizontalPositions = ['left', 'center', 'right'];

interface Config {
	theme?: string;
	position?: string;
	icon?: string;
	iconUrl?: string;
	in?: string;
	out?: string;
	showTime?: number;
	dir?: string;
	canClose?: boolean;
	onlyClose?: boolean;
	overlayToast?: boolean;
}

interface Style {
	icon?: string;
	iconUrl?: string;
	bgColor?: string;
	textColor?: string;
	iconColor?: string;
	border?: string;
	borderRadius?: string;
	fontSize?: string;
	padding?: string;
	fontFamily?: string;
	closeIconColor?: string;
}

interface Advacned {
	enterDuration?: number;
	exitDuration?: number;
	vDistance?: number;
	hDistance?: number;
}

interface Options {
	config: Config;
	style: Style;
	advanced: Advacned;
}

const changeStyle = (element: HTMLDivElement, newStyle: string): void => {
	const oldStyle = element.getAttribute('style');
	element.setAttribute('style', oldStyle + ' ' + newStyle);
};

const handleEnter = (element: HTMLDivElement, options: Partial<Options>) => {
	const position = options.config?.position;
	const enter = options.config?.in;
	const duration = options.advanced?.enterDuration;
	const vDistance = options.advanced?.vDistance ?? 0;
	const hDistance = options.advanced?.hDistance ?? 0;

	const verticalPosition = positions[position as keyof typeof positions].v;
	const horizontalPosition = positions[position as keyof typeof positions].h;

	const enterAnimation: string = styles[enter as keyof typeof styles].animation;
	const enterDirection: string = styles[enter as keyof typeof styles].direction;
	const enterOutDistance = styles[enter as keyof typeof styles].outDistance;

	let newStyle = enterDirection + ': ' + enterOutDistance + '; ';

	changeStyle(element, newStyle);

	interface Keyframes {
		[key: string]: string | number;
	}

	const keyframes: Keyframes = {};

	if (enterAnimation === 'slide') {
		let finalVertical: any;

		if (element.getAttribute('more-toast-id') === '1') {
			finalVertical = vDistance + 'px';
		} else {
			const attribute: string = element.getAttribute('more-toast-id') ?? '0';

			const beforeElements = document.getElementsByClassName('more-toast');

			let elementsHeight: number = 0;

			for (let i = 0; i < beforeElements.length; i++) {
				const toastId = beforeElements[i].getAttribute('more-toast-id') ?? '';

				if (parseInt(toastId) < parseInt(attribute)) {
					elementsHeight += beforeElements[i].clientHeight;
					elementsHeight += vDistance;
				}
			}

			finalVertical = elementsHeight;
			finalVertical += vDistance;
			finalVertical += 'px';
		}

		if (verticalPositions.includes(enterDirection)) {
			newStyle = horizontalPosition + ': ' + hDistance + 'px; ';

			changeStyle(element, newStyle);

			if (verticalPosition === enterDirection) {
				keyframes[enterDirection] = finalVertical;
			} else {
				const distance = window.innerHeight - (element.offsetHeight + vDistance);

				if (element.getAttribute('more-toast-id') === '1') {
					finalVertical = distance + 'px';
				} else {
					finalVertical =
						distance -
						(parseInt(element.getAttribute('more-toast-id') ?? '0') - 1) * (element.offsetHeight + vDistance);
					finalVertical += 'px';
				}

				keyframes[enterDirection] = finalVertical;
			}
		}

		if (horizontalPositions.includes(enterDirection)) {
			newStyle = verticalPosition + ': ' + finalVertical + '; ';

			changeStyle(element, newStyle);

			if (enterDirection === horizontalPosition) {
				keyframes[enterDirection] = hDistance + 'px';
			} else {
				let distance: string | number;

				distance = window.innerWidth - element.offsetWidth;
				distance -= hDistance;
				distance = distance.toString() + 'px';
				keyframes[enterDirection] = distance;
			}
		}

		if (horizontalPosition === 'center') {
			if (verticalPositions.includes(enterDirection)) {
				element.style.left = '50%';
				element.style.transform = 'translateX(-50%)';
			} else {
				keyframes[enterDirection] = '50%';
				if (enterDirection === 'left') {
					element.style.transform = 'translateX(-50%)';
				} else {
					element.style.transform = 'translateX(50%)';
				}
			}
		}

		if (verticalPosition === 'middle' && (horizontalPosition === 'right' || horizontalPosition === 'left')) {
			if (verticalPositions.includes(enterDirection)) {
				element.style[horizontalPosition] = hDistance + 'px';

				newStyle = enterDirection + ': ' + '-50px' + '; ';

				changeStyle(element, newStyle);

				keyframes[enterDirection] = '50%';
				if (enterDirection === 'top') {
					element.style.transform = 'translateY(-50%)';
				} else {
					element.style.transform = 'translateY(50%)';
				}
			} else {
				element.style.top = '50%';
				element.style.transform = 'translateY(-50%)';

				newStyle = enterDirection + ': ' + '-15em' + '; ';

				changeStyle(element, newStyle);

				if (enterDirection === horizontalPosition) {
					keyframes[enterDirection] = hDistance + 'px';
				} else {
					let distance: string | number;
					distance = window.innerWidth - element.offsetWidth;
					distance -= hDistance;
					distance = distance.toString() + 'px';
					keyframes[enterDirection] = distance;
				}
			}
		}

		if (verticalPosition === 'middle' && horizontalPosition === 'center') {
			if (verticalPositions.includes(enterDirection)) {
				element.style.left = '50%';

				newStyle = enterDirection + ': ' + '-50px' + '; ';

				changeStyle(element, newStyle);

				keyframes[enterDirection] = '50%';
				if (enterDirection === 'top') {
					element.style.transform = 'translate(-50%, -50%)';
				} else {
					element.style.transform = 'translate(-50%, 50%)';
				}
			} else {
				element.style.top = '50%';
				keyframes[enterDirection] = '50%';
				if (enterDirection === 'left') {
					element.style.transform = 'translate(-50%, -50%)';
				} else {
					element.style.transform = 'translate(50%, -50%)';
				}
			}
		}

		element.animate([keyframes], {
			duration: duration,
			easing: 'ease-in-out',
			fill: 'forwards',
		});
	} else if (enterAnimation === 'fade') {
		if (verticalPosition === 'middle') {
			element.style.top = '50%';
			element.style.transform = 'translateY(-50%)';
		} else {
			let finalVertical: string | number;

			if (element.getAttribute('mini-toast-id') === '1') {
				finalVertical = vDistance + 'px';
			} else {
				finalVertical = vDistance;
				finalVertical += (parseInt(element.getAttribute('mini-toast-id') ?? '') - 1) * element.offsetHeight;
				finalVertical += (parseInt(element.getAttribute('mini-toast-id') ?? '') - 1) * vDistance;
				finalVertical = finalVertical.toString() + 'px';
			}

			newStyle = verticalPosition + ': ' + finalVertical + '; ';

			changeStyle(element, newStyle);
		}

		if (horizontalPosition === 'center') {
			element.style.left = '50%';
			element.style.transform = 'translateX(-50%)';
		} else {
			newStyle = horizontalPosition + ': ' + hDistance + 'px' + '; ';

			changeStyle(element, newStyle);
		}
	}
};

export default handleEnter;
