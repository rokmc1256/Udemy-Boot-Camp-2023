// WRITE YOUR CODE IN HERE:
let container = document.querySelector('#container');
for(let i=0; i<100; i++){
    let btn = document.createElement('button');
    btn.innerText = "Hey!";
    container.appendChild(btn);
}

