const rulesbtn = document.querySelector('.rulesbtn');
const rules = document.querySelector('.rules');
const startbtn = document.querySelector('.startbtn');

function revealRule(){
    if(rules.classList.contains('rulesbtn')){
        rules.classList.remove('rulesbtn');
    }else{
        rules.classList.add('rulesbtn');
    }
}

rulesbtn.addEventListener('click', revealRule);

rulesbtn.addEventListener('click', function(e){
    if(rules.classList.contains('rulesbtn')){
        e.target.innerText = 'Close';
    }else{
        e.target.innerText = 'Game Rules';
    }
});

startbtn.addEventListener('click', function(){
    window.location='link/difficultypage.html';
});

