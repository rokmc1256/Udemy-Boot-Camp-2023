const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
let spanValue = document.querySelectorAll("span");
for(let i = 0; i < colors.length; i++) {
    spanValue[i].style.color = colors[i];
}