
let score=JSON.parse(localStorage.getItem('score'));
  console.log(score);

// const score = {
//     win:0,
//     losses:0,
//     tie:0
// }

if(score === null){
   score={
      win:0,
      losses:0,
      tie:0
 }
}

function playGame(playerMove) {

const computerMove = computersMove();

  let result= '';

  if (playerMove == "scissors") {
      if (computerMove == 'rock') {
          result = 'You lose.';
      } else if (computerMove == 'paper') {
          result = 'You win.';
      } else if (computerMove == 'scissors') {
          result = 'Tie.';
      }

  }else if (playerMove === 'paper') {

      if (computerMove == 'rock') {
          result = 'You win.';
      } else if (computerMove == 'paper') {
          result = 'Tie.';
      } else if (computerMove == 'scissors') {
          result = 'You lose.';
      }

  }else if(playerMove === 'rock') {

      if (computerMove == 'rock') {
          result = 'Tie.';
      } else if (computerMove == 'paper') {
          result = 'You lose.';
      } else if (computerMove == 'scissors') {
          result = 'You win.';
      }
  }



      if(result === 'Tie.'){
          score.tie +=1;
      }else if(result ==='You lose.' ){
          score.losses +=1;
      }else if(result === 'You win.'){
          score.win += 1;
      } 

      localStorage.setItem('score',JSON.stringify(score));

      document.querySelector('.js-result').innerHTML= result;
      
      document.querySelector('.js-moves')
          .innerHTML=`You ${playerMove} --- Computer ${computerMove} `;

      updateScores();
     
}

function computersMove() {
  let randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber > 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
  } else if (randomNumber > 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
  }
  return computerMove;
}

function resetScore(){
  score.win=0;
  score.losses=0;
  score.tie=0

  localStorage.removeItem('score');
  updateScores();
}

function updateScores(){
  document.querySelector('.js-scores')
      .innerHTML= `Win: ${score.win} Losses: ${score.losses} Tie: ${score.tie}`;

}
