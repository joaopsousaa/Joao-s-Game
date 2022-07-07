class Chronometer {
  constructor() {
    this.currentTimeSecs = 0;
    this.intervalId = null;
  }

  timer() {
    this.currentTimeSecs++;

    let mins = Math.floor(this.currentTimeSecs / 60);
    let secs = Math.floor(this.currentTimeSecs % 60);

    if (secs < 10) {
      secs = "0" + secs;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    timeElement.innerHTML = `${mins}:${secs}`;
  }

  startTimer() {
    // console.log(this);

    if (!this.intervalId) {
      this.intervalId = setInterval(() => this.timer(), 1000);
    }
  }

  remove10Seconds() {
    if (this.currentTimeSecs < 10) {
      return;
    }

    this.currentTimeSecs = this.currentTimeSecs - 10;
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  // Inside function () {} syntax, this is the Window object.
  // Inside () => {} syntax, thuis is relative to the class
  // functionToProve() {
  //   console.log(this);

  //   setTimeout(() => {
  //     console.log("THIS INSIDE ARROW", this);
  //   }, 1000);

  //   setTimeout(function () {
  //     console.log("THIS INSIDE NORMAL", this);
  //   }, 1000);
  // }
}
