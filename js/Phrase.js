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
        if (this.keycode === "a") {
                console.log('yatta');
            }
    }
   /* showMatchedLetter() {
        for (let j = 0; j < this.phrase.length; j++) {
            const list = document.getElementsByTagName("li");
            if (list[j].classList.includes(e.target.value)) {
                console.log('yatta');
                }
        }
    }*/
}
