const backarrow = document.querySelector('.back-arrow');
const gameover = document.querySelector('.gameover-message');

backarrow.addEventListener('click', function(){
    window.location='../../index.html';
});

function gameOverMessageGenerator(){
    const messages = ['Better luck next time!', 'You can do this!', 'Try harder!', 'Don\'t giveup!', 'Oops!', 'Wasn\'t easy, was it?', 'Nice try!'];

    const randomMessage = Math.floor(Math.random() * messages.length);

    gameover.innerText = messages[randomMessage];
}

window.onload = gameOverMessageGenerator;