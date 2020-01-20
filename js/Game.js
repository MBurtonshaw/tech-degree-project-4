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
        const startScreen = document.getElementById("overlay");
        startScreen.style.display = "none";
        const randomPhrase = game.getRandomPhrase();
        const randomNewPhrase = new Phrase (randomPhrase.phrase);
        randomNewPhrase.addPhraseToDisplay();
        this.activePhrase = randomNewPhrase;
    }
    handleInteraction(event) {
        let screenKeys = event;
        const letter = screenKeys.textContent;
        if (this.activePhrase.checkLetter(letter)) {
            this.activePhrase.showMatchedLetter(screenKeys);
            screenKeys.disabled = true;
            } else {
                console.log(false);
                //removeLife();
            }
    }
    /*checkForWin() {
        
    }
    removeLife() {
        
    }
    gameOver() {
        
    }*/
}
