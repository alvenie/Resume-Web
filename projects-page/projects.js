function addition(){

    let firstNum = document.getElementById("first-number").value;
    firstNum= Number(firstNum);

    let secondNum = document.getElementById("second-number").value;
    secondNum= Number(secondNum);

    let result = firstNum + secondNum;

    checkNumber(result);

}

function subtract(){

    let firstNum = document.getElementById("first-number").value;
    firstNum= Number(firstNum);

    let secondNum = document.getElementById("second-number").value;
    secondNum= Number(secondNum);

    let result = firstNum - secondNum;

    checkNumber(result);

}

function multiplication(){

    let firstNum = document.getElementById("first-number").value;
    firstNum= Number(firstNum);

    let secondNum = document.getElementById("second-number").value;
    secondNum= Number(secondNum);

    let result = firstNum * secondNum;

    checkNumber(result);

}

function division(){

    let firstNum = document.getElementById("first-number").value;
    firstNum= Number(firstNum);

    let secondNum = document.getElementById("second-number").value;
    secondNum= Number(secondNum);

    let result = firstNum / secondNum;

    checkNumber(result);

}

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

function clearOutput(){

    document.getElementById("output").innerHTML = "";

}

function checkNumber(result){

    const outputElem = document.getElementById("output");
    outputElem.innerHTML = String(result);

    if (result < 0){
        outputElem.style.color = "red";
    } else {
        outputElem.style.color = "black";
    }
}