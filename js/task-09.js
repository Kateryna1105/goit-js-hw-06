
const buttonClick = document.querySelector('.change-color');
const widget = document.querySelector('.widget');
const colorSpan = document.querySelector('.color');

buttonClick.addEventListener('click', changeColorBtn);

function changeColorBtn(event) {
  colorSpan.textContent = getRandomHexColor();
  widget.style.background = colorSpan.textContent;

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)}`;
  }
}

