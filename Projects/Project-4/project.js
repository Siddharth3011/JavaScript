let ranNumber=parseInt(Math.random()*100+1);
const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField'); //number enter by user
const guessSlot = document.querySelector('.guesses'); // numbers enter by user are in array
const remaining = document.querySelector('.lastResult'); //last number enter by user
const lowOrHi = document.querySelector('.lowOrHi'); // low hai number ya high
const startOver = document.querySelector('.resultParas'); //user ke sare guesses khatm ho jaye to

const p = document.createElement('p');

let prevGuess = [] //array bnane ke liye.
let numGuess = 1 //number of guesses done, start with 1

let playGame = true //alow user to play

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){ // valid guess or not (1 to 100)
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess <1){
        alert('Plaese enter a number more than or equal to 1')
    }
    else if(guess>100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)//push kr dega number ko array mein
        if(numGuess===11){ //agr 11th turn hoga to game over kr diya jayega
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${ranNumber}`)
            endGame()
        }
        else{ //1 to 10th turn hai to: 
            displayGuess(guess) //display krega guess number ko
            checkGuess(guess) //checkGuess function jo niche hai wo check krega num ko valid hai ya nhi.
        }
    }
}

function checkGuess(guess){ //check the number aur fir niche jo function hai unka use kr message display krao
    if(guess === ranNumber){
        displayMessage(`You guesses it right`);
        endGame()
    }
    else if(guess<ranNumber){
        displayMessage(`Number is tooo low`);
    }
    else if(guess>ranNumber){
        displayMessage(`Number is tooo high`);
    }

}
function displayGuess(guess){ // clean the input value , no. of remainig guesses km krega etc.
    userInput.value = '';//number enter ko clean up krega
    guessSlot.innerHTML += `${guess} `;//ye array mein elements ko push krta jayega
    numGuess++;
    remaining.innerHTML = `${11-numGuess}   `;
}

function displayMessage(message){ // ye message display krega high or low wala
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
    ranNumber = parseInt(Math.random()*100+1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11- numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}