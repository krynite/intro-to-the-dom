/*-------------------------------- Constants --------------------------------*/
let proxyAns = 0;
let proxyNum1 = 0;
let proxyNum2 = 0;
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');                   //If more than one, use the All. Else it will select the first or the last one?
const calculator = document.querySelector('#calculator');               //If only one, just querySelector will do.
// const operator = document.querySelector('.operator');
// const equal = document.querySelector('.equals');
// const num = document.querySelectorAll(`.number`);
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    proxyNum1 = event.target.innerText;
    console.log(proxyNum1);
    // console.log(event.target.innerText);
   
  });
});



/*-------------------------------- Functions --------------------------------*/


// 1. Get numbers (Extract numbers to console)
// 2. Store numbers into storage like num1 and num2 (Collate 2 digits numeber possible???)(while loop possible till operator pressed for break?)
// 2a. Display numbers in the //!class Display (Find a way to insert the value to the Display, 2 digit possible?)
// 3. Create function for calculation with 2 parameters (DONE!!!)
// 4. Return answer with //! class Equal
// 5. Clear and reset to initial state.
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 





// const calculate = (operator,num1,num2) => {          //!works with the below function.
//     switch (operator){
//         case `+`:
//             return addNum(num1,num2);
//             break;
//         case `-`:
//             return subtractNum(num1,num2);
//             break;
//         case `*`:
//             return multiplyNum(num1,num2);
//             break;
//         case `/`:
//             return divideNum(num1,num2);
//             break;

//     }
// }



// const addNum = (num1,num2) => {
//     proxyAns = num1+num2;
//     console.log(proxyAns);
//     return proxyAns;
// }
// const subtractNum = (num1,num2) => {
//     proxyAns = num1-num2;
//         console.log(proxyAns);
//     return proxyAns;
// }
// const multiplyNum = (num1,num2) => {
//     proxyAns = num1*num2;
//         console.log(proxyAns);
//     return proxyAns;  
// }
// const divideNum = (num1,num2) => {
//     proxyAns = num1/num2;
//         console.log(proxyAns);
//     return proxyAns;  
// }

// // addNum(1,5);
// // subtractNum(1,5);
// // multiplyNum(1,5);
// // divideNum(1,5);

// calculate(`+`,1,5); //!works!