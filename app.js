const form = document.querySelector("form");
const input = document.querySelector("input"); 
const trophyBox = document.querySelector("#trophyBox");
const gameOverMessage = document.getElementById("gameOver");
gameOverMessage.classList.add("hide");
const wrapper = document.querySelector(".wrapper");
const restartButton = document.querySelector(".restart");
const restartButtonTwo = document.getElementById("gameOverRestart");
const playDashboard = document.getElementById("playDashboard");
const guessedNumber = document.querySelector(".guessedNumber");
const result = document.querySelector(".result");
const upDown = document.querySelector(".upDown");
const myNumber = generateMyNumber();
let newRow; 
let arrowResponse; 
let userInputNumber;
let maxAttempt = 5; 
let winner = false;

form.addEventListener("submit", startGame); 
hint.addEventListener("click", generateHint);
restartButton.addEventListener("click", restartGame); 
restartButtonTwo.addEventListener("click", restartGame);

function restartGame() {
    document.location.reload(true);
}
function generateMyNumber() {
    const randomNum = Math.floor(Math.random() * 100) + 1; 
    return randomNum;
}
function getGameOverMessage() {
    input.value = "";
    wrapper.classList.add("hide");
    gameOverMessage.classList.remove("hide");
}
function startGame() {
    event.preventDefault();
    const inputNumber = Number(userInput.value);    
    if(maxAttempt > 0) {
        input.value = "";
        maxAttempt--;
        compareNumbers(inputNumber);    
    } 
    if (maxAttempt === 0 && winner == false) {  
        input.disabled = true; 
        setTimeout(getGameOverMessage, 2000);
    }
}

function resetMaxAttempt() {
    maxAttempt = 5;
}

function winGame() {
    winner = true;
    addTrophy();
    setTimeout(clearRecord, 2000);
    resetMaxAttempt(); 
    startGame;
}

function clearRecord() {
    guessedNumber.innerHTML = ""; 
    const hintContent = document.getElementById("hintList");
    hintContent.innerHTML = "";
    winner = false;
}

function generateRecord(inputNumber) {
    newRow = document.createElement("tr");
    arrowResponse = document.createElement("th");
    userInputNumber = document.createElement("th");
    guessedNumber.appendChild(newRow);
    userInputNumber.textContent = inputNumber;
    if(inputNumber > myNumber) {
        arrowResponse.textContent = "LOWER ???";
        arrowResponse.style.color = "#f93947";
        newRow.appendChild(userInputNumber);
        newRow.appendChild(arrowResponse);  
    } else if (inputNumber < myNumber) {
        arrowResponse.textContent = "HIGHER ???";
        arrowResponse.style.color = "#00887A";
        newRow.appendChild(userInputNumber);
        newRow.appendChild(arrowResponse);
    } else {
        arrowResponse.textContent = " ???? ";
        userInputNumber.style.color = "#00887A";
        newRow.style.backgroundColor = "rgba(0, 136, 122, 0.2)";
        newRow.style.borderRadius = "25px";
        newRow.appendChild(userInputNumber);
        newRow.appendChild(arrowResponse);
    }
}

function compareNumbers(inputNumber) {
    if(inputNumber === myNumber) { 
        generateRecord(inputNumber);
        winGame();    
    } else if (inputNumber > myNumber) {
        generateRecord(inputNumber);
    } else if (inputNumber < myNumber) {
        generateRecord(inputNumber);
    }
}

function addTrophy() {
    const trophyContainer = document.createElement("div");
    const trophy = document.createElement("img");
    trophy.src = "./images/trophyImage.png"
    trophyBox.appendChild(trophyContainer);
    trophyContainer.appendChild(trophy);
    trophyContainer.style.width = "40px";
    trophy.style.width = "40px";
    trophyContainer.style.height = "50px";
    trophy.style.height = "50px";
}

function generateHint() {
    let count = 0; 
    const hintArray = [];
    while(count<10) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        if(!(hintArray.includes(randomNumber))) {
            hintArray.push(randomNumber);
            count++;
        }
    }
    const randomIndex = Math.floor(Math.random() * 10);
    hintArray[randomIndex] = myNumber;
    const displayHintArray = hintArray.join(' ');
    hintList.textContent = "HINT: " + displayHintArray;
    input.value = "";
}