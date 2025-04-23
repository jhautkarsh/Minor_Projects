let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Select each choice from choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
});

// LOgic of Game to Play
const playGame = (userChoice) => {

    const Compchoice = genCompchoice();

    if (userChoice === Compchoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = Compchoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = Compchoice === "scissors" ? false : true;
        }
        else {
            userWin = Compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, Compchoice);
    }
};

// Display if Game id Draw
const drawGame = () => {
    msg.innerText = "Game draw! :- Please try again";
    msg.style.backgroundColor = "#081b31";
}

// Generate Choices For Computer
const genCompchoice = () => {
    let options = ["rock", "paper", "scissors"];
    let number = Math.floor(Math.random() * 3);
    return options[number];
}

// Display Winner OR Losser
const showWinner = (userWin, userChoice, Compchoice) => {
    if (userWin) {
        userScore++;
        msg.innerText = (`You Win! :- Your ${userChoice} beats ${Compchoice}`);
        msg.style.backgroundColor = "green";
        userScorePara.innerText = userScore;
    } else {
        compScore++;
        msg.innerText = (`You Lose! :- ${Compchoice} beats Your ${userChoice}`);
        msg.style.backgroundColor = "red";
        compScorePara.innerText = compScore;
    }
}



