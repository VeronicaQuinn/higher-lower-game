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
console.log(deck);
})