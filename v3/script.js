const player = document.getElementById("player");
const playerImg = document.getElementById("playerImg");
const game = document.getElementById("game");
const bg = document.getElementById("background");
const scoreDisplay = document.getElementById("score");
const restartBtn = document.getElementById("restart");

/* PHYSIQUE */
let velocityY = 0;
let gravity = 0.7;
let isJumping = false;

/* JEU */
let isGameOver = false;
let score = 0;
let speed = 6;
let obstacles = [];

/* INIT */
player.style.bottom = "0px";

/* CONTROLES */
document.addEventListener("keydown", (e) => {

  if (e.code === "Space" && !isJumping) {
    velocityY = 16;
    isJumping = true;

    // 🔥 IMAGE SAUT
    playerImg.src = "jump.png";
  }

  if (e.code === "ArrowDown") {
    player.classList.add("crouch");
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "ArrowDown") {
    player.classList.remove("crouch");
  }
});

/* OBSTACLES */
function createObstacle() {

  let obstacle = document.createElement("div");
  obstacle.classList.add("obstacle");

  let type = Math.random();

  if (type < 0.5) {
    obstacle.style.width = "70px";
    obstacle.style.height = "80px";
    obstacle.style.bottom = "0px";
  } else {
    obstacle.style.width = "60px";
    obstacle.style.height = "70px";
    obstacle.style.bottom = "70px";
  }

  obstacle.style.left = "1200px";
  game.appendChild(obstacle);

  obstacles.push(obstacle);
}

/* LOOP */
function gameLoop() {

  if (isGameOver) return;

  velocityY -= gravity;

  let currentBottom = parseFloat(getComputedStyle(player).bottom);

  if (currentBottom <= 0 && velocityY < 0) {
    velocityY = 0;
    isJumping = false;
    player.style.bottom = "0px";

    // 🔥 RETOUR IMAGE NORMAL
    playerImg.src = "run.png";
  } else {
    player.style.bottom = (currentBottom + velocityY) + "px";
  }

  obstacles.forEach((obs, index) => {

    let left = parseFloat(obs.style.left);
    left -= speed;
    obs.style.left = left + "px";

    let playerRect = player.getBoundingClientRect();
    let obsRect = obs.getBoundingClientRect();

    if (
      playerRect.left < obsRect.right &&
      playerRect.right > obsRect.left &&
      playerRect.top < obsRect.bottom &&
      playerRect.bottom > obsRect.top
    ) {
      gameOver();
    }

    if (left < -60) {
      obs.remove();
      obstacles.splice(index, 1);
    }
  });

  score++;
  scoreDisplay.textContent = score;

  if (score % 400 === 0) {
    speed += 0.5;
  }

  requestAnimationFrame(gameLoop);
}

/* GAME OVER */
function gameOver() {
  isGameOver = true;

  // 🔥 STOP BACKGROUND
  bg.classList.add("stop");

  restartBtn.style.display = "inline";
}

/* RESTART */
restartBtn.onclick = () => location.reload();

/* GENERATION */
setInterval(() => {
  if (!isGameOver) createObstacle();
}, 1200);

/* START */
gameLoop();