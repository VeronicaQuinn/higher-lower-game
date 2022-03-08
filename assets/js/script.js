/* jshint esversion: 8 */
// Waits for DOM to load before running any other functions

document.addEventListener("DOMContentLoaded", function () {

    // HTML elements

    const introPage = document.getElementById('intro-page');
    const rulesPage = document.getElementById('rules-page');
    const gamePage = document.getElementById('game-page');
    const rulesButton = document.getElementById('rules-btn');
    const playBtnContainer = document.getElementById('play-game-div');
    const playButton = document.getElementById('play-game');
    const startButton = document.getElementById('start-game');
    const pileOne = document.getElementById('left-card');
    const pileTwo = document.getElementById('right-card');
    const buttons = document.getElementsByClassName('guess-button');
    // const footer = document.getElementsByTagName('footer');
    let piles = document.getElementsByClassName('pile');

    // Game play variables

    const suits = ['&hearts;', '&spades;', '&diams;', '&clubs;'];
    const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const deck = [];
    let currentCard;
    let newCard;

    // Add button Event Listeners

    rulesButton.addEventListener('click', goToRules);
    playButton.addEventListener('click', playGame);
    startButton.addEventListener('click', startGame);

    // Page navigation functions

    function goToRules() {
        introPage.classList.add('hide');
        rulesPage.classList.remove('hide');
        // playBtnContainer.classList.remove('hide');
    }
    console.log(goToRules)
    function playGame() {
        gamePage.classList.remove('hide');
        introPage.classList.add('hide');
        rulesPage.classList.add('hide');
        playBtnContainer.classList.add('hide');
    }
    console.log(playGame)

    // Create deck and convert strings into number values

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

    function startGame() {
        // Shuffle deck
        // piles.style.backgroundColor = "#0B28E8"
        for (let i = 0; i < 1000; i++) {
            let shuffle1 = Math.floor((Math.random() * deck.length));
            let shuffle2 = Math.floor((Math.random() * deck.length));
            let shuffled = deck[shuffle1];
            deck[shuffle1] = deck[shuffle2];
            deck[shuffle2] = shuffled;
        }
        // Start button
        currentCard = deck.pop();
        console.log(currentCard.card)
        if (currentCard.card.includes("heart") || currentCard.card.includes("diams")) {
            pileOne.classList.add('red')
        } else if (currentCard.card.includes("spades") || currentCard.card.includes("clubs")) {
            pileOne.classList.remove('red')
        }
        pileOne.innerHTML = currentCard.card;
        // pileOne.style.backgroundColor = "ivory"
        startButton.remove();

        for (let button of buttons) {
            button.addEventListener('click', guess);
        }
    }

    function guess(e) {

        newCard = deck.pop();
        pileTwo.innerHTML = newCard.card;
        if (newCard.card.includes("hearts")) {
            pileTwo.classList.add('red')
        } else if (newCard.card.includes("diams")) {
            pileTwo.classList.add('red')
        } else if (newCard.card.includes("spades") || newCard.card.includes("clubs")) {
            pileTwo.classList.remove('red')
        }
        console.log(currentCard.value)
        console.log(e.currentTarget);


        if (e.currentTarget.dataset.type === "higher") {
            if (newCard.value > currentCard.value) {
                let oldScore = parseInt(document.getElementById('score').innerText);
                document.getElementById('score').innerText = ++oldScore;
                console.log(newCard.value);
                console.log(currentCard)
            } else if (newCard.value === currentCard.value) {
                console.log("That's ok, carry on");
            } else {
                alert("GAME OVER");
                document.getElementById('score').innerHTML = 0;
                // document.location.reload();
                // clearInterval(interval);
                console.log("game over, you loser");
            }
        } else {
            if (newCard.value < currentCard.value) {
                let oldScore = parseInt(document.getElementById('score').innerText);
                document.getElementById('score').innerText = ++oldScore;
                console.log("Yay! You got it!");
            } else if (newCard.value === currentCard.value) {
                console.log("That's ok, carry on");
            } else {
                alert("GAME OVER");
                document.getElementById('score').innerHTML = 0;
                // document.location.reload();
                // clearInterval(interval);
                console.log("game over, you loser")
            }
        }

        setTimeout(function () {
            pileOne.innerHTML = newCard.card;
            pileTwo.innerHTML = "";
            // pileTwo.style.backgroundColor = "#0B28E8"
            currentCard = newCard;
            console.log(currentCard)
            if (currentCard.card.includes("hearts")) {
                pileOne.classList.add('red')
            } else if (currentCard.card.includes("diams")) {
                pileOne.classList.add('red')
            } else if (currentCard.card.includes("spades") || currentCard.card.includes("clubs")) {
                pileOne.classList.remove('red')
            }
        }, 1500);
    }
})