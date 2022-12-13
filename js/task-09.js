
const buttonClick = document.querySelector('.change-color');
const widget = document.querySelector('.widget');
const colorSpan = document.querySelector('.color');
const body = document.querySelector('body');

buttonClick.addEventListener('click', changeColorBtn);

function changeColorBtn(event) {
  colorSpan.textContent = getRandomHexColor();
 body.style.backgroundColor = colorSpan.textContent;

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)}`;
  }
}

