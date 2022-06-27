/**
 * Title: Shuffle App
 * Discription: This a shuffle app. First input some participant then shuffle those participant and pick a random participant name to winner.
 * Author: Jakir Hossain
 * Website: jakircse.com
 * Date: 27/06/2022
 */

// Select all necessary element and assign them to variable
let newParticipant = document.querySelector('#new-participant');
let parentItems = document.querySelector('#items');
let participant = parentItems.children;
let winnerList = document.querySelector('#winner');
let shuffleBtn = document.querySelector('#shuffle-btn');
let contestWinner = document.querySelector('#contest-winner');
let button = document.querySelector('#btn');

// Create new participant Function
let createParticipant = function (participantName) {
    let participantList= document.createElement('li');
    let label = document.createElement('label');
    label.innerText = newParticipant.value;
    participantList.appendChild(label);
    return participantList;
}
// Add participant to list Function
let addParticipant = function (event) {
  let participantList = createParticipant(newParticipant.value);
  parentItems.appendChild(participantList);
  newParticipant.value= '';
}
button.addEventListener('click', addParticipant );

// Shuffle function
function shuffle() {
    for(let i = 0; i < participant.length; i++  ) {
        
        randomIndex = Math.floor(Math.random() * (i+1));
    }
    let  winnerLabel = participant[randomIndex].querySelector('label');
    contestWinner.innerText = winnerLabel.innerText;
}
// Background sound function
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute("autoplay", "autoplay");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }

// Party JS
let timeout;
function celebration() {
  timeout = setTimeout(partyFunction, 4000);
}

function partyFunction() {
  party.confetti(winnerList, {
    count: party.variation.range(120, 160),
    
  });
  party.confetti(this);
}

// Shuffle events function
shuffleBtn.addEventListener('click', (event)=>{
    shuffle();
    contestWinner.style.opacity = '1';
    sound('fireworks.mp3'); // Sound effect
    // Party celebration
    celebration();
    
});



