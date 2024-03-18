// Tic tac toe
let box = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let turn = true;
let count = 0;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
box.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn===true){
        box.style.color = "lawngreen"
        box.innerHTML="O";
        turn = false;
        }
        else {
            box.style.color ="midnightblue";
            box.innerHTML="X";
            turn= true;
        }
        box.disabled= true;
        let winner= checkWinner();
        count++;
        if(count===9 && winner!=true){
                msg.innerText="Game Is a Draw";
            }
        });
});
const resetButton = ()=>{
    enableButton();
    turn = true;
    count= 0;
    msg.innerText="";
    
}
const disableButton = ()=>{
    for(let button of box){
        button.disabled=true;
    }
}
const enableButton = ()=>{
    for(let button of box){
        button.disabled=false;
        button.innerHTML="";
        
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations!!! Winner is ${winner}`;
    msg.style.animation
}
const checkWinner = ()=>{
    for (let pattern of winPattern){
        let position1= box[pattern[0]].innerText;
        let position2= box[pattern[1]].innerText;
        let position3= box[pattern[2]].innerText;
        if(position1 !="" && position2!="" && position3!="" ){
            if(position1===position2 && position2===position3){
                showWinner(position1);
                disableButton();
                return true;
            }
        }
    }
};
reset.addEventListener("click",resetButton);