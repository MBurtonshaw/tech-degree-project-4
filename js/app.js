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
    letter.addEventListener("click", e => {
        game.handleInteraction(e.target);
    });
});
document.addEventListener("keydown", e => {
    if (event.keyCode > 64 && event.keyCode < 91) {
        for (let i = 0; i < screenKeys.length; i++) {
            if (screenKeys[i].textContent === event.key) {
                game.handleInteraction(screenKeys[i]);
            }
        }
    }
});
