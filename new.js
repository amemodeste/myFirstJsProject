/* buttons */
const fireBtn = document.querySelector('#fire-button')
const waterBtn = document.querySelector('#water-button')
const earthBtn = document.querySelector('#earth-button')

/* event listeners */
fireBtn.addEventListener('click', playerRoundFire)
waterBtn.addEventListener('click', playerRoundWater)
earthBtn.addEventListener('click', playerRoundEarth)

/* scores */
let playerScore = 0
let computerScore = 0

/* computer moves */
function computerPlay() {
  const options = ['fire', 'water', 'earth']
  return options[Math.floor(Math.random() * options.length)]
}

/* player moves */
function playerRoundFire() {
  const computerSelection = computerPlay()

  if (computerSelection === 'water') {
    // computer wins
    computerScore = computerScore + 1
    console.log('Water beats Fire, you lose!')
  } else if (computerSelection === 'earth') {
    // player wins!
    console.log('Fire beats Earth, you win!')
    playerScore = playerScore + 1
  } else {
    // it's a tie!
    // ... so nothing :D
    console.log('it\'s a tie')
  }
}

function playerRoundWater() {
  const computerSelection = computerPlay()
  if (computerSelection === 'earth') {
    /* computer wins*/
    computerScore= computerScore +1 
    console.log ('Earth beats Water, you lose!')
    } else if (computerSelection === 'fire') {
        /*player wins*/
        playerScore = playerScore +1
        console.log ('Water beats Fire, you win. Great job!')
      }else {
        /* a tie was born*/
        console.log ('It\'s a tie!')
        }
}

function playerRoundEarth() {
  const computerSelection = computerPlay()
  if (computerSelection === 'fire') {
    /*computer wins*/
    computerScore = computerScore +1
    console.log ('Fire beats Earth, you lose!')
  } else if (computerSelection === 'water') {
    /* player wins*/
    playerScore = playerScore +1 
    console.log ('Earth beats Water, you\'re a winner!')
  
  } else {
    /* a tie or whatever*/
  console.log ('Another tie')
    }
}