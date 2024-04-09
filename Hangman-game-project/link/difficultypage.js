const backarrow = document.querySelector('.back-arrow');
const beginnerbtn = document.querySelector('#beginner-btn');
const amateurbtn = document.querySelector('#amateur-btn');
const intermediatebtn = document.querySelector('#intermediate-btn');
const probtn = document.querySelector('#pro-btn');
const expertbtn = document.querySelector('#expert-btn');

backarrow.addEventListener('click', function(){
    window.location='../index.html';
});

beginnerbtn.addEventListener('click', function(){
    window.location='difficulties/beginnerpage.html';
});

amateurbtn.addEventListener('click', function(){
    window.location='difficulties/amateurpage.html';
});

intermediatebtn.addEventListener('click', function(){
    window.location='difficulties/intermediatepage.html';
})

probtn.addEventListener('click', function(){
    window.location='difficulties/propage.html';
});

expertbtn.addEventListener('click', function(){
    window.location='difficulties/expertpage.html';
});
