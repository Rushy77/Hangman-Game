const backarrow = document.querySelector('.back-arrow');
const words = ['bee', 'ace', 'ate', 'eat', 'but', 'air', 'had', 'cab', 'can', 'cap', 'car', 'ask', 'axe', 'let', 'bet', 'van', 'pet', 'net', 'boa', 'arm', 'aid', 'say', 'art', 'per', 'man', 'men', 'fun', 'fan', 'fin', 'kin', 'pit', 'bit', 'fit', 'get', 'win', 'sin', 'toy', 'boy', 'lap', 'won', 'beg', 'cut', 'hut', 'hot', 'hit', 'rap', 'run', 'ran', 'rim', 'bin', 'dip', 'day', 'say', 'may', 'ray', 'jug', 'hug', 'fog', 'zip', 'pot', 'oat', 'oar'];
const hiddenword = document.querySelector('.hidden-word');
const checkbtn = document.querySelector('.check-btn');
const attemptsleft = document.querySelector('.attempts');
const letterinput = document.getElementById('input-letter');
const encouragement = document.querySelector('.encouragement');
const resetbtn = document.querySelector('.reset-btn');

backarrow.addEventListener('click', function(){
    window.location='../difficultypage.html';
});

let randomWordIndex = Math.floor(Math.random() * words.length);

let randomWord = words[randomWordIndex];

let guessedWord = [];

let lettersGuessed = [];

let attempts = 7;

function initializeGame(){
    for (let i = 0; i < randomWord.length; i++){
        guessedWord.push('_');
    }
    
    hiddenword.innerText = guessedWord.join(' ');

    attemptsleft.innerText = attempts;
    
    console.log(randomWord);
}

    

function checkLetter() {

    let letter = letterinput.value;

    lettersGuessed.push(letter);
    let isPresent = false;
    for (let i = 0; i < randomWord.length; i++){
        if (randomWord[i] === letter){
            guessedWord[i] = letter;
            encouragement.innerHTML = "<p class = 'encouragement' style = 'color: green;'> Welldone! </p> ";
            isPresent = true;
        }
    }
    if (!isPresent){
        attempts--;
        attemptsleft.innerText = attempts;
        encouragement.innerHTML = "<p class = 'encouragement' style = 'color: red;'> Try Again! </p> ";
    }

    hiddenword.innerText = guessedWord.join(' ');
    checkGameStatus();
}

function checkGameStatus(){
    if(guessedWord.join('') === randomWord){
        alert('Congratulations! You guessed the word correctly.');
        resetGame();
    }else if (attempts === 0) {
        alert('Game over! The word was: ' + randomWord);
        resetGame();
    }
}

function resetGame() {
    randomWordIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomWordIndex];
    guessedWord = [];
    lettersGuessed = [];
    attempts = 7;
    initializeGame();
}


checkbtn.addEventListener('click', checkLetter);
checkbtn.addEventListener('click', function(){
    letterinput.value = '';
});

resetbtn.addEventListener('click', resetGame);


initializeGame();
