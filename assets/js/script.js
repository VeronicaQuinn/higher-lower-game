// Waits for DOM to load before running any other functions

document.addEventListener("DOMContentLoaded", function () {

    // HTML elements

    const startButton = document.getElementById('start-game');
    const pileTwo = document.getElementById('right-card');
    const pileOne = document.getElementById('left-card');
    const buttons = document.getElementsByClassName('button');

    // Game play variables

    const suits = ['&hearts;', '&spades;', '&diams;', '&clubs;'];
    const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const deck = [];
    let currentCard;
    let newCard;

    startButton.addEventListener('click', startGame);

    // Create deck

    for (let suit of suits) {
    for (let face of faces) {
        switch (face) {
            case "A":
                deck.push({value: 14, card: `${face}${suit}`});
                break;
            case "K":
                deck.push({value: 13, card: `${face}${suit}`});
                break;
            case "Q":
                deck.push({value: 12, card: `${face}${suit}`});
                break;
            case "J":
                deck.push({value: 11, card: `${face}${suit}`});
                break;
            default:
                deck.push({value: face, card: `${face}${suit}`});
        }
    }
}

    function startGame() {
        // Shuffle deck
        for (let i = 0; i < 1000; i++) {
            let shuffle1 = Math.floor((Math.random() * deck.length));
            let shuffle2 = Math.floor((Math.random() * deck.length));
            let shuffled = deck[shuffle1];
            deck[shuffle1] = deck[shuffle2];
            deck[shuffle2] = shuffled;
        }
        currentCard = deck.pop();
    pileOne.innerHTML = currentCard.card;
        startButton.remove();

        for (let button of buttons) {
            button.addEventListener('click', guess);
        }
    };

    
})