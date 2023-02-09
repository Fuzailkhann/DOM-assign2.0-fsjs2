
/*------Adding  skill div in faq section and adding text in it------ */
// create a reference of faq section
let faqSec = document.querySelector(".accordian-wrapper");
// we are creating a div for skills section
let div = document.createElement("div");
div.className = "accordian";

// we have to create h3 
let h3 = document.createElement("h3");
h3.innerText = "Skills";

// now we are creating paragraph
 let par = document.createElement("p");
 par.innerText = "I posses a very good command over the Full Stack developement technologies like MERN which can be seen in my work over the gitHub ";
 div.append(h3);
 div.append(par);
 faqSec.append(div);

let accordian = document.querySelectorAll("h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});



// changing background color of all h3 tags in faq section
Array.from(accordian);
accordian.forEach((element) =>{
  element.style.background = "#DADAF8";
});







 
