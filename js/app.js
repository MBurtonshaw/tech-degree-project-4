/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.getElementById("btn__reset");

startButton.addEventListener("click", () => {
    game = new Game();
    game.startGame();
});

const clickKeys = document.querySelectorAll(".key");

clickKeys.forEach(letter => {
    letter.addEventListener("click", e => {
        letter = e.target;
        game.handleInteraction(e.target);
});
});

    
/*
        document.addEventListener("keydown", () => {
            this.activePhrase.checkLetter();
        });
        */
