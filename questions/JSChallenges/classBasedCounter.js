class Counter {
  constructor(counterElement) {
    this.counterElement = counterElement;
    this.clearCounter();
  }
  // by default running this function to activate this.counter
  clearCounter() {
    this.counter = 0;
  }
  increaseCounter() {
    return (this.counter = this.counter + 1);
  }
  decreaseCounter() {
    if (this.counter === 0) {
      this.showAlert();
    } else {
      return (this.counter = this.counter - 1);
    }
  }
  showAlert() {
    alert('Your Counter is going to negative number');
  }
  updateDisplayCounter() {
    this.counterElement.innerText = Number(this.counter);
  }
}
// query selector
const counterSelector = document.querySelector('.counter');
const increaseCounterButton = document.querySelector('.increase-button');
const decreaseCounterButton = document.querySelector('.decrease-button');
// main counter object
const newCounter = new Counter(counterSelector);
// adding event listener to counter
increaseCounterButton.addEventListener('click', () => {
  newCounter.increaseCounter();
  newCounter.updateDisplayCounter();
});

decreaseCounterButton.addEventListener('click', () => {
  newCounter.decreaseCounter();
  newCounter.updateDisplayCounter();
});
