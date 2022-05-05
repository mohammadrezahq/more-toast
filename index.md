# More Toast for JavaScript

### Installation:

Install package with npm:

```
npm i more-toast
```

### Usage

```js
import Toast from 'more-toast';

// In the following, you can customize the toast.
const toast = new Toast(config, style, advanced);

// Message will be the title of the toast
toast.show(String message, String body = '');
```

### Configuration

#### Set Position of the toast

```js
const config = {
    position: 'top-left' // default 
}

const toast = new Toast(config);
```
The position of the toast should be a combination of a vertical position and - a horizontal position: 'top-left', 'middle-center', 'bottom-right'


#### Enter and Exit animation of the toast

You can set the enter and exit animation:

```js
const config = {
    in: 'slide-left', // enter animation: Slide From Left - default 
    out: 'slide-left' // exit animation: Slide To Left - default 
}
```

<b>At the moment</b> This just supports 'slide' animations and 'fade'. 'v1.0.x'


#### Show time

How long this toast stays on the web page.

```js
const config = {
    showtime: 3000 // ms: default 
}
```

#### Language Direction

```js
const config = {
    dir: 'ltr' // default | or 'rtl'
}
```

#### Manually closing the toast

```js
const config = {
    canClose: false // default,
    onlyClose: false // default
}
```

<b>canClose:</b> by setting true this option, close button shows to user.
<b>onlyClose:</b> by setting true this option, the toast will stay on the web page until user clicks on the close button. (showTime is ignored)


#### Overlay toast

At default, overlay toast is disabled, so multiple toasts will be shown under each other. if it's enabled, toasts cover each other.

```js
const config = {
    overlayToast: false // default
}
```

> Multiple toasts does not support on toasts with 'middle' vertically position.

#### Progress Bar

```js
const config = {
    progressBar: false // default
}
```

> To change the style of the progress bar, see styling section. 

#### Pause on hover

This option will pause the show time and progress bar ( if it's enabled ), on user hover.

```js
const config = {
    pauseOnHover: true // default
}
```


### Styling

#### Set icon

```js
const style = {
    icon: 'success' // default 
}

const toast = new Toast(config, style);
```
Icons: 'none', 'success', 'alert', 'warn', 'error'

Or you can use custom icon:

```js
const style = {
    iconUrl: '' // default 
}
```

#### Other options

```js
const style = {
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
```

### Advanced

#### Enter and Exit Duration

```js
const advanced = {
  enterDuration: 1000, // default
  exitDuration: 1000 // default
}

const toast = new Toast(config, style, advanced);
```

#### Toast Distance from Each Other and Web Page

```js
const advanced = {
  vDistance: 10, // Distance from Top,Bottom(By px) - default
  hDistance: 10 //  Distance from Right,Left(By px) - default
}
```

#### On click callback

tryMe function will be executed when user clicks on the toast.

```js
const tryMe = () => {
  console.log('someone clicked on me!');
}

const advanced = {
  onClick: tryMe
}
```

#### Buttons

```js
const advanced = {
  buttons: {
   options: ['Accept', 'Reject', 'Shake'],
   position: 'in_title' | 'in_body',
   callback: handleButtons
  },
}

const handleButtons = (toast) => {

  if (toast.value == 'Accept') {
    toast.close(); // this will close the toast
  } else if (toast.value === 'Reject') {
    toast.removeButtons(); // this will remove all buttons
  } else {
    toast.shake(); // this will shake the toast =)
  }
  
  // toast.disable(); // this will disable buttons
  // toast.enable(); // this will enable buttons
  
}
```

### Show the toast

```js
toast.show(String message, String body = '') // body is optional
```
