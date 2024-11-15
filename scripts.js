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

/* choose correct function based on operator */
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

/* default values */
const defDisp = '0';
const display = document.getElementById("display");
let currentDisp = NaN;
let currentOperator = null;
let numA = NaN;
let numB = NaN;
// let numATaken = false;

/* long decimals formatter */
const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
});

/* displays pressed number on screen */
function scrnDisplay(userInput){
    let currentNum = display.innerHTML;
    if (!(Number.isInteger(currentDisp))){
        display.innerHTML = userInput;
    }
    else{
        display.innerHTML = currentNum + userInput;
    }
    let newDisplay = parseFloat(display.innerHTML);
    return newDisplay;
}

/* Clear screen and reset saved values */
function clearScrn() {
    currentDisp = NaN;
    currentOperator = null;
    numA = NaN;
    numB = NaN;
    // numATaken = false;
}

/* Calculate user inputs */
function calc(operator, numA, numB) {
    let calculation = NaN;
    if (operator === "/" && numB === 0){ /* Check if user trying to divide by 0 */
        currentDisp = 'Dont!';
        display.innerHTML = currentDisp;
        // numATaken = false;
    }
    else{
        currentDisp = formatter.format(operate(operator, numA, numB));
        
        display.innerHTML = currentDisp;
        calculation = parseFloat(currentDisp);
    }
    currentOperator = null;
    currentDisp = NaN;
    
    return calculation;
}

/* listen for number press, show on screen and save into variable */
const digits = document.getElementById("digits");
digits.addEventListener("click", e => {
    if(e.target.className === 'digit'){
        currentDisp = scrnDisplay(e.target.innerHTML);
        if (!(isNaN(numA)) && currentOperator !== null){
            numB = parseInt(currentDisp);
        }else{
            numA = parseInt(currentDisp);   
        }   
    }
});
/* listen for operator press, save into variable */
const operators = document.getElementById("operators");
operators.addEventListener("click", e => {
    if(e.target.className.includes('operator')){ /* Check if user pressed on "*, /, +, -" */
        if(!(isNaN(numA)) && !(isNaN(numB))){
            numA = calc(currentOperator, numA, numB); 
        }
        currentOperator = e.target.innerHTML;
        currentDisp = NaN;
        // numATaken = true;
    }else if(e.target.className.includes('clearDisp')){ /* Check if user pressed on "C" */
        display.innerHTML = '';
        clearScrn();
        
    }
    else if(e.target.className.includes('calculate')){ /* Check if user pressed on "=" */
        if ((Number.isInteger(numB))){
            let eval = calc(currentOperator, numA, numB);
            clearScrn();
            numA = eval;
        }
    }
    else if(e.target.className.includes('plusOrMinus')){ /* Check if user pressed on "+/-", then toggle input on screen */
        let disp = parseInt(display.innerHTML);
        let sign = Math.sign(disp);
        if (sign !== 0){
            if (numA === disp) {
                if (sign === 1){
                    numA = numA * ((-1) * sign);
                    display.innerHTML = disp*((-1) * sign);
                }else{
                    numA = numA * (-1);
                    display.innerHTML = disp* (-1);
                }
            }else{
                if (sign === 1){
                    numB = numB * ((-1) * sign);
                    display.innerHTML = disp*((-1) * sign);
                }else{
                    numB = numB * (-1);
                    display.innerHTML = disp* (-1);
                }
            }
        }
    }

});