

// creating reference to nav ul element
let navUl = document.querySelector("ul");

// creating li for hire me button
let li= document.createElement("li");

// creating anchor tag 
let a = document.createElement("a");
a.href = "./hireMe";
a.innerText = "Hire Me";

// we are going to ADD the element
li.append(a);
navUl.append(li);

// 1.1) changing contact button  to project button in 

let nav = document.querySelector("nav");
let aTag = nav.querySelectorAll("a");

// selecting the contact button 
let contact = Array.from(aTag).filter((aTag) =>
aTag.textContent === "Contact")[0];

// changing the innerText to project
 contact.innerText = "Project";

 // hidding ul of footer
 // creating refference to footer and ul
let footer = document.querySelector("footer");
let ul=footer.querySelector("ul");

// now we are doing display to none 
ul.style.display = "none";

/* -------ii. Task2: Hidding Hire me button , and In search bar changing the placeholder ------*/
// hiding hire me button
li.style.display = "none";
// in search bar we are changing place holder
// creating a reference 
let searchField = document.querySelector(".search-field");
let input = searchField.querySelector("input");
// remember we are changing in placeholder
input.placeholder= " search My Project";

/* ----iii. Task3: Changing the placeholder, changing in description and making footer ul visible----- */
// we are changing place holder
input.placeholder = "search";

// creating reference of hero section and paragraph tag
let HeroLeftS = document.querySelector(".hero-left-section");
let para = HeroLeftS.querySelector("p");

para.children[2].innerText = "an Employee";
para.children[4].innerText = "iNeuron Intelligence Pvt.ltd"
// now we are ,aking footer ul visible
ul.style.display = "";

/* changing in discription and changing porfolio image */

// changing in dexcription
para.children[2].innerText = "a Freelancer";
para.children[4].innerText = "For National and International client";
//  changing portfolio image
let heroRS= document.querySelector(".hero-right-section");
let imgHeroS= heroRS.querySelector("img");

imgHeroS.src = "./hitesh_image.jpg";


/*---- changing porfolio image and adding support me button ------*/
// adding previus image 
imgHeroS.src = "./avtar.png";
// creating a button 
// creating reference hero-right-section-btns
let heroRightSBtn = document.querySelector(".hero-right-section-btns");
// creating button
let button = document.createElement("button");
button.innerText = "Support Me"

// appending 
heroRightSBtn.append(button);















