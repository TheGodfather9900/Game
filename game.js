let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function convertToWord(letter){
    if(letter==='r') return "Rock";
    if(letter==='p') return "Paper";
    return "Scissors";
}

function win(user,computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_div.innerHTML=convertToWord(user) + " beats" +convertToWord(computer) + " .YOU WIN!";
}

function lose(user,computer){
    compScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_div.innerHTML=convertToWord(computer) + " beats" +convertToWord(user) + " .YOU LOSE!";
}

function draw(user,computer){
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_div.innerHTML="Same selection. IT IS A DRAW";
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissor_div.addEventListener('click', function () {
        game("s");
    })
}

main();