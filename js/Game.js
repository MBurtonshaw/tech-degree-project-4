/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("Buy Local"),
            new Phrase("Delete Your Gram"),
            new Phrase("Stop the Filters"),
            new Phrase("Start Recycling"),
            new Phrase("Read More")
        ];
        this.activePhrase = null;
    }
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    startGame() {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        const randomPhrase = game.getRandomPhrase();
        const phrase = new Phrase (randomPhrase.phrase);
        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
    }
    handleInteraction() {
        document.addEventListener("keydown", () => {
            phrase.checkLetter;
        });
    }
    /*checkForWin() {
        
    }
    removeLife() {
        
    }
    gameOver() {
        
    }*/
}
