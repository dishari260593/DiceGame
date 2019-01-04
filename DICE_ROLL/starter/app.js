/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
Array containing total Scores of both the players.
*/
let globalScores,roundScore,activePlayer,gamePlaying;
init();

function init(){
globalScores=[0,0];
console.log(globalScores[0])
//Round Score at the moment.
roundScore=0;
//To track the current player.
activePlayer=0;
//gamePlaying is set to true;
gamePlaying=true;

//Hide the display of dice in the beginning.
document.querySelector('.dice').style.display='none';
//Set all the global current scores to 0 at beginning of any game.
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2'
document.querySelector('.player-'+0+'-panel').classList.remove('winner');
      document.querySelector('.player-'+1+'-panel').classList.remove('winner');
document.querySelector('.player-'+0+'-panel').classList.remove('active');
      document.querySelector('.player-'+1+'-panel').classList.remove('active');
    document.querySelector('.player-'+0+'-panel').classList.add('active');
    
}


//Create event handler for button hold.
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
   //add current score to global Score.
    globalScores[activePlayer]+=roundScore;
    roundScore=0;
    //update UI
    document.getElementById('score-'+activePlayer).textContent=globalScores[activePlayer];
    //Check if player won the game
    if(globalScores[activePlayer]>=10){
        document.querySelector('#name-'+activePlayer).textContent='Winner!'
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;
    }
    else{
    //switch to next player.
    nextPlayer();
    }
    }
});

//Create event handler for the roll dice button.
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        //To get 1-6 numbers as random numbers.
    let dice=Math.floor(Math.random()*6)+1;
    
    //Display the result.
    var diceDOM= document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    
    //Update the roundScore.
    if(dice !== 1){
        //add score.
        roundScore+=dice;
        document.getElementById('current-'+activePlayer).textContent=roundScore;
    }
    else{
        //next player.
        nextPlayer();      
    }
    }
    
});

function nextPlayer(){
     activePlayer === 0 ? activePlayer=1 :activePlayer=0;
        roundScore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';  
}

document.querySelector('.btn-new').addEventListener('click',init);




