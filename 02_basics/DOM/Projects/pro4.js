const randomNum=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  // is it between 1 to 100
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess<1){
    alert('Please enter a valid number')
  }else if(guess<1){
    alert('Please enter a valid number')
  }else{
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game Over.Random number was ${randomNum} `)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  // correct low or high
  if(guess===randomNum){
    displayMessage(`You guessed it right`)
    endGame()
  }else if(guess<randomNum){
    displayMessage('Number is low')
  }else if(guess>randomNum){
    displayMessage('Number is too high')
  }

}

function displayGuess(guess){
  // display the guess


}

function displayMessage(message){
  // display the message

}

function endGame(){

}