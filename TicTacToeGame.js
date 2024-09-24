let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
       [0, 1, 2],
       [0, 3, 6],
       [0, 4, 8],
       [1, 4, 7],
       [2, 5, 8],
       [2, 4, 6],
       [3, 4, 5],
       [6, 7, 8],
];

const resetGame = () =>{
       turnO = true;
       enableBoxes();
       msgContainer.classList.add("hide"); 
}
let count = 0;
boxes.forEach((box) => {
       box.addEventListener("click", () => {
              if (turnO) {
                     count++;
                     box.innerText = "O";
                     box.style.color = "blue";
                     turnO = false;
              }

              else {
                     count++;
                     box.innerText = "X";
                     turnO = true;
              }

              box.disabled = true;

              checkWinner();
       });
});

const disableBoxes = ()=>{
       for(let box of boxes){
              box.disabled = true;
       }
}

const enableBoxes = ()=>{
       for(let box of boxes){
              box.disabled = false;
              box.innerText = "";
       }
}

const showWinner = (winner) =>{
       msg.innerText = `Congratulations, Winner is ${winner}`;
       msgContainer.classList.remove("hide");
       disableBoxes();
}

const matchdraw = () =>{
       msg.innerText = "Match Draw";
       msgContainer.classList.remove("hide");
       disableBoxes();
}

const checkWinner = () =>{
       
       for(let pattern of winPatterns){
              let pos1 = boxes[pattern[0]].innerText
              let pos2 = boxes[pattern[1]].innerText
              let pos3 = boxes[pattern[2]].innerText    
              
              if(pos1 != "" && pos2 != "" && pos3 != ""){
                     if(pos1 === pos2 && pos2 === pos3){
                            showWinner(pos1);
                            return;
                     }
              }
       };

       if(count === 9){
              matchdraw();
       }
};

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

