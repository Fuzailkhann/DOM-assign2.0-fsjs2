
# 1.javascript -> DOM Assignment
** 04_DOM Project : clash of clan character Page **
## my name is `fuzail khan`

# task 1 : colouring the detail background and text card

/* -----Task1: Coloring the details background of Card---- */

// Generating the refernce to clearfix in the card 
let clearfix = document.querySelectorAll(".clearfix");



// storing the color in array
let arr = ["#EC9B3B", "#EE5487", "#F6901A", "#82BB30", "#4FACFF"];

// coloring all background of deatils in card
for(let i=0; i<5; i++){
clearfix[i].style.background = arr[i];
}

// Generating the reference to div of .one-third
let oneThird = document.querySelectorAll(".one-third");

// coloring the text to white in details part
oneThird.forEach((e) =>{
    e.style.color="#fff";
})