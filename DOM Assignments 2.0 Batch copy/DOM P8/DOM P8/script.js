

// set overflow auto to get scroll bar
let scroll = document.querySelector(".new");
scroll.style.overflow = "scroll";
scroll.style.border = "2px solid red" ;



let scrollAgain = document.querySelector(".new");
scrollAgain.style.overflow = "hidden"
scrollAgain.style.border = "none"


// // // // hide body background image

let i = document.querySelector("body");
i.style.background= "none";



// let a = document.querySelector("button");

// let count = 0;

// a.addEventListener('click' , (e) =>{
//   e.preventDefault();

//   count += 1;

//   if (count % 2 == 0){
//     document
//     .querySelector("#navbarTogglerDemo01")
//     .setAttribute("class" , "collapse navbar-collapse");
  
//   }else if (count % 2 !== 0  ){
//     document
//     .querySelector(".collapse")
//     .setAttribute("class" , "collapses navbar-collapse");
//   }

// } )

let navBar = document.querySelector(".navbar-toggler");
navBar.addEventListener('click' , function(){
  document
  .querySelector("#navbarTogglerDemo01")
  .classList.toggle("collapse");
})



