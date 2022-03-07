# Project Portfolio 2 - JavaScript Essentials

# Higher or Lower???? A Guessing Game
## by Veronica Quinn

### [Click here to view the site](https://veronicaquinn.github.io/higher-lower-game/)
### [Click here to view the repository.](https://github.com/VeronicaQuinn/higher-lower-game)
---
## Project Objective
The main objective of this project is to demonstrate competency in HTML, CSS and JavaScript languages by building a front-end working game

A simple guessing game based on the solitaire card game.  Players have to guess if the next card is higher or lower than the card shown.  This game is suitable for all ages as it is easy to play and follow but challenges players to calculate odds as well as involving a bit of luck!

While the game play is simple, the coding in JavaScript presented a number of challenges in implementation

### Existing Features

- __Higher or Lower???? Logo__

   Situated at the top of the page is the logo, centered, on a bright yellow background.  The logo itself consists of bright contrasting primary and secondary colors.  The body background color is the same yellow to give a overall cohesive look to the game 

- __The Game Area__

  - This section contains a div which contains two piles of 'cards' either side of a START button.  The background is a light blue to contrast with the bright bold colors used on all other elements
  - The card piles are an ivory color to allow readability of the card values 
  - The START button features the same colors as the logo
  - The START button is removed when it is selected to prevent the player pressing it during game play.  It reveals the first card on the left, the comparison card

- __The Plus-Minus Buttons__

  - This div contains the buttons used for player to guess the value of the next card
  - The PLUS button features a large plus sign in the same green featured in the logo
  - The MINUS button features a large minus sign in the same red featured in the logo, both of these buttons are clearly visible and have aria-labels in html

- __The Score Area__

  - A SCORE counter that implements correct answers.  Same blue as logo 

- __Footer__

  - A footer with a Facebook link.  Same blue as logo.  Gives a nice finish to the page on bigger screens.  Is hidden on certain height screens to allow game area to 'breathe'

## Testing

### Validator Testing 

- HTML

- CSS

- JavaScript

### Accessibility

#### Mobile
![image](https://user-images.githubusercontent.com/95372009/156940407-e64b5ee0-8883-4cd0-90d9-36f2916e8b5d.png)

#### Desktop
![image](https://user-images.githubusercontent.com/95372009/156940589-0ae83c05-fb88-4d98-91c2-c9cd62cdfb7d.png)

## Site Deployment

My site was created using Gitpod and deployed using Github pages

1. Access repository using https://gitpod.io/workspaces
2. Click the SETTINGS button
3. Scroll down to GITHUB PAGES
4. Select SOURCE and NONE
5. Select BRANCH: MAIN
6. SAVE
7. Happy Days!  Site is live!! (url) generated

## Credit Where Credit's Due

- [Code Intitute Slack]
    - (https://slack.com/) CI community provided so much help thoughout the project development. Huge thank you to all the Slack CI fellow students, my mentor, and our msletb-nov-2021 cohort facilitator Kasia Bogucka.  An extra THANK YOU to Dave Horrocks PP2 Channel Leader

- To create original deck of cards 
    - [YouTube WebDev Made Simple](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)
    - and [YouTube MrGcoding](https://www.youtube.com/hashtag/javascript)
- To shuffle and import deck to DOM 
    - [Thatsoftwaredude.com/](https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript)
- Game over 
    - [DelftStack](https://www.delftstack.com/howto/javascript/javascript-wait-for-function-to-finish/)
- To convert strings to number values 
    - [Dave Horrocks, PP2 Leader]
- To style deck font color in Javascript 
    -[Code Institute Tutor Support, Ger (legend)]
- Logo created using Free Logo Design
    - ![Logo](../higher-lower-game/assets/images/logo.png)    



Bugs
Deck array not reading values
![image](https://user-images.githubusercontent.com/95372009/156895637-e2e59f72-ccb9-4757-8224-ee8b80772f95.png)
