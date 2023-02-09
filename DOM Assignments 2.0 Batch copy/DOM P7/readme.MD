# javascript DOM assignment 2.0 of 07 project
## _ 2.0 => 1 ,2 ,3_DOM project : Equalizer landing page_
## my name is `Fuzail khan`
**Project 07**

  -  Table of Contents
       * 1. Project7 - Language Landing Page
        *    i. Task1: Removing the languages that have 2.0 in their name
        *    ii. Task2: Use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.

---

![img](./DOM%20P7/ass7.1-after.png)
```javascript
// creating reference main language a section
let  mainLanA = document.querySelectorAll(".main__languages a");
// converting nodeList to array
let arrMainLan = Array.from(mainLanA);

// removing 2.0 
arrMainLan.forEach((a) =>{
    if(a.textContent.includes(' 2.0')){
        a.style.display = "none"
    }
} )
 ```
___

##  *    ii. Task2: Use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.
![img](./DOM%20P7/ass7.2-after.png)

```javascript
// local storage data servives a full page refresh or even a full browser restart
/*  ---- their are method provided by local storage----*/
// setItem store key/value pair
// gatItem get the value by key (getItem show the value of that key )

// creating reference to  input and button in the form
let mainFormInput = document.querySelector(".main__form-input");
let mainFormbtn = document.querySelector(".main__form-btn");

// enabling input and button we are removing disable attribute

mainFormInput.removeAttribute("disabled");
mainFormbtn.removeAttribute("disabled");

// storing the input value in local storage

mainFormbtn.addEventListener("click" , (e) =>{
    e.preventDefault();
    localStorage.setItem("inputValue" , mainFormInput.value );
    location.reload();
} )

// storing languages in left card

window.addEventListener('load' , () => {
    const storedVal = localStorage.getItem("inputValue");
    // mainFormInput.value = storedVal;
    let mainLans = document.querySelector(".main__languages");
    let a = document.createElement("a");
    a.target = "blank";
    a.href = "https://www.ineuron.ai";
    a.innerText = storedVal;
    mainLans.append(a); 
})

````


