const input = document.querySelector(`#validation-input`);

const maxLength = +input.getAttribute('data-length');

input.addEventListener(`blur`, onInputBlur);


function onInputBlur(event) {
    console.log(event.currentTarget.value.length);    
    if (event.currentTarget.value.length === maxLength) {
        input.classList = 'valid';
    } else ( input.classList = 'invalid' );        
}


 
