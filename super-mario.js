var grass = document.querySelector('.container');
var mario = document.querySelector('.marioStand');
var marioRunning = document.querySelector('.marioRunning');

document.addEventListener('keydown', startRunning);
document.addEventListener('keyup', stopRunning);

var step = 0;
var intervalX;
var started = false;

function moveBackground() {
    step -= 10;
    grass.style.backgroundPositionX = step + "px";
}

function startRunning (event) {
    if (event.keyCode === 39) {
        if (!intervalX) {
          marioRunning.style.display = "block";
          mario.style.display = "none";
          intervalX = setInterval(moveBackground, 10);
          started = true;
        }
    }
    if (event.keyCode === 37) {
        if (!intervalX) {
            marioRunning.style.display = "block";
            marioRunning.style.transform = "scaleX(-1)";
            mario.style.display = "none";
            intervalX = setInterval(moveBackground, -100);
            started = true;
        }
    }
    if (event.keyCode === 38) {
        mario.setAttribute("id", "marioJump");
      }
    if (event.keyCode === 40) {
        mario.setAttribute("id", "marioCrouch");
      }
}

function stopRunning () {
    mario.removeAttribute("id", "crouch");
    if (intervalX) {
        marioRunning.style.display = "none";
        mario.style.display = "block";
        marioRunning.style.transform = "";
        clearInterval(intervalX);
        intervalX = null;
    }
}

