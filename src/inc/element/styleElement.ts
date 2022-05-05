import Options from '../../types/Options';

const styleElement = (e: HTMLDivElement, options: Options): void => {
	const config = options.config;
	const style = options.style;
	const advanced = options.advanced;

	e.style.position = 'fixed';
	e.style.display = 'block';
	e.style.opacity = '0';
	e.style.boxShadow = '0px 6px 17px 2px rgba(0,0,0,0.10)';
	e.style.maxWidth = style.maxWidth;
	e.style.overflow = 'hidden';

	e.style.backgroundColor = style.bodyBgColor;
	e.style.backgroundImage = style.bodyBgGradient;
	e.style.color = style.bodyTextColor;
	e.style.transition = 'opacity ' + advanced.enterDuration + 'ms';
	e.style.fontSize = style.titleFontSize;
	e.style.borderRadius = style.borderRadius;
	e.style.fontFamily = style.fontFamily;
	e.style.direction = config.dir;
};

export default styleElement;
