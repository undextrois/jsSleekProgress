class Notification {
  constructor(type, message) {
    this.notificationElement = document.createElement('div');
    this.notificationElement.className = `notification ${type}`;
    this.notificationElement.innerText = message;
  }

  show() {
    document.body.appendChild(this.notificationElement);

    // Automatically hide after 3 seconds (adjust as needed)
    setTimeout(() => {
      this.hide();
    }, 3000);
  }

  hide() {
    document.body.removeChild(this.notificationElement);
  }
}
