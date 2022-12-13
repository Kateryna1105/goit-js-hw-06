const refs = {
    input: document.querySelector(`#name-input`),
    nameLabel: document.querySelector(`#name-output`),
}
console.log(refs);

refs.input.addEventListener(`input`, onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
}


