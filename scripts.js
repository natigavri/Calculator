function add(a,b){
    return (a + b);
}

function subtract(a,b){
    return (a - b);
}

function multiply(a,b){
    return (a * b);
}

function divide(a,b){
    return (a / b);
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
let numA = NaN;
let numB = NaN;
let numATaken = false;

function scrDisplay(number){
    let num = display.innerHTML;
    if (!(Number.isInteger(currentDisp))){
        display.innerHTML = number;
    }
    else{
        display.innerHTML = num + number;
    }
    let newDisplay = parseFloat(display.innerHTML);
    return newDisplay;
}

function clearScrn() {
    currentDisp = NaN;
    numA = NaN;
    numB = NaN;
}

function calc(operator, numA, numB) {
    currentDisp = operate(operator, numA, numB);
    currentOperator = null;
    console.log(currentDisp);
    display.innerHTML = currentDisp;
    let calculation = parseFloat(currentDisp);
    console.log(calculation);
    currentDisp = NaN;
    numATaken = false;
    return calculation;
}

/* listen for number press, show on screen and save into variable */
const digits = document.getElementById("digits");
digits.addEventListener("click", e => {
    if(e.target.className === 'digit'){
        currentDisp = scrDisplay(parseFloat(e.target.innerHTML));
        if (numATaken){
            numB = parseInt(currentDisp);
        }else{
            numA = parseInt(currentDisp);
        }   
    }
});
/* listen for operator press, save into variable */
const operators = document.getElementById("operators");
operators.addEventListener("click", e => {
    if(e.target.className.includes('operator')){
        if(numATaken && Number.isInteger(numB)){
            numA = calc(currentOperator, numA, numB);
        }
        currentOperator = e.target.innerHTML;
        currentDisp = NaN;
        numATaken = true;
    }else if(e.target.className.includes('clearDisp')){
        display.innerHTML = '';
        clearScrn();
        
    }
    else if(e.target.className.includes('calculate')){
        if ((Number.isInteger(numB))){
            let eval = calc(currentOperator, numA, numB);
            clearScrn();
            numA = eval;
        }
        
    }

});