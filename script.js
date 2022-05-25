
// Written by rasuwank


class App {
    constructor() {
        console.log('App');
    }
}

class AppPopup extends App {
    constructor() {
        console.error("Error");
    }
} 

// Array containing characters in the screen
screenText = [];


// Function converts an array into string
const makeString = (arr) => {
    let str = '';
    for(let char of arr){
        str += char;
    }

    return str;
}


const render = (screen) => {
    screen.innerHTML = makeString(screenText);
}

// Screen of the calculator
const screen = document.getElementById('screen');


// Group of buttons
const numberButtons = document.getElementsByClassName('number');

const functionButtons = document.getElementsByClassName('func');

const clearButton = document.getElementById('ce');

const equalButton = document.getElementById('eq');

// Cleaning the screen
clearButton.addEventListener('click',() => {
    screenText = [];
    screen.innerHTML = '0';
})

equalButton.addEventListener('click',() => {

    //if(screen.innerHTML.indexOf('//') == -1 || screen.innerHTML.indexOf('/*') == -1){
        try{
            screen.innerHTML = eval(screen.innerHTML);
            screenText = [];

        }catch(e){
            screen.innerHTML = "Malformed expression";
            screenText = [];
        }
});

// Asigning all the functions for number buttons
for(let element of numberButtons){
    element.addEventListener("click", () => {
        screenText.push(element.id);
        render(screen);
    })
}

for(let element of functionButtons){
    element.addEventListener("click" , () => {
        screenText.push(element.id);
        render(screen);
    })
}


