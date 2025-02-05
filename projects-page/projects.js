function addition(){

    let firstNum = document.getElementById("first-number").value;
    firstNum= Number(firstNum);

    let secondNum = document.getElementById("second-number").value;
    secondNum= Number(secondNum);

    document.getElementById("output").innerHTML = String(firstNum + secondNum);

}

function subtract(){

    let firstNum = document.getElementById("first-number").value;
    firstNum= Number(firstNum);

    let secondNum = document.getElementById("second-number").value;
    secondNum= Number(secondNum);

    document.getElementById("output").innerHTML = String(firstNum - secondNum);

}

function multiplication(){

    let firstNum = document.getElementById("first-number").value;
    firstNum= Number(firstNum);

    let secondNum = document.getElementById("second-number").value;
    secondNum= Number(secondNum);

    document.getElementById("output").innerHTML = String(firstNum * secondNum);

}

function division(){

    let firstNum = document.getElementById("first-number").value;
    firstNum= Number(firstNum);

    let secondNum = document.getElementById("second-number").value;
    secondNum= Number(secondNum);

    document.getElementById("output").innerHTML = String(firstNum / secondNum);

}

function power(){

    let firstNum = document.getElementById("first-number").value;
    firstNum= Number(firstNum);

    let secondNum = document.getElementById("second-number").value;
    secondNum= Number(secondNum);

    let start = 1;

    for (let i = 1; i <= secondNum; i++) {
        start = firstNum * start;
    }

    document.getElementById("output").innerHTML = String(start);

}

function clearOutput(){

    document.getElementById("output").innerHTML = "";

}