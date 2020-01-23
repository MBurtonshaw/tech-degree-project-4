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

for (let i = 0; i < screenKeys.length; i++) {
    const newKeys = screenKeys[i];
}

screenKeys.forEach(letter => {
    letter.addEventListener("click", e => {
        game.handleInteraction(e.target);
    });
});
document.addEventListener("keydown", e => {
    game.handleInteraction(e.target);
});
/*
for (let i = 0; i < screenKeys.length; i++) {
    document.addEventListener("keydown", e => {
        if (screenKeys[i].textContent === this.ActivePhrase) {
       console.log('yatta'); 
    }
});
     }*/
