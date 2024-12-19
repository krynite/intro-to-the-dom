/*-------------------------------- Constants --------------------------------*/
let proxyAns = 0;

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');                   //If more than one, use the All. Else it will select the first or the last one?
const calculator = document.querySelector('#calculator');               //If only one, just querySelector will do.
const operator = document.querySelector('.operator');
const equal = document.querySelector('.equals');
const num = document.querySelectorAll(`.number`);
/*----------------------------- Event Listeners -----------------------------*/
// buttons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     // This log is for testing purposes to verify we're getting the correct value
//     console.log(event.target.innerText);
//     // Future logic to capture the button's value would go here...
//   });
// });

// calculator.addEventListener('click', (event) => {
//   // This log is for testing purposes to verify we're getting the correct value
//   // You have to click a button to see this log
//   console.log(event.target.innerText);

//   // Example
//   if (event.target.classList.contains('number')) {
//     // Do something with a number
//   }

//   // Example
//   if (event.target.innerText === '*') {
//     // Do something with this operator
//   }
// });

num.addEventListener(`click`, (event) => {

})

/*-------------------------------- Functions --------------------------------*/






const calculate = (operator,num1,num2) => {
    switch (operator){
        case `+`:
            return addNum(num1,num2);
            break;
        case `-`:
            return subtractNum(num1,num2);
            break;
        case `*`:
            return multiplyNum(num1,num2);
            break;
        case `/`:
            return divideNum(num1,num2);
            break;

    }
}



const addNum = (num1,num2) => {
    proxyAns = num1+num2;
    console.log(proxyAns);
    return proxyAns;
}
const subtractNum = (num1,num2) => {
    proxyAns = num1-num2;
        console.log(proxyAns);
    return proxyAns;
}
const multiplyNum = (num1,num2) => {
    proxyAns = num1*num2;
        console.log(proxyAns);
    return proxyAns;  
}
const divideNum = (num1,num2) => {
    proxyAns = num1/num2;
        console.log(proxyAns);
    return proxyAns;  
}

// addNum(1,5);
// subtractNum(1,5);
// multiplyNum(1,5);
// divideNum(1,5);