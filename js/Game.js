/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const body = document.querySelector("body");

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
            screenKeys.classList.add("chosen");
            this.checkForWin();
            } else {
                this.removeLife();
                screenKeys.classList.add("wrong");
            }
        if (this.checkForWin()) {
            this.gameOver();
            }
    }
    removeLife() {
    const remainingLives = document.getElementsByClassName("tries");
    const heartImage = document.querySelectorAll("li img");
    
        if (this.activePhrase.checkLetter() === false) {
            this.missed ++;
            if (this.missed === 1) {
                heartImage[0].src = "images/lostHeart.png";
            } else if (this.missed === 2) {
                heartImage[1].src = "images/lostHeart.png";
            } else if (this.missed === 3) {
                heartImage[2].src = "images/lostHeart.png";
            } else if (this.missed === 4) {
                heartImage[3].src = "images/lostHeart.png";
            } else if (this.missed === 5) {
                heartImage[4].src = "images/lostHeart.png";
                body.classList.add("lose");
                this.gameOver();
            }
        }
    }
    checkForWin() {
        const keyCheck = document.querySelectorAll(".show");
        const letterCheck = document.querySelectorAll(".letter");
        
        for (let i = 0; i < keyCheck.length; i++) {
            let counter = letterCheck.length;
            if (counter === keyCheck.length) {
                return true;
             } else {
                 return false;
             }
    }
    }
    gameOver(gameWon) {
        if (this.checkForWin()) {
            console.log(true);
            $(".main-container").append($("h1"));
            $("h1").insertBefore($("#overlay"));
            $("h1").text("Great job!");
            body.classList.add("win");
            } else {
            console.log(false);
            $(".main-container").append($("h1"));
            $("h1").insertBefore($("#overlay"));
            $("h1").text("Sorry, better luck next time!");
            }
    }
}
