const form = document.querySelector(`.login-form`);

form.addEventListener('submit', onFormSubmit);
console.log(form);

function onFormSubmit(event) {
    event.preventDefault();
     
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("All form fields must be completed");
    }

     const newObject = {
       email: email.value,
       password: password.value,
     };


    event.currentTarget.reset(); 
   
    console.log(newObject);
    }




