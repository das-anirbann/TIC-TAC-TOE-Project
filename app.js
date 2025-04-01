let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX= true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [7,4,1],
    [2,5,8],
    [8,5,2],
    [3,4,5],
    [5,4,3],
    [2,4,6],
    [6,4,2],
    [6,7,8],
    [6,3,0],
    [8,7,6] 
    ];


boxes.forEach((box) => {
     box.addEventListener("click", () => {
        /*console.log("box was clicked");*/
        if(turnX === true){ 
            box.innerText = "X";
            turnX = false;
        }
        else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkwinner();
     });
});

const disableBoxes = () => {
    for(let box of boxes) {
         box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
         box.disabled = false;
         box.innerText ="";
    }
}


const showWinner = (winner) => {
    msg.innerText = `congrats, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    msgContainer.classList.add("show");
    disableBoxes();


    setTimeout( ()=> {
        msgContainer.classList.remove("show");
        msgContainer.classList.add("hide");
        resetGame();
    }, 3000);
};


const checkwinner = () => {
     for(let pattern of winpattern) {
        /*console.log(pattern[0], pattern[1],pattern[2]);
        console.log(
            boxes[pattern[0]].innerText, 
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );*/
        let pos1val = boxes[pattern[0]].innerText; 
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;


        if(pos1val !="" && pos2val != "" && pos3val !="" )
        {
            if(pos1val === pos2val && pos2val === pos3val  )
            {
                 /*console.log("winner",pos1val);*/

                 showWinner(pos1val);
            }
        }
     }
}

const resetGame = () => {
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

resetBtn.addEventListener("click",resetGame);