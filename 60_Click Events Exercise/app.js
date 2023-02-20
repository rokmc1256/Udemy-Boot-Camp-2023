const print_hello = document.querySelector('#hello');
const print_goodbye = document.querySelector('#goodbye');

print_hello.addEventListener('click', () => {
    console.log('hello');
})
print_goodbye.addEventListener('click', () => {
    console.log('goodbye');
})