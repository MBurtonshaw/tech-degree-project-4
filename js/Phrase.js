/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

function randomColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const color = "rgb(" + x + "," + y + "," + z + ")";
    return color;
}

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        //Declaring variables for DOM elements & appending ul to div
        const phraseDiv = document.getElementById("phrase");
        const ul = document.getElementsByTagName("ul")[0];
        phraseDiv.appendChild(ul);

        //Loop to cycle through this.phrase and split up each character, append it to a <li> element, and give it a class
        for (let i = 0; i < this.phrase.length; i++) {
            const li = document.createElement("LI");
            if (this.phrase[i] === " ") {
                li.classList.add("hide");
                li.classList.add("space");
                ul.appendChild(li);
            } else if (this.phrase[i]) {
                li.classList.add("hide");
                li.style.backgroundColor = randomColor();
                li.classList.add("letter");
                let phraseArray = this.phrase.split("");
                li.textContent = phraseArray[i];
                li.classList.add(phraseArray[i]);
                ul.appendChild(li);
            }
        }
    }
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else if (this.phrase.includes(event.key)) {
            return true;
        } else {
            return false;
        }
    }
    showMatchedLetter(screenKeys) {
        const clickKeys = document.querySelectorAll("li");
        for (let j = 0; j < clickKeys.length; j++) {
            const revealed = clickKeys[j];
            if (
                revealed.textContent === screenKeys.textContent ||
                revealed.textContent === event.key
            ) {
                revealed.classList.add("show");
                revealed.classList.remove("hide");
            }
        }
    }
