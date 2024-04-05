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

function getAndDisplayRandomWord(){
    let attempts = 5;

    attemptsleft.innerText = '5';

    const randomWordIndex = Math.floor(Math.random() * words.length);

    const randomWordLetters = words[randomWordIndex].split('');

    const firstLetter = randomWordLetters[0];
    const secondLetter = randomWordLetters[1];

    const underscoringString = '_'.repeat(randomWordLetters.length);

    hiddenword.innerText = underscoringString;

    console.log(randomWordLetters);
    console.log(firstLetter);
    console.log(underscoringString);

    

    function checkLetter() {

        const letter = letterinput.value;

    
        let isPresent = false;
        for (let i = 0; i < randomWordLetters.length; i++){
            if (randomWordLetters[i].includes(letter)){
                isPresent = true
                break;

            }
        }
            if (isPresent) {
                encouragement.innerHTML = "<p class = 'encouragement' style = 'color: green;'> Welldone! </p> ";
                replaceText();
            }else{
                encouragement.innerHTML = "<p class = 'encouragement' style = 'color: red;'> Try Again! </p> ";
                attempts--;
                attemptsleft.innerText = attempts.toString();
            }  

            if (letter === ''){
                encouragement.innerHTML = "<p class = 'encouragement'> Enter a letter! </p> ";
            }


            if (attempts === 0){
                window.location = 'gameover.html';
            }

        function replaceText(){
            for (let i = 0; i < randomWordLetters.length; i++){
                if(firstLetter.includes(letter)){
                    hiddenword.innerText = underscoringString.replace('_ ', letter);
                }if(secondLetter.includes(letter)){
                    hiddenword.innerText = underscoringString.replace('_  ', letter);
                }else{
                    hiddenword.innerText = underscoringString.replace('_   ', letter);
                }
            }
        }

    }
    checkbtn.addEventListener('click', checkLetter);

    resetbtn.addEventListener('click', function(){
        window.location = 'beginnerpage.html';
    });
}


window.onload = getAndDisplayRandomWord;