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
let newRow; //= document.createElement("tr");
let arrowResponse; //= document.createElement("th");
let userInputNumber; // = document.createElement("th");

// const h3 = document.querySelector("h3");
// h3.classList.add("hide");
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
        // generateRecordSign();
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
    resetMaxAttempt(); // this works
    setTimeout(clearRecord, 2000);
    startGame;
}
// function generateRecordSign() {
//     h3.classList.remove("hide");
// }
function clearRecord() {
    guessedNumber.removeChild(newRow);
    newRow.removeChild(arrowResponse);
    newRow.removeChild(userInputNumber);
}

function generateRecord(inputNumber) {
    newRow = document.createElement("tr");
    arrowResponse = document.createElement("th");
    userInputNumber = document.createElement("th");
    
    guessedNumber.appendChild(newRow);
    userInputNumber.textContent = inputNumber;
    if(inputNumber > myNumber) {
        arrowResponse.textContent = "LOWER ↓";
        arrowResponse.style.color = "#f93947";
        newRow.appendChild(userInputNumber);
        newRow.appendChild(arrowResponse);  
    } else if (inputNumber < myNumber) {
        arrowResponse.textContent = "HIGHER ↑";
        // userInputNumber.style.color = "#00887A";
        arrowResponse.style.color = "#00887A";
        newRow.appendChild(userInputNumber);
        newRow.appendChild(arrowResponse);
    } else {
        arrowResponse.textContent = " 🏆 ";
        userInputNumber.style.color = "#00887A";
        newRow.style.backgroundColor = "rgba(0, 136, 122, 0.2)";
        newRow.style.borderRadius = "25px";
        newRow.appendChild(userInputNumber);
        newRow.appendChild(arrowResponse);
    }
}
function compareNumbers(inputNumber) {
    // generateRecordSign();
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
    input.value = ""; //is it needed?
}

// NOTE
// 1. restart game during the game should reload the whole page 
// 2. But after winning a game should just give maxattempt back to 5
// 3. can't make it small trophies for small screens 



