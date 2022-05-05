# More Toast

#### Read the documentation here: https://mohammadrezahq.github.io/more-toast/

### Setup:

Install package with npm:

```
npm i more-toast
```

### Import

```js
import Toast from 'more-toast';
```

### Initialize

```js
// Default parameters.

const config = {
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

const style = {
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

const advanced = {
	enterDuration: 1000,
	exitDuration: 1000,
	vDistance: 10,
	hDistance: 10,
	onClick: () => {
		return;
	},
	buttons: null,
};

const toast = new Toast(config, style, advanced);
```

<b>Learn more in the documentation</b>

### Show the toast

```js
toast.show(String message, String body = '');
```
