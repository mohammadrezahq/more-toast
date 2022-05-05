interface Config {
	position: 'top-left'
		| 'top-center'
		| 'top-right'
		| 'middle-left'
		| 'middle-center'
		| 'middle-right'
		| 'bottom-left'
		| 'bottom-center'
		| 'bottom-right';
	in: 'fade' | 'slide-top' | 'slide-left' | 'slide-right' | 'slide-bottom';
	out: 'fade' | 'slide-top' | 'slide-left' | 'slide-right' | 'slide-bottom';
	showTime: number;
	dir: 'ltr' | 'rtl';
	canClose: boolean;
	onlyClose: boolean;
	overlayToast: boolean;
	progressBar: boolean;
	pauseOnHover: boolean;
}

export default Config;
