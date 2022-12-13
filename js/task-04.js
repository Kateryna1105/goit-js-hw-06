
const counterValue = document.querySelector(`#value`);

console.log(counterValue.textContent);

const decrementBtnEl = document.querySelector(`[data-action="decrement"]`);
const incrementBtnEl = document.querySelector(`[data-action="increment"]`);
console.log(decrementBtnEl);
console.log(incrementBtnEl);

decrementBtnEl.addEventListener('click', onDecrementValue);
incrementBtnEl.addEventListener(`click`, onIncrementValue);

function onDecrementValue() {
        return (counterValue.textContent =
          Number(counterValue.textContent) - 1);
} 

function onIncrementValue() {
    return (counterValue.textContent = Number(counterValue.textContent) + 1);
      
} 

