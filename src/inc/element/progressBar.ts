import Style from '../../types/Style';

const setProgressBar = (element: HTMLDivElement, style: Style) => {
	const progressBar = document.createElement('div');

	progressBar.style.width = '100%';
	progressBar.style.backgroundColor = style.progressBarBackColor ?? '';
	progressBar.style.height = '2px';

	if (style.progressBarPosition !== 'before_body') {
		progressBar.style.position = 'absolute';
	}

	progressBar.style.left = '0';
	progressBar.style.right = '0';

	if (style.progressBarPosition === 'top') {
		progressBar.style.top = '0';
	} else {
		progressBar.style.bottom = '0';
	}

	const progress = document.createElement('div');

	progress.setAttribute('id', 'more-toast-progress' + element.getAttribute('more-toast-id'));

	progress.style.width = '1%';
	progress.style.height = '100%';

	if (style.progressBarColor !== '') {
		progress.style.backgroundColor = style.progressBarColor ?? '';
	} else {
		progress.style.backgroundImage = style.progressBarGradient ?? '';
	}

	progressBar.appendChild(progress);

	element.appendChild(progressBar);

	return element;
};

export default setProgressBar;
