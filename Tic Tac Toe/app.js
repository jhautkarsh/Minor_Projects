let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn")
let newGameButton = document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let winMsg = document.querySelector("#msg");

//Player 'X' plays first
let turn0 = true;
let count = 0;

//Winning Pattern Array
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
]

//Display X/O on click
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
   
     
    if(turn0){
         //Display O
        box.innerText = "O";
        turn0 = false;
        box.disabled = true;
    }else{
        //Display X
        box.innerText = "X";
        turn0 = true;
        box.disabled = true;
    }
    //Increment count on each click
    count += 1;
    console.log(count)
    if(count === 9){
    drawFunction();
    }
    checkWinner();
  })
})

//Enable all buttons (For New Game and Restart)
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

//Disable All Buttons
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

//This function is executed when a player wins
const showWinner = (Winner) => {
    winMsg.innerText = `Congratulations, ${Winner} is Winner`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

//Win Logic
const checkWinner = () => {

     //Loop through all win patterns
    for(let pattern of winPattern){
       let pos1Val = boxes[pattern[0]].innerText
       let pos2Val = boxes[pattern[1]].innerText
       let pos3Val = boxes[pattern[2]].innerText

    //Check if elements are filled
    //If 3 empty elements are same and would give win as would
        if((pos1Val && pos2Val && pos3Val )!=  ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log(pos1Val ,"Winner")
                //If all 3 buttons have same values then pass the value to winFunction
                showWinner(pos1Val);
            }
        };
    }
}

//Function for draw
const drawFunction = () =>{
    msgContainer.classList.remove("hide");
    winMsg.innerText = "Draw Game";
    console.log("Draw Game");
    disableBoxes();
}

const resetGame = () => {
   turnO = true;
   enableBoxes();
   count = 0;
  msgContainer.classList.add("hide");
}

//New Game
newGameButton.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

const changeColor = () =>{
    if(box.innerText == "O"){
        document.querySelector(".box").style.color = "green";
    }
    else{
        document.querySelector(".box").style.color = "red";
    }
}
//Enable Buttons and disable popup on page load
window.onload = enableBoxes();