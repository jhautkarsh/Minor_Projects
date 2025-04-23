let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "green", "blue", "red"];
let started = false;
let level = 0;
let highscore = 1;

const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

document.addEventListener("keypress", () => {
    if (!started) {
        started = true;
        levelUp();
    }
});

function flash(btn, className) {
    btn.classList.add(className);
    setTimeout(() => {
        btn.classList.remove(className);
    }, 300);
}

function levelUp() {
    userSeq = [];
    level++;
    if (level > highscore) highscore = level;
    h2.innerText = `Level ${level}`;

    const randColor = btns[Math.floor(Math.random() * btns.length)];
    const randBtn = document.getElementById(randColor);
    gameSeq.push(randColor);
    flash(randBtn, "flashBtn");
}

function checkAns(currentIdx) {
    if (userSeq[currentIdx] === gameSeq[currentIdx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to restart.`;
        h3.innerText = `Highest Score = ${highscore}`;
        h2.style.color = "red";
        document.body.style.backgroundColor = "#ffe5e5";
        setTimeout(() => {
            document.body.style.backgroundColor = "#f0f4f8";
        }, 1000);
        resetGame();
    }
}

function handleClick() {
    const color = this.id;
    userSeq.push(color);
    flash(this, "userFlash");
    checkAns(userSeq.length - 1);
}

function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", handleClick);
});