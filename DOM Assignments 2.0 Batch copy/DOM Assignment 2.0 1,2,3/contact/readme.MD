# javascript DOM Assignment 0.3 Project3 Protfolio Website (About Page)
## myname is `fuzail khan`
___
## Table of conntent


   - Table of Contents
       * 1. Project3 - Portfolio Website (Contact Page)
           * i. Task1: Submitting Details in input form and displaying the same detail in output form
           * ii. Task2: Resetting Details in input and output form
---
## 1. Project3 - Portfolio Website (Contact Page)

### Task1: Submitting Details in input form and displaying the same detail in output form
```javascript

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
```

---

###  ii. Task2: Resetting Details in input and output form

```javasccript 
/* -----Task2: Resetting Details in input and output form  ---- */
const leftForm = document.querySelector(".mainLeftDetails");
leftForm.addEventListener('reset' , (event) =>{
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    
} );
```

