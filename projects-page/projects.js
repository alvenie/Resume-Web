/*
Addition function of the calculator
 */
function addition(){

    let firstNum = document.getElementById("first-number").value;
    firstNum= Number(firstNum);

    let secondNum = document.getElementById("second-number").value;
    secondNum= Number(secondNum);

    let result = firstNum + secondNum;

    checkNumber(result);

}

/*
Subtraction function of the calculator
 */
function subtract(){

    let firstNum = document.getElementById("first-number").value;
    firstNum= Number(firstNum);

    let secondNum = document.getElementById("second-number").value;
    secondNum= Number(secondNum);

    let result = firstNum - secondNum;

    checkNumber(result);

}

/*
Multiplication function of the calculator
 */
function multiplication(){

    let firstNum = document.getElementById("first-number").value;
    firstNum= Number(firstNum);

    let secondNum = document.getElementById("second-number").value;
    secondNum= Number(secondNum);

    let result = firstNum * secondNum;

    checkNumber(result);

}

/*
Division function of the calculator
 */
function division(){

    let firstNum = document.getElementById("first-number").value;
    firstNum= Number(firstNum);

    let secondNum = document.getElementById("second-number").value;
    secondNum= Number(secondNum);

    let result = firstNum / secondNum;

    checkNumber(result);

}

/*
Power function of the calculator. Deals with negative powers as well. Calls the helper function checkNumber().
 */
function power(){

    let firstNum = document.getElementById("first-number").value;
    firstNum = Number(firstNum);

    let secondNum = document.getElementById("second-number").value;
    secondNum = Number(secondNum);

    let result = 1;

    if (secondNum > 0){

        for (let i = 1; i <= secondNum; i++) {
            result = firstNum * result;
        }

        checkNumber(result);

    } else {

        for (let i = -1; i >= secondNum; i--) {
            result = result / firstNum;
        }

        checkNumber(result);

    }

}

/*
Function to clear the output as well as the input boxes when the clear button is clicked.
 */
function clearOutput(){

    document.getElementById("output").innerHTML = "Result";
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";

}

/*
Helper function to check whether the result is a negative or not.
Changes to color of the output to red if it is and black otherwise.
 */
function checkNumber(result){

    const outputElem = document.getElementById("output");
    outputElem.innerHTML = String(result);

    if (result < 0){
        outputElem.style.color = "red";
    } else {
        outputElem.style.color = "black";
    }
}