/* jshint esversion: 8 */
// Waits for DOM to load before running any other functions

document.addEventListener("DOMContentLoaded", function () {

    // HTML elements
    const introPage = document.getElementById('intro-page');
    const rulesPage = document.getElementById('rules-page');
    const gamePage = document.getElementById('game-page');
    const howToPlayBtn = document.getElementById('rules-btn');
    const playBtnContainer = document.getElementById('play-game-div');
    const goToGameBtn = document.getElementById('play-game');
    const playRoundBtn = document.getElementById('start-game');
    const pileOne = document.getElementById('left-card');
    const pileTwo = document.getElementById('right-card');
    const plusBtn = document.getElementById('higher');
    const minusBtn = document.getElementById('lower');

    // Game play variables
    const suits = ['&hearts;', '&spades;', '&diams;', '&clubs;'];
    const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const deck = [];
    let currentCard;
    let newCard;

    // Add button Event Listeners

    howToPlayBtn.addEventListener('click', goToRules);
    goToGameBtn.addEventListener('click', goToGame);
    playRoundBtn.addEventListener('click', playRound);
    plusBtn.addEventListener('click', playUserGuess);
    minusBtn.addEventListener('click', playUserGuess);

    // Page navigation functions

    function goToRules() {
        introPage.classList.add('hide');
        rulesPage.classList.remove('hide');
    }

    function goToGame() {
        gamePage.classList.remove('hide');
        introPage.classList.add('hide');
        rulesPage.classList.add('hide');
        playBtnContainer.classList.add('hide');
        playRoundBtn.classList.remove('hide');
        document.getElementById('score').innerHTML = 0;
        pileOne.innerHTML = "";
        createDeck();
    }

    // Create deck and convert strings into number values

    function createDeck() {
        for (let suit of suits) {
            for (let face of faces) {
                switch (face) {
                    case "A":
                        deck.push({
                            value: 14,
                            card: `${face}${suit}`
                        });
                        break;
                    case "K":
                        deck.push({
                            value: 13,
                            card: `${face}${suit}`
                        });
                        break;
                    case "Q":
                        deck.push({
                            value: 12,
                            card: `${face}${suit}`
                        });
                        break;
                    case "J":
                        deck.push({
                            value: 11,
                            card: `${face}${suit}`
                        });
                        break;
                    default:
                        deck.push({
                            value: face,
                            card: `${face}${suit}`
                        });
                }
            }
        }
        shuffleDeck();
    }

    // Shuffle deck

    function shuffleDeck() {
        for (let i = 0; i < 1000; i++) {
            let shuffle1 = Math.floor((Math.random() * deck.length));
            let shuffle2 = Math.floor((Math.random() * deck.length));
            let shuffled = deck[shuffle1];
            deck[shuffle1] = deck[shuffle2];
            deck[shuffle2] = shuffled;
        }
    }

    // Start button

    function playRound() {
        console.log(deck);
        currentCard = deck.pop();
        displayCard(currentCard, pileOne);
        playRoundBtn.classList.add('hide');
    }

    // Restart Game

    function playNextRound() {
        currentCard = newCard;
        displayCard(currentCard, pileOne);
        pileTwo.innerHTML = '';
        updateScore();
    }

    function updateScore() {
        let oldScore = parseInt(document.getElementById('score').innerText);
        document.getElementById('score').innerText = ++oldScore;
    }

    function playUserGuess(e) {
        const selectedOption = e.currentTarget.dataset.type;
        newCard = deck.pop();
        displayCard(newCard, pileTwo);
        if (selectedOption === 'higher') {
            if (currentCard.value < newCard.value) {
                console.log('Good');
                setTimeout(playNextRound, 1500);
            } else if (newCard.value === currentCard.value) {
                console.log("That's ok, carry on");
                setTimeout(playNextRound, 1500);
            } else {
                alert('Too bad!  Game Over! Never mind, try again!');
                pileTwo.innerHTML = '';
                goToGame();
            }
        }
        if (selectedOption === 'lower') {
            if (currentCard.value > newCard.value) {
                setTimeout(playNextRound, 1500);
            } else if (newCard.value === currentCard.value) {
                setTimeout(playNextRound, 1500);
            } else {
                alert('Too bad!  Game Over! Never mind, try again!');
                pileTwo.innerHTML = '';
                goToGame();
            }
        }
    }

    // Card display and style cards

    function displayCard(currentCard, pile) {
        if (currentCard.card.includes("heart") || currentCard.card.includes("diams")) {
            pile.classList.add('red');
        } else if (currentCard.card.includes("spades") || currentCard.card.includes("clubs")) {
            pile.classList.remove('red');
        }
        pile.innerHTML = currentCard.card;
    }
});