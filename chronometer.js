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
    if (!this.intervalId) {
      this.intervalId = setInterval(this.timer, 1000);
    }
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}
