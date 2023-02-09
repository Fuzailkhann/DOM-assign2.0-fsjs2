

let  h1Title = document.querySelector("h1.title");
h1Title.style.color = "red";

h1Title.style.color = "black"


// creating a reference for button 
let addCart = document.querySelector(".add-to-cart");

addCart.addEventListener("mouseenter" , ()=>{
    addCart.style.backgroundColor = "red";
})

addCart.addEventListener("mouseleave" , () =>{
    addCart.style.backgroundColor = "green";
}
)