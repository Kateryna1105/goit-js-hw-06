const form = document.querySelector(`.login-form`);
form.addEventListener('submit', onFormSubmit);
console.log(form);

function onFormSubmit(event) {
    event.preventDefault();
     
    const formData = new FormData(event.currentTarget);

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("All form fields must be completed");
    }

    event.currentTarget.reset(); 
    
    formData.forEach((value, nameY) => {
        console.log(`onFormSubmit->name`, nameY);
        console.log(`onFormSubmit->value`, value);
    });
}




