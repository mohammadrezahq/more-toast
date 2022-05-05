interface Style {
	icon: 'none' | 'success' | 'alert' | 'error';
	iconUrl: string;
	maxWidth: string;
	titleBgColor: string;
	titleBgGradient: string;
	titleTextColor: string;
	bodyBgColor: string;
	bodyBgGradient: string;
	bodyTextColor: string;
	iconColor: string;
	border: string;
	borderRadius: string;
	titleFontSize: string;
	padding: string;
	fontFamily: string;
	closeIconColor: string;
	progressBarBackColor: string;
	progressBarColor: string;
	progressBarGradient: string;
	progressBarPosition: 'top' | 'bottom' | 'before_body';
	bodyPadding: string;
	bodyBorderTop: string;
	customClass: string;
}

export default Style;
