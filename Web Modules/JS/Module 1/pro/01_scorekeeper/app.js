// player1 2 buttom | event to increase score display

const btn1 = document.querySelector(".player1");
const btn2 = document.querySelector(".player2");
const p1ScoreDisplay = document.querySelector(".p1ScoreDisplay");
const p2ScoreDisplay = document.querySelector(".p2ScoreDisplay");
const resetBtn = document.querySelector(".reset");
const win = document.querySelector(".win");
const scoreInput = document.querySelector('.scoreInput')
const winScoreDisplay = document.querySelector('.winScoreDisplay')

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false; //flag

btn1.addEventListener("click", function () {
  if (!gameOver) {
    if (p1Score < winningScore) {
      p1Score++;
      p1ScoreDisplay.textContent = p1Score;
      if (p1Score === winningScore) {
        win.style.display = "block";
        gameOver = true;
      }
    }
  }
});
btn2.addEventListener("click", function () {
  if (!gameOver) {
    if (p2Score < winningScore) {
      p2Score++;
      p2ScoreDisplay.textContent = p2Score;
      if (p2Score === winningScore) {
        win.style.display = "block";
        gameOver = true;
      }
    }
  }
});

resetBtn.addEventListener("click", function () {
  p1Score = 0;
  p2Score = 0;
  p1ScoreDisplay.textContent = 0;
  p2ScoreDisplay.textContent = 0;
  win.style.display = "none";
  gameOver = false;
  winScoreDisplay.textContent=5
  winningScore=5
});

scoreInput.addEventListener('change', function(){
 winningScore = Number(scoreInput.value)
 winScoreDisplay.textContent=scoreInput.value
 scoreInput.value=''
})
