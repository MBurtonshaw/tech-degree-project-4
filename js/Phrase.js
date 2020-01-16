/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

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
                } else {
            li.classList.add("hide");
            li.classList.add("letter");
            let phraseArray = this.phrase.split("");
            li.textContent = phraseArray[i];
            li.classList.add(this.phrase[i]);
            ul.appendChild(li);
                }
        }
    }
    checkLetter(letter) {
        if (this.phrase.includes(event.key)) {
            let letter = event.key;
            if (event.key !== " ") {
                console.log(letter);
                //showMatchedLetter();
                }
            }
    }
    /*
    showMatchedLetter() {
        for (let j = 0; j < this.activePhrase.length; j++) {
            if (j < 2) {
                console.log('yatta');
                }
        }
                }
        }
        */
