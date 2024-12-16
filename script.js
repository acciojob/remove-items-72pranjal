//your JS code here. If required.
let options = document.querySelector('#colorSelect')
let button  = document.querySelector('input')
console.log(button)

button.addEventListener('click', (e)=> {
    options.options[options.selectedIndex].remove()
})
