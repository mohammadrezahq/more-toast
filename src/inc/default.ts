import Config from '../types/Config';
import Style from '../types/Style';
import Advanced from '../types/Advanced';

const getDefaultConfig: Config = {
	position: 'top-left',
	in: 'slide-left',
	out: 'slide-left',
	showTime: 3000,
	dir: 'ltr',
	canClose: false,
	onlyClose: false,
	overlayToast: false,
	progressBar: false,
	pauseOnHover: true,
};

const getDefaultStyle: Style = {
	icon: 'success',
	iconUrl: '',
	maxWidth: '450px',
	titleBgColor: 'initial',
	titleBgGradient: '',
	titleTextColor: 'black',
	bodyBgColor: 'white',
	bodyBgGradient: '',
	bodyTextColor: 'black',
	iconColor: 'black',
	border: 'none',
	borderRadius: '10px',
	titleFontSize: '16px',
	padding: '10px',
	fontFamily: 'inherit',
	closeIconColor: 'black',
	progressBarBackColor: '#eee',
	progressBarColor: '',
	progressBarGradient: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
	progressBarPosition: 'bottom',
	bodyPadding: '10px',
	bodyBorderTop: '4px dotted #eee',
	customClass: '',
};

const getDefaultAdvanced: Advanced = {
	enterDuration: 1000,
	exitDuration: 1000,
	vDistance: 10,
	hDistance: 10,
	onClick: () => { return; },
	buttons: null,
};

export { getDefaultConfig, getDefaultStyle, getDefaultAdvanced };
