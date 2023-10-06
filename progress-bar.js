class ProgressBar {
  constructor() {
    this.progressBarElement = document.createElement('div');
    this.progressBarElement.className = 'progress-bar';
  }

  show() {
    document.body.appendChild(this.progressBarElement);
  }

  hide() {
    document.body.removeChild(this.progressBarElement);
  }
}
