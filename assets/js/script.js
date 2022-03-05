// Waits for DOM to load before running any other functions

document.addEventListener("DOMContentLoaded", function() {

const suits = ['&hearts;', '&spades;', '&diams;', '&clubs;'];
const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const deck = [];

// Create deck
for (let suit in suits) {
    for (let face in faces) {
        deck.push(faces[face] + suits[suit]);
    }
}

// function startGame() {
    // Shuffle deck
    for (let i = 0; i < 1000; i++) {
        let shuffle1 = Math.floor((Math.random() * deck.length));
        let shuffle2 = Math.floor((Math.random() * deck.length));
        let shuffled = deck[shuffle1];
        deck[shuffle1] = deck[shuffle2];
        deck[shuffle2] = shuffled;
    }
    console.log(deck);
// }})
})