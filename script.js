const display=document.querySelector("#display");
const Digits=document.querySelectorAll(".digit");
const Operators=document.querySelectorAll(".operator");

let index=0;
function Clear(){
    let clear=0;
    document.getElementById("display").innerText=clear;
    index=0
}


function Delete() {
    let text = display.innerText;
    display.innerText = text.slice(0, -1);
    if (display.innerText === "") {
        display.innerText = "0";
    }
}

Digits.forEach(digit => {
    digit.addEventListener("click", ()=>{
    
        if(display.innerText==="0"){
            display.innerText=digit.textContent;
        }
        else{
            display.innerText +=digit.textContent;
        }

        index++;
    });
});

Operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        let text = display.innerText;
        let lastChar = text[text.length - 1];

        if ("+-*/%".includes(lastChar)) {
            return;
        }

        display.innerText += operator.textContent;
        index++;
    });
});

const equalBtn = document.querySelector("#equal");

equalBtn.addEventListener("click", () => {
    try {
        let expression = display.innerText;

        if ("+-*/%".includes(expression[expression.length - 1])) {
            return;
        }

        let result = eval(expression);
        display.innerText = result;
    } catch (error) {
        display.innerText = "Error";
    }
});
