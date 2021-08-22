const textBox = document.querySelector('#textInput');

function selecionarLetras(x) { 

       let textoEscrito = x.value;
       textoEscrito = textoEscrito.toLowerCase();
       textoEscrito = textoEscrito.replace(/[^a-z'\s]+/g, ""); 
       let textoEscritoArray = textoEscrito.split(""); 
        return textoEscritoArray;}

function selecionarPalavras(x) { 

    let textoEscrito = x.value;
    textoEscrito = textoEscrito.toLowerCase();
    textoEscrito = textoEscrito.replace(/[^a-z'\s]+/g, ""); 
    let textoEscritoArray = textoEscrito.split(" "); 
        return textoEscritoArray;}



const contarLetras = (x) => {
    let letterCounts = {a: undefined};  

    for (let i = 0; i < x.length; i++) {
        let currentLetter = x[i];
        // if (letterCounts[currentLetter] === ' ') { como retirar os espaços?
        // }
        if (letterCounts[currentLetter] === undefined) {  
            letterCounts[currentLetter] = 1;
        } else { 
            letterCounts[currentLetter]++; 
        }
    }

    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
     }
}

const contarPalavras = (x) => {
    let wordsCounts = {};

    for (let i = 0; i < x.length; i++) {
        currentWord = x[i];
        if (wordsCounts[currentWord] === undefined) {
            wordsCounts[currentWord] = 1; 
        } else { 
            wordsCounts[currentWord]++; 
        }
    }

    for (let word in wordsCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${word}": ${wordsCounts[word]}, `;
        span.innerText = textContent; 
        const words = document.getElementById("wordsDiv");
        words.appendChild(span); 
     }
}

function limparMesa(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
   // teu código vai aqui ... 
const letters = document.getElementById('lettersDiv')
const words = document.getElementById('wordsDiv')
limparMesa(letters)
limparMesa(words)

   const typedText = selecionarLetras(textBox);
   contarLetras(typedText);

   const typedWords = selecionarPalavras(textBox);
   contarPalavras(typedWords);

});






