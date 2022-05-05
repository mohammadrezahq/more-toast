class Timer {
	callback: any;
	remainingTime: number;
	startTime: Date;
	timerId: any;

	constructor(callback: any, delay: any) {
		this.callback = callback;
		this.remainingTime = delay;
		this.startTime = new Date();
	}

	pause() {
		clearTimeout(this.timerId);
		this.remainingTime -= new Date().valueOf() - this.startTime.valueOf();
	}

	resume() {
		this.startTime = new Date();
		clearTimeout(this.timerId);
		this.timerId = setTimeout(this.callback, this.remainingTime);
	}

	start() {
		this.timerId = setTimeout(this.callback, this.remainingTime);
	}
}

export default Timer;
