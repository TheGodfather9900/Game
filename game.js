function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function game() {
    let w = 0;
    let l = 0;
    let p = parseInt(prompt("Enter how many rounds you want to play"));
    for (i = 0; i < p; i++) {

        let a = prompt("your choice: ");
        let b = a.toUpperCase();
        let n = 0;
        if (b == "ROCK") {
            n = 1;
        }
        else if (b = "PAPER") {
            n = 2;
        }
        else {
            n = 3
        }
        let x = getRndInt(1, 4);
        /*1=rock
        2=paper
        3=scissors
        */

        if (x == n) {
            console.log("it is a draw");
        }
        else {
            if (x == 1 && n == 2) {
                console.log("Paper beats Rock, You WIN");
                w++;
            }
            if (x == 1 && n == 3) {
                console.log("Rock beats Scissors, You LOSE");
                l++;
            }
            if (x == 2 && n == 1) {
                console.log("Paper beats Rock, You LOSE");
                l++;
            }
            if (x == 2 && n == 3) {
                console.log("Scissors beat Paper, You WIN");
                w++
            }
            if (x == 3 && n == 1) {
                console.log("Rock beats Scissors, You WIN");
                w++;
            }
            if (x == 3 && n == 2) {
                console.log("Scissors beat Paper, You LOSE");
                l++;
            }
        }
    }
    console.log("Final score is " + w + " wins and " + l + " Losses")
}