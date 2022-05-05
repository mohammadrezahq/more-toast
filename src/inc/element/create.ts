import Options from '../../types/Options';

const createElement = (options: Options): HTMLDivElement => {
	const config = options.config;
	const style = options.style;
	const advanced = options.advanced;

	const e = document.createElement('div');

	if (document.getElementsByClassName('more-toast').length === 0 || config.overlayToast === true) {
		e.setAttribute('more-toast-id', '1');
	} else {
		for (let i = 1; i <= document.getElementsByClassName('more-toast').length + 1; i++) {
			if (!document.querySelector("[more-toast-id='" + i + "']") && !e.getAttribute('more-toast-id')) {
				e.setAttribute('more-toast-id', i.toString());
			}
		}
	}

	e.setAttribute('class', 'more-toast ' + style.customClass);

	e.addEventListener('click', () => {
		advanced.onClick();
	});

	return e;
};

export default createElement;
