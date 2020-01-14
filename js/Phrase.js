/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        return this.game.getRandomPhrase();
    }
}

/*
        let display = document.createElement("DIV");
        display.id = "display";
        display.class = "section";
        let ul = document.createElement("UL");
        document.getElementById("phrase").appendChild(ul);
        getRandomPhrase();
        phrase.forEach(letter => {
            let li = document.createElement("LI");
            li.textContent = letter;
            ul.append(li);
            li.addClass("letter");
            });
            */
