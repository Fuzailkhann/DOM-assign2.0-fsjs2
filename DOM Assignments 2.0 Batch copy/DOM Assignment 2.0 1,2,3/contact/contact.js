
/* -----Task1: Submitting Details in input form and displaying the same detail in output form ---- */
const form = document.querySelector(".mainRight form");
const nameInput = document.querySelector(".userName");
const emailInput = document.querySelector(".userEmail");
const messageInput =  document.querySelector(".userMessage");
const nameOpt = document.querySelector(".enterName");
const emailOpt= document.querySelector(".enterMail");
const messageOpt = document.querySelector(".enterMessage");

form.addEventListener('submit' , (event) => {
    event.preventDefault();

    let name = nameInput.value;
    let email = emailInput.value;
    let message = messageInput.value;
    console.log(name)
    console.log(email);

    nameOpt.value = name;
    emailOpt.value = email;
    messageOpt.value = message;
});


/* -----Task2: Resetting Details in input and output form  ---- */
const leftForm = document.querySelector(".mainLeftDetails");
leftForm.addEventListener('reset' , (event) =>{
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    
} );
