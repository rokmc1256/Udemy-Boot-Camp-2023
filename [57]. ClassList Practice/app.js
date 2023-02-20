c// WRITE YOUR CODE IN HERE:

let liValue = document.querySelectorAll('li');

for(let li = 0; li<liValue.length; li++) {
    if(!liValue[li].classList.contains('highlight')){
        liValue[li].classList.add('highlight');
    }
    else {
        liValue[li].classList.remove('highlight');
    }
}