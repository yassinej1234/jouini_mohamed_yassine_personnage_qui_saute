const player = document.getElementById("player");
const game = document.getElementById("game");
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

/* IMPORTANT */
player.style.bottom = "0px";

/* 🎮 CONTROLES */
document.addEventListener("keydown", (e) => {

  if (e.code === "Space" && !isJumping) {
    velocityY = 16; // 🔥 saut corrigé
    isJumping = true;
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

/* 🧱 CREATION OBSTACLES */
function createObstacle() {

  let obstacle = document.createElement("div");
  obstacle.classList.add("obstacle");

  let type = Math.random();

  if (type < 0.5) {
    // obstacle sol
    obstacle.style.width = "30px";
    obstacle.style.height = "40px";
    obstacle.style.bottom = "0px";
  } else {
    // obstacle aérien
    obstacle.style.width = "40px";
    obstacle.style.height = "30px";
    obstacle.style.bottom = "60px";
  }

  obstacle.style.left = "800px";
  game.appendChild(obstacle);

  obstacles.push(obstacle);
}

/* 🔁 LOOP PRINCIPAL */
function gameLoop() {

  if (isGameOver) return;

  /* gravité */
  velocityY -= gravity;

  let currentBottom = parseFloat(getComputedStyle(player).bottom);

  if (currentBottom <= 0 && velocityY < 0) {
    velocityY = 0;
    isJumping = false;
    player.style.bottom = "0px";
  } else {
    player.style.bottom = (currentBottom + velocityY) + "px";
  }

  /* obstacles */
  obstacles.forEach((obs, index) => {

    let left = parseFloat(obs.style.left);
    left -= speed;
    obs.style.left = left + "px";

    /* collision */
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

    /* supprimer obstacle */
    if (left < -50) {
      obs.remove();
      obstacles.splice(index, 1);
    }
  });

  /* score */
  score++;
  scoreDisplay.textContent = score;

  /* difficulté */
  if (score % 400 === 0) {
    speed += 0.5;
  }

  requestAnimationFrame(gameLoop);
}

/* 💀 GAME OVER */
function gameOver() {
  isGameOver = true;
  restartBtn.style.display = "inline";
}

/* 🔄 RESTART */
restartBtn.onclick = () => {
  location.reload();
};

/* ⏱️ génération obstacles */
setInterval(() => {
  if (!isGameOver) createObstacle();
}, 1200);

/* 🚀 démarrage */
gameLoop();