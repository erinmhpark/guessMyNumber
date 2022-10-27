const form = document.querySelector("form");
const input = document.querySelector("input"); 
const trophyBox = document.querySelector("#trophyBox");
// const myRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const guessedNumber = document.querySelector(".guessedNumber");
const result = document.querySelector(".result");
const upDown = document.querySelector(".upDown");
const myNumber = myRandomNumber();
let maxAttempt = 5; 

function myRandomNumber() {
    const randomNum = Math.floor(Math.random() * 100) + 1; 
    return randomNum;
}

form.addEventListener("submit", startGame);
hint.addEventListener("click", generateHint);

function startGame() {
    event.preventDefault();
    // const numberRecords = document.createElement("table");
    const inputNumber = Number(userInput.value);
    if(maxAttempt != 0) { 
        input.value = "";
        compareNumbers();
    } else {
        //game Over(); and gameover() should call resetGame();
        alert("GAME OVER");
    }
    // guessedNumber.textContent += `${inputNumber}`;
    
    if(inputNumber === myNumber) { 
        
    } else if (inputNumber > myNumber) {
        
    } else if (inputNumber < myNumber) {
        
    }
    maxAttempt--;
}

function compareNumbers() {
    alert(maxAttempt);
    // if(inputNumber == myRandomNumber) {
    //     youWin();
    // } else if (inputNumber > myRandomNumber) {
    //     downArrow();
    // } else if (inputNumber < myRandomNumber) {
    //     upArrow();
    // } else {
    //     gameOver();
    // }
}

// if(maxAttempt < 0) {
//     form.addEventListener("submit", (event) => {
//         event.preventDefault();
//         startGame();
//         maxAttempt--; // this works)
//     });
// } else {
//     // alert("OVER");  => This doesn't seem to be working.. is it because of preventDefault??
// }

//  // table > tr > td(trophy)
//  const trophyTest = document.createElement("td");
//  // trophyTest.style.border = "3px solid orange";
//  const trophyBox = document.querySelector("tr");
//  const trophy = document.createElement("img");
//  //######## BUG: in mobile screen, box(row) increased...#######
//  trophy.style.width = '2rem';
//  trophy.style.height = '70px';
//  trophy.src = "./images/trophyImage.png";
//  trophyBox.appendChild(trophy);
//  table.appendChild(trophyBox);





// let form = document.querySelector("form");
// let input = document.querySelector("input");
// let result = document.querySelector("#result");
// form.addEventListener("submit", (event) => {
//     event.preventDefault(); 
//     let number = input.value;
//     let translate = fizzbuzz(number);
//     result.textContent = translate;
//     input.value = "";
// });

// EXAMPLE to call eventListener...
// let input = document.querySelector("input");
// let result = document.querySelector("#result");
// form.addEventListener("submit", (event) => {
//     event.preventDefault(); 
//     let number = input.value;
//     let translate = fizzbuzz(number);
//     result.textContent = translate;
//     input.value = "";
// });



// 2. create a function to compare input number to target! 
//  for(int i = 0; i<5; i++) {
//     if(target == inputNumber[i]) => Congratulations! with addTrophy and restart function; 
//         else if (target > inputNumber[i]) {
//             up arrow 
//         } else if (target < inputNumber[i]) {
//             down arrow 
//         }
//  }
// main() {
//     generate target number;     
// }



function youWin() {
    alert("You win!");
}
function downArrow() {
    alert("lower");
}
function upArrow() {
    alert("Up!");
}
function gameOver() {
    "GAME OVER";
}
//function for down  with color in the result div  
//function for up  with color in the result div
//function to restart game... when do you reset trophy box?? 

//Need to give 10 hints away! 
// 1. generate 10 numbers except numbers use entered

//add trophy to trophy box 
function addTrophy() {
    // table > tr > td(trophy)
    const trophyTest = document.createElement("td");
    // trophyTest.style.border = "3px solid orange";
    const trophyBox = document.querySelector("tr");
    const trophy = document.createElement("img");
    //######## BUG: in mobile screen, box(row) increased...#######
    trophy.style.width = '2rem';
    trophy.style.height = '70px';
    trophy.src = "./images/trophyImage.png";
    trophyBox.appendChild(trophy);
    table.appendChild(trophyBox);
    //####### ADD not to refresh each session unless user reloads page
}
function generateHint() {
    let count = 0; 
    const hintArray = [];
    // alert(hintArray + "target: " + myNumber);
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

// TO ADD LATER
// const restartGame = document.querySelector("#restart")