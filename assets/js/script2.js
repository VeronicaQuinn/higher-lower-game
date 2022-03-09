/* jshint esversion: 8, jquery: true */
// Waits for DOM to load before running any other functions

document.addEventListener("DOMContentLoaded", function () {

    // HTML elements

    const introPage = document.getElementById('intro-page');
    const rulesPage = document.getElementById('rules-page');
    const gamePage = document.getElementById('game-page');
    const howToPlayBtn = document.getElementById('rules-btn');
    const playBtnContainer = document.getElementById('play-game-div');
    const goToGameBtn = document.getElementById('play-game');
    const startGameBtn = document.getElementById('start-game');
    const pileOne = document.getElementById('left-card');
    const pileTwo = document.getElementById('right-card');
    const plusBtn = document.getElementById('higher');
    const minusBtn = document.getElementById('lower');

    // const footer = document.getElementsByTagName('footer');
    let piles = document.getElementsByClassName('pile');

    // Game play variables

    const suits = ['&hearts;', '&spades;', '&diams;', '&clubs;'];
    const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const deck = [];
    let currentCard;
    let newCard;

    // Add button Event Listeners

    howToPlayBtn.addEventListener('click', goToRules);
    goToGameBtn.addEventListener('click', goToGame);
    goToGameBtn.addEventListener('click', createDeck);
    goToGameBtn.addEventListener('click', shuffleDeck);
    plusBtn.addEventListener('click', guess);
    minusBtn.addEventListener('click', guess);
    startGameBtn.addEventListener('click', startGame);

    // buttons.addEventListener('click', guess);

    // Page navigation functions

    function goToRules() {
        introPage.classList.add('hide');
        rulesPage.classList.remove('hide');
        // playBtnContainer.classList.remove('hide');
    }
    console.log(goToRules)

    function goToGame() {
        gamePage.classList.remove('hide');
        introPage.classList.add('hide');
        rulesPage.classList.add('hide');
        playBtnContainer.classList.add('hide');
    }
    console.log(goToGame)

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
        // function styleDeck() {if (card.innerHTML.includes("hearts") || card.innerHTML.includes("diams")) {
        //     card.add('red')
        // } else if (card.innerHTML.includes("spades") || card.innerHTML.includes("clubs")) {
        //    card.remove('red')
        // }
    }
    console.log(createDeck)

    function shuffleDeck() {
        for (let i = 0; i < 1000; i++) {
            let shuffle1 = Math.floor((Math.random() * deck.length));
            let shuffle2 = Math.floor((Math.random() * deck.length));
            let shuffled = deck[shuffle1];
            deck[shuffle1] = deck[shuffle2];
            deck[shuffle2] = shuffled;
        }
    }
    console.log(shuffleDeck)

    // for (let button of buttons) {

        // Shuffle deck
    // startGameBtn.addEventListener('click', shuffleDeck);

    // function shuffleDeck() {
    //     for (let i = 0; i < 1000; i++) {
    //         let shuffle1 = Math.floor((Math.random() * deck.length));
    //         let shuffle2 = Math.floor((Math.random() * deck.length));
    //         let shuffled = deck[shuffle1];
    //         deck[shuffle1] = deck[shuffle2];
    //         deck[shuffle2] = shuffled;
    //     }

    // }
    // console.log(shuffleDeck)

    // Start button
    function startGame() {    
    currentCard = deck.pop();
    // console.log(currentCard.card)
    // if (currentCard.card.includes("heart") || currentCard.card.includes("diams")) {
    //     pileOne.classList.add('red')
    // } else if (currentCard.card.includes("spades") || currentCard.card.includes("clubs")) {
    //     pileOne.classList.remove('red')
    // }
    pileOne.innerHTML = currentCard.card;
    startGameBtn.remove();
    }
    console.log(startGame)

    function guess(e) {
        newCard = deck.pop();
        pileTwo.innerHTML = newCard.card;

        // Increment score
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
                console.log("game over");
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
                console.log("game over")
            }
        }
    }
    console.log(guess)
    // if (newCard.card.includes("hearts")) {
    //     pileTwo.classList.add('red')
    // } else if (newCard.card.includes("diams")) {
    //     pileTwo.classList.add('red')
    // } else if (newCard.card.includes("spades") || newCard.card.includes("clubs")) {
    //     pileTwo.classList.remove('red')
    // }
    // console.log(currentCard.card)
    // console.log(e.currentTarget);

    // function incrementScore() {
        // if (e.currentTarget.dataset.type === "higher") {
        //     if (newCard.value > currentCard.value) {
        //         let oldScore = parseInt(document.getElementById('score').innerText);
        //         document.getElementById('score').innerText = ++oldScore;
        //         console.log(newCard.value);
        //         console.log(currentCard)
        //     } else if (newCard.value === currentCard.value) {
        //         console.log("That's ok, carry on");
        //     } else {
        //         alert("GAME OVER");
        //         document.getElementById('score').innerHTML = 0;
        //         // document.location.reload();
        //         // clearInterval(interval);
        //         console.log("game over, you loser");
        //     }
        // } else {
        //     if (newCard.value < currentCard.value) {
        //         let oldScore = parseInt(document.getElementById('score').innerText);
        //         document.getElementById('score').innerText = ++oldScore;
        //         console.log("Yay! You got it!");
        //     } else if (newCard.value === currentCard.value) {
        //         console.log("That's ok, carry on");
        //     } else {
        //         alert("GAME OVER");
        //         document.getElementById('score').innerHTML = 0;
        //         // document.location.reload();
        //         // clearInterval(interval);
        //         console.log("game over, you loser")
        //     }
        // }
    // }

    setTimeout(() => {
            pileOne.innerHTML = newCard.card;
            pileTwo.innerHTML = "";
            currentCard = newCard;
            console.log(currentCard);
            //         if (currentCard.card.includes("hearts")) {
            //             pileOne.classList.add('red')
            //         } else if (currentCard.card.includes("diams")) {
            //             pileOne.classList.add('red')
            //         } else if (currentCard.card.includes("spades") || currentCard.card.includes("clubs")) {
            //             pileOne.classList.remove('red')
            //         }
        }, 1500);
})