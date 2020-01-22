/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.getElementById("btn__reset");

startButton.addEventListener("click", () => {
    game = new Game();
    game.resetGame();
    game.startGame();
});

const screenKeys = document.querySelectorAll(".key");

screenKeys.forEach(letter => {
    letter.addEventListener("click", (e) => {
        game.handleInteraction(e.target);
});
});

/*
const board = document.getElementsByClassName("keyrow")[0];

board.forEach(key => {
document.addEventListener("keydown", (e) => {
    this.key = e.target;
    console.log(e.target);
});
});
*/
/*
        document.addEventListener("keydown", () => {
            this.activePhrase.checkLetter();
        });
        */
