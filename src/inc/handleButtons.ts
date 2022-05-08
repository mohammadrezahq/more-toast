import Options from '../types/Options';
import handleExit from './handleExit';
import Trigger from './Trigger';

const defaultButtonStyle = (element: HTMLButtonElement) => {
	element.style.border = '1px solid #555555';
	element.style.color = '#555555';
	element.style.padding = '2px 10px';
	element.style.margin = '4px';
	element.style.borderRadius = '10px';
}

const handleButtons = (element: HTMLDivElement, options: Options): HTMLDivElement => {
	const config = options.config;
	const style = options.style;
	const advanced = options.advanced;

	const questionBox = document.createElement('div');

	questionBox.style.display = 'flex';

	let trigger = new Trigger(element, () => {
		handleExit(element, config.position ?? '', config.out ?? '', advanced.exitDuration ?? 0);
	});

	advanced.buttons?.options.forEach((value, index) => {
		const question = document.createElement('button');
		let selected: string;

		if (typeof value === 'string') {

			question.innerHTML = value;

			selected = value;

			defaultButtonStyle(question);

		} else {

			question.innerHTML = value.name;

			selected = value.name;

			if (value.style !== undefined || value.class !== undefined) {

				question.setAttribute('class', value.class ?? '');

				question.setAttribute('style', value.style ?? '');

	
			} else {

				defaultButtonStyle(question);

			}
	
		}


		trigger = trigger.setOption(question);

		question.addEventListener('click', () => {
			trigger = trigger.setValue(selected);
			advanced.buttons?.callBack(trigger);
		});

		questionBox.appendChild(question);
	});

	return questionBox;
};

export default handleButtons;
