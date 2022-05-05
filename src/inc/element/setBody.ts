import Options from '../../types/Options';

const setBody = (element: HTMLDivElement, body: string, options: Options): void => {
	const style = options.style;

	const bodyElement = document.createElement('div');

	bodyElement.innerHTML = body;

	bodyElement.style.padding = style.bodyPadding;
	bodyElement.style.borderTop = style.bodyBorderTop;

	element.appendChild(bodyElement);
};

export default setBody;
