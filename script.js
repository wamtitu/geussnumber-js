'use strict'

/*document.querySelector('.message').textContent="correct geuss";
console.log(document.querySelector('.message').textContent);
document.querySelector('.unknownNumber').textContent=25;
document.querySelector('.score').textContent=9;
document.querySelector('.guess').value=15;
console.log(document.querySelector('.guess').value);*/

let score=20;
let number= Math.trunc(Math.random()*20)+1;
let highscore=0;

document.querySelector('.check').addEventListener('click', function() {
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)
    if(!guess){
        document.querySelector('.message').textContent='No number entered'
    }
    else if(guess===number){
        document.querySelector('.message').textContent='correct number lol...'
        document.querySelector('.unknownNumber').textContent=number;
        document.querySelector('body').style.backgroundColor='green'
        document.querySelector('.unknownNumber').style.width='150px'
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
   /* else if(guess!==number?'Oops too high':'Oops too low'){
        if(score>1){
            document.querySelector('.score').textContent=score;
            score--;
            //document.querySelector('.message').textContent='Oops too high'
        }else{
            document.querySelector('.message').textContent='YOU LOST the game'
            document.querySelector('.score').textContent=0;
        }
    }*/
    else if(guess>number){
        if(score>1){
            document.querySelector('.score').textContent=score;
            score=score-1;
            document.querySelector('.message').textContent='Oops too high'
        }else{
            document.querySelector('.message').textContent='YOU LOST the game'
            document.querySelector('.score').textContent=0;
        }
        
    }
    else if(guess<number){
        if(score>1){
            document.querySelector('.score').textContent=score;
            score=score-1;
            document.querySelector('.message').textContent='Oops too low'
        }else{
            document.querySelector('.message').textContent='YOU LOST the game'
            document.querySelector('.score').textContent=0;
        }
    }
})
document.querySelector('.again').addEventListener('click', function(){
    score=20;
    number= Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...'
    document.querySelector('.score').textContent=score;
    document.querySelector('.unknownNumber').textContent='?'
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.unknownNumber').style.width='70px';

})