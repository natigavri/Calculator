function add(a,b){
    return (a + b);
}

function subtract(a,b){
    return (b - a);
}

function multiply(a,b){
    return (a * b);
}

function divide(a,b){
    return (b / a);
}

function operate(operator,a,b){
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}
const defDisp = '0';
const display = document.getElementById("display");
let currentDisp = NaN;
let currentOperator = null;
let numA = null;
let numB = null;

function scrDisplay(number){
    let num = display.innerHTML;
    if (!(Number.isInteger(currentDisp))){
        display.innerHTML = number;
    }
    else{
        display.innerHTML = num + number;
    }
    let newDisplay = parseInt(display.innerHTML);
    return newDisplay;
}

function clearScrn() {
    currentDisp = null;
    numA = null;
    numB = null;
}

const digits = document.getElementById("digits");
digits.addEventListener("click", e => {
    if(e.target.className === 'digit'){
        currentDisp = scrDisplay(parseInt(e.target.innerHTML));
        numA = parseInt(currentDisp);
    }
});

const operators = document.getElementById("operators");
operators.addEventListener("click", e => {
    if(e.target.className.includes('operator')){
        currentOperator = e.target.innerHTML;
        numB = numA;
        currentDisp = NaN;
    }else if(e.target.className.includes('clearDisp')){
        display.innerHTML = '';
        clearScrn();
        
    }
    else if(e.target.className.includes('calculate')){
        currentDisp = operate(currentOperator, numA, numB);
        display.innerHTML = currentDisp;
        clearScrn();
    }

});