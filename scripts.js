function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

let a = 0;
let b = 0;
let operator = null;

function operate(operator,a,b){
    switch(operator){
        case '+':
            add(a,b);
            break;
        case '-':
            subtract(a,b);
            break;
        case '*':
            multiply(a,b);
            break;
        case '/':
            divide(a,b);
            break;
    }
}

function display(number){
    let display = document.getElementById("display");
    display.innerHTML = number;
}

let digits = document.getElementById("digits");
digits.addEventListener("click", e => {
    display(e.target.innerHTML);
});