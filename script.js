'use strict';
// Declaring variables and selecting elements
let playerscore;

let player0score = document.getElementById('score--0');
let player1score = document.getElementById('score--1');
let currentplayerscore;
let activeplayer =0;

// Changing the player
function changePlayer(){
    let player0 = document.querySelector('.player--0');
    let player1 = document.querySelector('.player--1');

    //Toggling the active player
    if(activeplayer==0){
        activeplayer=1;
    } else{
        activeplayer=0;
    }
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');    

    currentplayerscore = activeplayer == 0 ? document.getElementById('current--1') : document.getElementById('current--0');
    playerscore = activeplayer==0 ? document.getElementById('score--1') : document.getElementById('score--0');

}    

changePlayer();

// Rolling the dice
document.querySelector('.btn--roll').addEventListener('click', function(){
    // console.log(activeplayer);
    // let scoreArr = [parseInt(document.getElementById('score--0').textContent), parseInt(document.getElementById('score--1').textContent)];

    let diceroll = Math.floor(Math.random()* (6) + 1);

    console.log(diceroll);    

    switch(diceroll){
        case 1: 
            document.querySelector('.dice').src = 'dice-1.png';
            currentplayerscore.textContent = '0';
            changePlayer();
            break;

        case 2:
            document.querySelector('.dice').src = 'dice-2.png';
            break;
        
        case 3:
            document.querySelector('.dice').src = 'dice-3.png'
            break;
            
        case 4:
            document.querySelector('.dice').src = 'dice-4.png'
            break;
                
        case 5:
            document.querySelector('.dice').src = 'dice-5.png'
            break;

        case 6:
            document.querySelector('.dice').src = 'dice-6.png'
            break;
    }

    if(diceroll!==1){
        let tempcurrentscore = parseInt(currentplayerscore.textContent);
        tempcurrentscore += diceroll;
        currentplayerscore.textContent = tempcurrentscore;

        // Check winning condition after updating score
        if (tempcurrentscore + parseInt(playerscore.textContent) >= 100) {
            // Determine the winner
            let winner = activeplayer === 0 ? 1 : 0;
            document.querySelector('.player--' + winner).classList.add('player--winner');
            playerscore.textContent = tempcurrentscore + parseInt(playerscore.textContent); // Update player's score to show 100+ score
        }
    } else {
        currentplayerscore.textContent = '0';
    }
});

// Holding the score
document.querySelector('.btn--hold').addEventListener('click', function(){
    let tempheldscore = parseInt(playerscore.textContent); 
    let anothertempcurrentscore = parseInt(currentplayerscore.textContent);
    tempheldscore += anothertempcurrentscore;
    playerscore.textContent = tempheldscore;
    currentplayerscore.textContent = '0';
    changePlayer();
});
// Init function
function init() {
        // Reset player scores to zero
        document.getElementById('score--0').textContent = '0';
        document.getElementById('score--1').textContent = '0';
    
        // Set the current player to Player 1
        document.querySelector('.player--0').classList.add('player--active');
        document.querySelector('.player--1').classList.remove('player--active');
    
        // Reset current scores to zero
        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';
    
        // Remove winner styles from players
        document.querySelector('.player--0').classList.remove('player--winner');
        document.querySelector('.player--1').classList.remove('player--winner');
    
        // Enable roll dice and hold buttons
        document.querySelector('.btn--roll').disabled = false;
        document.querySelector('.btn--hold').disabled = false;
    
        // Reset dice image
        document.querySelector('.dice').src = 'dice-5.png';
    }
       
document.querySelector('.btn--new').addEventListener('click', init);
