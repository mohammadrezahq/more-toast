class Trigger {
	value: any;
	element: HTMLDivElement;
	private exit: any;
	private options: HTMLButtonElement[];

	constructor(element: HTMLDivElement, exit: any) {
		this.value = '';
		this.element = element;
		this.exit = exit;
		this.options = [];
	}

	setOption(option: HTMLButtonElement): Trigger {
		this.options.push(option);

		return this;
	}

	setValue(value: any): Trigger {
		this.value = value;

		return this;
	}

	close() {
		this.disable();
		this.exit();
	}

	removeButtons() {
		this.options.forEach((button) => {
			button.remove();
		});
	}

	disable() {
		this.options.forEach((button) => {
			button.disabled = true;
		});
	}

	enable() {
		this.options.forEach((button) => {
			button.disabled = false;
		});
	}

	shake() {
		const keyframes = [
			{ transform: 'translate(1px, 1px) rotate(0deg)' },
			{ transform: 'translate(-3px, 0px) rotate(1deg)' },
			{ transform: 'translate(-1px, 2px) rotate(-1deg)' },
			{ transform: 'translate(-1px, -1px) rotate(1deg)' },
			{ transform: 'translate(1px, -2px) rotate(-1deg)' },
			{ transform: 'translate(0, 0) rotate(0)' },
		];

		this.element.animate(keyframes, {
			duration: 300,
			easing: 'ease-in-out',
			fill: 'forwards',
		});
	}
}

export default Trigger;
