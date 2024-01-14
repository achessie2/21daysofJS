// const playerText = document.querySelector("#playerText");
// const computerText = document.querySelector("#computerText");
// const resultText = document.querySelector("#resultText");

// const choiceBtns = document.querySelectorAll("choiceBtn");

// let player;
// let computer;
// let choice;

// choiceBtns.forEach()



function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(0, 2)

const findWinner = (humanChoice) => {
    let options = ['rock', 'paper', 'scissors']
    let computerChoice = options[rndInt]

    if (humanChoice === computerChoice ) {
        console.log('It is  a tie!')
    } else if ( 
        humanChoice === 'paper'&& computerChoice==='rock' || 
        humanChoice === 'scissors'&& computerChoice==='paper' ||
        humanChoice === 'rock'&& computerChoice==='scissors'
        ) {
            console.log('You win!')
    } else {
        console.log("Computer Wins!")

    }

}

findWinner('rock')
findWinner('paper')
findWinner('scissors')


function doSum(num1, num2) {
    return num1 + num2;
}


//es6 ecmaScript 6
const doSum = (num1, num2) => {
    return num1 + num2;
}

doSum()