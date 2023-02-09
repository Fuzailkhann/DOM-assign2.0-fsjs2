# javascript DOM assignment 
## _ 06_DOM project : Equalizer landing page_
## my name is `Fuzail khan`
___

# 1.project_06: equaizer landing page
## i.task1: changing the logo of application
![](./Output/DOM%20P3%20SS-1.png)
```javascript
// # task1: changing the logo application 
// creating reference of header image
let headerImg = document.querySelector("header img");
// we have to change the image 
headerImg.src = "./assets/ineuron-logo.png";
```
---
## ii.task2: changing the price , adding linkedin icon and changing the footer text color
![](./Output/DOM%20P3%20SS-2.png)

```javascript
// task 2 starting here
// changing price
// generating reference to the app price
let appPrice = document.querySelector(".app_price span");
appPrice.innerText = "$10";

// task 2.2.....linkedin logo adding 

let footer= document.querySelector(".footer_social");

// we have to create elemnt of div with class name
let div= document.createElement("div");
div.className ="footer_social_ico";

// creating icon with help of favicon
let i= document.createElement("i");
i.classList = "fa-brands fa-linkedin";

div.append(i);
footer.append(div);

// changing the footer text color 

let textColor = document.querySelector(".footer_text");
let strong = document.querySelector(".footer_problems strong");

textColor.style.color ="#5A5A5A";
strong.style.color = "#000";
```
