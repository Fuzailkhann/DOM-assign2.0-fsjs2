# javascript DOM assignment 2.0 of 09project
## project_09
## my name is `Fuzail khan`
---
###  Task-01: change h1 color

![img](./DOM%20P9/ass9.1-after.png)
```javacript
let  h1Title = document.querySelector("h1.title");
h1Title.style.color = "red";
```

---

##3 Task-02: when we hover on button background color will be change and change the h1 color also

![img](./DOM%20P9/ass9.2-after.png)
![img](./DOM%20P9/ass9.2-before.png)
```javascript
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

```