const positions = {
	'top-right': {
		v: 'top',
		h: 'right',
		vOpposite: 'bottom',
		hOpposite: 'left',
	},
	'top-center': {
		v: 'top',
		h: 'center',
		vOpposite: 'bottom',
		hOpposite: '',
	},
	'top-left': {
		v: 'top',
		h: 'left',
		vOpposite: 'bottom',
		hOpposite: 'right',
	},
	'middle-right': {
		v: 'middle',
		h: 'right',
		vOpposite: '',
		hOpposite: 'left',
	},
	'middle-center': {
		v: 'middle',
		h: 'center',
		vOpposite: '',
		hOpposite: '',
	},
	'middle-left': {
		v: 'middle',
		h: 'left',
		vOpposite: '',
		hOpposite: 'right',
	},
	'bottom-right': {
		v: 'bottom',
		h: 'right',
		vOpposite: 'top',
		hOpposite: 'left',
	},
	'bottom-center': {
		v: 'bottom',
		h: 'center',
		vOpposite: 'top',
		hOpposite: '',
	},
	'bottom-left': {
		v: 'bottom',
		h: 'left',
		vOpposite: 'top',
		hOpposite: 'right',
	},
};

const styles = {
	'slide-top': {
		animation: 'slide',
		direction: 'top',
	},
	'slide-right': {
		animation: 'slide',
		direction: 'right',
	},
	'slide-bottom': {
		animation: 'slide',
		direction: 'bottom',
	},
	'slide-left': {
		animation: 'slide',
		direction: 'left',
	},
	fade: {
		animation: 'fade',
		direction: 'fade',
	},
};

const verticalPositions: string[] = ['top', 'middle', 'bottom'];
const horizontalPositions: string[] = ['left', 'center', 'right'];

const handleExit = (element: HTMLDivElement, position: string, exit: string, duration: number) => {
	let verticalPosition = positions[position as keyof typeof positions].v;
	let horizontalPosition = positions[position as keyof typeof positions].h;
	const verticalOpposite = positions[position as keyof typeof positions].vOpposite;
	const horizontalOpposite = positions[position as keyof typeof positions].hOpposite;

	const exitAnimation = styles[exit as keyof typeof styles].animation;
	const exitDirection = styles[exit as keyof typeof styles].direction;

	element.style.minWidth = element.offsetWidth - 20 + 'px';

	if (exitAnimation === 'slide') {
		interface Keyframes {
			[key: string]: string | number;
		}

		const keyframes: Keyframes = {};

		if (verticalPositions.includes(exitDirection)) {
			if (element.style[exitDirection as keyof typeof element.style] !== '') {
				keyframes[exitDirection] = '-' + element.clientHeight + 'px';
			} else {
				if (verticalPosition === 'middle') {
					verticalPosition = element.style.top === '' ? 'bottom' : 'top';
				}

				if (verticalPosition === exitDirection) {
					keyframes[verticalOpposite] = window.innerHeight + 50;
					keyframes[verticalOpposite] += 'px';
				} else {
					keyframes[verticalPosition] = window.innerHeight + 50;
					keyframes[verticalPosition] += 'px';
				}
			}
		}

		if (horizontalPositions.includes(exitDirection)) {
			if (element.style[exitDirection as keyof typeof element.style] !== '') {
				keyframes[exitDirection] = '-' + element.clientWidth + 'px';
			} else {
				if (horizontalPosition === 'center') {
					horizontalPosition = element.style.left === '' ? 'right' : 'left';
				}

				if (horizontalPosition === exitDirection) {
					keyframes[horizontalOpposite] = window.innerWidth;
					keyframes[horizontalOpposite] += 'px';
				} else {
					keyframes[horizontalPosition] = window.innerWidth;
					keyframes[horizontalPosition] += 'px';
				}
			}
		}

		element.animate([keyframes], {
			duration: duration,
			easing: 'ease-in-out',
			fill: 'forwards',
		});
	} else if (exitAnimation === 'fade') {
		element.style.opacity = '0';
	}
	setTimeout(() => element.remove(), 1000);
};

export default handleExit;
