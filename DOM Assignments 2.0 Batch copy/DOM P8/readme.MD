# javascript DOM assignment 2.0 of 08 project
## _ 2.0 => 1 ,2 ,3_DOM project : Equalizer landing page_
## my name is `Fuzail khan`
**Project 08**
## Task-01: set overflow auto or scroll to get scrollbar

![](./DOM%20P8/ass8.1-after.png)
```javscript 
// set overflow auto to get scroll bar
let scroll = document.querySelector(".new");
scroll.style.overflow = scroll";
scroll.style.border = "2px solid red" ;
```

___

## Task-02: hide scrollbar and hide background lined point
![](./DOM%20P8/ass8.1-before.png)
```javascript
// let scrollAgain = document.querySelector(".new");
// scrollAgain.style.overflow = "hidden"
// scrollAgain.style.border = "none"


// // // // hide body background image

// let i = document.querySelector("body");
// i.style.background= "none";
```

---

### Task-03: Toggle the button and get back nav bar
![](./DOM%20P8/ass8.3-after.png)

```javscript 

let a = document.querySelector("button");

let count = 0;

a.addEventListener('click' , (e) =>{
  e.preventDefault();

  count += 1;

  if (count % 2 == 0){
    document
    .querySelector("#navbarTogglerDemo01")
    .setAttribute("class" , "collapse navbar-collapse");
  
  }else if (count % 2 !== 0  ){
    document
    .querySelector(".collapse")
    .setAttribute("class" , "collapses navbar-collapse");
  }

  /* -------another method -----*/
  let navBar = document.querySelector(".navbar-toggler");
navBar.addEventListener('click' , function(){
  document
  .querySelector("#navbarTogglerDemo01")
  .classList.toggle("collapse");
})

```
