
# 1.javascript -> DOM Assignment
** 05_DOM Project : simply reciepe landing page **
## my name is `fuzail khan`

##  task 1 : adding element

<!-- we are adding button in navbar -->

//we have genrated reference to navcenter div
const navCenterDiv = document.querySelector(".nav-center div:nth-child(3)");

// we have create a tag 
 let aNav = document.createElement("a");
 aNav.href = "index.html";
 aNav.className = "btn";
 aNav.innerText ="Pro Subscription";

 // we have to append anchor tag to   div of nav bar

navCenterDiv.append(aNav);

# task 2: Adding one more item types in recipe section


//    we are adding one more item in recipe section

// we will going to add element in reciepe section
// we have  created a reference of  tags container of div inside reciepe section
const recipeElement = document.querySelector(".tags-container div:nth-child(2)");

// and we need to create anchor tag 
let aRecipe = document.createElement("a");
aRecipe.href = "#";
aRecipe.innerText = "Chinese(7)";

// now we need to add anchor tag to card section 
recipeElement.append(aRecipe);

# task 3 : we are Adding one more recipe card in recipe gallery section


//  we are creating reference of reciepe galarry 

let recipeCard = document.querySelector(".recipe-gallery");

// now we are creating a div of card section 
let cardDiv = document.createElement("div");
cardDiv.className = "card";

// and we have to create anchor tag for card section
let aCardDiv = document.createElement("a");
aCardDiv.href = "#";
aCardDiv.className = "recipe-text";

// and then we have to create a img tag
let img = document.createElement("img");
img.src = "./img/recipe-2.jpeg";
img.className = "recipe-img";

// we have to create h5 tag
let h5 = document.createElement("h5");
h5.className = "recipe-name";
h5.innerText = "tumato-soup";


// we are creating para tag
let para = document.createElement("p");
para.className = "recipe-disp";
para.innerText = "Prep : 13min | Cook : 3min";

aCardDiv.append(img);
aCardDiv.append(h5);
aCardDiv.append(para);
cardDiv.append(aCardDiv);
recipeCard.append(cardDiv);
