/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("buy local"),
            new Phrase("delete your gram"),
            new Phrase("stop the filters"),
            new Phrase("start recycling"),
            new Phrase("read more")
        ];
        this.activePhrase = null;
    }
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random * this.phrases.length)];
    }
}
