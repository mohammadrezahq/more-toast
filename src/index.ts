import { getDefaultConfig, getDefaultAdvanced, getDefaultStyle } from './inc/default';

import handleEnter from './inc/handleEnter';
import handleExit from './inc/handleExit';

import styleElement from './inc/element/styleElement';

import Config from './types/Config';
import Style from './types/Style';
import Advanced from './types/Advanced';
import Options from './types/Options';

import Timer from './inc/Timer';
import setTitle from './inc/element/setTitle';
import setProgressBar from './inc/element/progressBar';
import setBody from './inc/element/setBody';
import createElement from './inc/element/create';
import handleQuestion from './inc/handleButtons';

class Toast {

	config: Config;
	style: Style;
	advanced: Advanced;

	options: Options;

	constructor(config: Partial<Config> = getDefaultConfig, style: Partial<Style> = getDefaultStyle, advanced: Partial<Advanced> = getDefaultAdvanced) {
		this.config = { ...getDefaultConfig, ...config };
		this.style = { ...getDefaultStyle, ...style };
		this.advanced = { ...getDefaultAdvanced, ...advanced };

		this.options = {
			config: this.config,
			style: this.style,
			advanced: this.advanced,
		};
	}

	show(message: string, body: string = ''): void {
		let element: HTMLDivElement;

		element = createElement(this.options);

		styleElement(element, this.options);

		setTitle(element, message, this.options);

		if (this.config.progressBar) {
			setProgressBar(element, this.style);
		}

		if (body !== '') {
			setBody(element, body, this.options);
		}

		if (this.advanced.buttons?.position === 'in_body') {
			const question = handleQuestion(element, this.options);
			element.appendChild(question);
		}

		document.body.appendChild(element);

		handleEnter(element, this.options);

		let timer: Timer;

		if (this.config.onlyClose === false) {
			timer = new Timer(() => {
				handleExit(element, this.config.position ?? '', this.config.out ?? '', this.advanced.exitDuration ?? 0);
			}, this.config.showTime);

			timer.start();
		}

		if (this.config.progressBar) {
			const progress = document.getElementById('more-toast-progress' + element.getAttribute('more-toast-id'));

			const pg = progress?.animate(
				[
					{
						width: '100%',
					},
				],
				{
					duration: this.config.showTime,
					easing: 'ease-in-out',
					fill: 'forwards',
				},
			);

			const config = this.config;

			if (this.config.pauseOnHover) {
				element.addEventListener('mouseenter', () => {
					if (config.onlyClose === false) {
						timer.pause();
					}
					pg?.pause();
				});

				element.addEventListener('mouseleave', () => {
					if (config.onlyClose === false) {
						timer.resume();
					}
					pg?.play();
				});
			}
		}

		setTimeout(() => (element.style.opacity = '1'), 100);
	}
}

export default Toast;
