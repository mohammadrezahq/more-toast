import Advacned from '../../types/Advanced';
import Config from '../../types/Config';
import Options from '../../types/Options';
import Style from '../../types/Style';
import handleExit from '../handleExit';
import handleButtons from '../handleButtons';
import icons from '../icons';

const closeToastWithButton = (element: HTMLDivElement, config: Config, advanced: Advacned) => {
	handleExit(element, config.position ?? '', config.out ?? '', advanced.exitDuration ?? 0);
};

const setCloseButton = (element: HTMLDivElement, title: HTMLDivElement, options: Options): void => {
	const config = options.config;
	const style = options.style;
	const advanced = options.advanced;

	const closeElement = document.createElement('span');

	closeElement.style.verticalAlign = 'middle';
	closeElement.style.margin = '0 5px';
	closeElement.style.display = 'inline-block';
	closeElement.style.cursor = 'pointer';
	closeElement.innerHTML += icons('close', style.closeIconColor ?? '');

	closeElement.addEventListener('click', () => {
		closeToastWithButton(element, config, advanced);
	});

	title.appendChild(closeElement);
};

const setMessage = (element: HTMLDivElement, message: string): void => {
	const span = document.createElement('span');

	span.style.width = '100%';

	span.innerHTML = message;

	element.appendChild(span);
};

const setIcon = (element: HTMLDivElement, style: Style): void => {
	const icon = style.icon ?? '';

	if (style.iconUrl !== '') {
		element.innerHTML +=
			"<span style='margin:0 5px; display:inline-block; vertical-align: middle;'>" +
			"<img src='" +
			style.iconUrl +
			"'>" +
			'</span>';
	} else {
		if (icon !== 'none') {
			element.innerHTML +=
				"<span style='margin:0 5px; display:inline-block; vertical-align: middle;'>" +
				icons(icon, style.iconColor ?? '') +
				'</span>';
		}
	}
};

const setTitle = (element: HTMLDivElement, message: string, options: Options): void => {
	const config = options.config;
	const style = options.style;
	const advanced = options.advanced;

	const titleELement = document.createElement('div');

	titleELement.style.backgroundColor = style.titleBgColor;
	titleELement.style.color = style.titleTextColor;
	titleELement.style.backgroundImage = style.titleBgGradient;

	setIcon(titleELement, style);

	setMessage(titleELement, message);

	if (advanced.buttons?.position === 'in_title') {
		const question = handleButtons(element, options);
		titleELement.appendChild(question);
	}

	if (config.canClose) {
		setCloseButton(element, titleELement, options);
	}

	titleELement.style.display = 'flex';
	titleELement.style.justifyContent = 'space-between';
	titleELement.style.alignItems = 'center';
	titleELement.style.padding = style.padding ?? '';

	element.appendChild(titleELement);
};

export default setTitle;
