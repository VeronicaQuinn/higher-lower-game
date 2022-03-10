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
---
![image](https://user-images.githubusercontent.com/95372009/157343631-1ba0ff44-9f93-4267-8de1-c7fe678a1052.png)
![image](https://user-images.githubusercontent.com/95372009/157347132-45f77abe-a0da-43d0-9a15-9c0e54bc729c.png)
![image](https://user-images.githubusercontent.com/95372009/157347206-45a966e9-cd2f-4540-8b95-3537da62b844.png)
## Existing Features

- __Higher or Lower???? LOGO__

   Situated at the top of the page is the logo, centered, on a bright yellow background.  The logo itself consists of bright contrasting primary and secondary colors.  The body background color is the same yellow to give a overall cohesive look to the game <br> 

- __THE INTRO PAGE__
![image](https://user-images.githubusercontent.com/95372009/157321956-d77bd9ed-1090-4db7-88c3-0ccab84cc49e.png)


  - This section appears when the site loads
  - It contains two large button
  - The HOW TO PLAY button brings the user to the RULES section with instructions on how to play the game.  This appears as a new page and the HOW TO PLAY button is 'hidden'.  JavaScript was used to toggle through the sections
  - The PLAY button brings the user directly to the GAME section and is 'hidden'.  It remains in place when the user goes to the RULES section <br>

- __THE RULES PAGE__
![image](https://user-images.githubusercontent.com/95372009/157322092-50ad78dc-f806-4e9c-9b34-7bed29b46977.png)


  - This section when the HOW TO PLAY button is clicked on the Intro page section
  - There is a list with the instructions on how to play the game and the PLAY button is featured to bring the player to the GAME section page <br>

- __THE GAME PAGE__
![image](https://user-images.githubusercontent.com/95372009/157322182-876e8730-d07b-44b5-b536-9d7b7a8c402b.png)

  - __The Game Area__

  - This section contains a div which contains two piles of 'cards' either side of a START button.  The background is a light blue to contrast with the bright bold colors used on all other elements
  - The card piles are an ivory color to allow readability of the card values 
  - The START button features the same colors as the logo
  - The START button is removed when it is selected to prevent the player pressing it during game play.  It reveals the first card on the left, the comparison card <br>

  - __The Plus-Minus Buttons__

  - This div contains the buttons used for player to guess the value of the next card
  - The PLUS button features a large plus sign in the same green featured in the logo
  - The MINUS button features a large minus sign in the same red featured in the logo, both of these buttons are clearly visible and have aria-labels in html <br>

  - __The Score Area__

  - A SCORE counter that implements correct answers.  Same blue as logo <br>

__FOOTER__

  - A footer with a Facebook link.  Same blue as logo

## Features to be Implemented in Future

- __POP UP MODALS__

  - Adding pop up modals after every player move, for example, 'Well done!', a large checkmark, a sad face emoji, etc instead of alerts
<br>

- __HIGH SCORES STORAGE__

  - Implementing a local storage API to log player's own high scores and possibly other players
<br>

- __STYLE CARD BACKS__

  - Giving a style to the 'decks'
<br>

---
## Testing

### Validator Testing 

#### W3C HTML and CSS3 Validators

No errors were returned after testing all pages within the site. 

![image](https://user-images.githubusercontent.com/95372009/157347533-a0ddee88-241f-480b-88c4-1d175df834e9.png)
<br>
![image](https://user-images.githubusercontent.com/95372009/157347813-d06c6325-437a-4d38-94cd-d81cc465c0d0.png)
<br>
![image](https://user-images.githubusercontent.com/95372009/157347965-30952f4f-7601-4164-8899-4722faf03108.png)
<br>

#### JavaScript JSHint Validator

![image](https://user-images.githubusercontent.com/95372009/157570485-6cfc9963-3519-46de-91e7-bca1ffebfa46.png)

### Accessibility

The original score came back as too low on ACCESSIBILITY so aria-labels were added to the buttons

#### Mobile<br>
![image](https://user-images.githubusercontent.com/95372009/156940407-e64b5ee0-8883-4cd0-90d9-36f2916e8b5d.png)

#### Desktop<br>
![image](https://user-images.githubusercontent.com/95372009/156940589-0ae83c05-fb88-4d98-91c2-c9cd62cdfb7d.png)
---
## Bugs
    Deck array not reading values 
  
 ![image](https://user-images.githubusercontent.com/95372009/156895637-e2e59f72-ccb9-4757-8224-ee8b80772f95.png)<br>
  Solution:  Create a switch/case that assigns values to strings<br>
  ![image](https://user-images.githubusercontent.com/95372009/157242560-aec07236-3279-4048-bacc-907c8d0bc1d1.png)

    Page Navigation 'hide' unsuccessful
  
 ![image](https://user-images.githubusercontent.com/95372009/157079700-0fd9eb51-8788-4351-b5a7-27b1ed46a38c.png)
  Solution:  Change display in CSS on all affected elements and deleted redundant PLAY button (had one per section)

    'Game Over' was causing the Intro page to reload.  See commented out code and solution. 
 ![image](https://user-images.githubusercontent.com/95372009/157241462-fcecbe4f-a966-4df9-a09c-6994f97d921a.png)


---
## Site Deployment

My site was created using Gitpod and deployed using Github pages

1. Access repository using https://gitpod.io/workspaces
2. Click the SETTINGS button
3. Scroll down to GITHUB PAGES
4. Select SOURCE and NONE
5. Select BRANCH: MAIN
6. SAVE
7. Happy Days!  Site is live!! (url) generated
---
## Technologies, Credit and Resources Used

<ul>
<li>HTML</li>
<li>CSS</li>
<li>Gitpod</li>
<li>Github</li>
<li>Code Institute Diploma in Software Development (E-commerce Applications) Programme materials</li>
<li>Code Institute Slack Community
<li>Love Maths walk-through sample project</li>
<li>https://www.w3schools.com</li>
<li>https://stackoverflow.com</li>
<li>YouTube</li>
<li>Font Awesome (icons)</li>
<li>[Am I Responsive?](http://ami.responsivedesign.is/?url=https%3A%2F%2Fveronicaquinn-higherlowe-8ck0xsfrhrc.ws-eu34xl.gitpod.io%2F#)</li>
<li>[Favicon.io](https://favicon.io/)</li>

</ul> 

## Credit Where Credit's Due

- [Code Institute Slack]
    - (https://slack.com/) CI community provided so much help throughout the project development. Huge thank you to all the Slack CI fellow students, my mentor, and our msletb-nov-2021 cohort facilitator Kasia Bogucka.  An extra THANK YOU to Dave Horrocks PP2 Channel Leader.  And a massive thanks to my mentor Antonio Rodriguez <br>

- To create original deck of cards 
    - [YouTube WebDev Made Simple](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)
    - and [YouTube MrGcoding](https://www.youtube.com/hashtag/javascript) <br>

- To shuffle and import deck to DOM 
    - [Thatsoftwaredude.com/](https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript) <br>

- Game over 
    - [DelftStack](https://www.delftstack.com/howto/javascript/javascript-wait-for-function-to-finish/) <br>

- To convert strings to number values 
    - Dave Horrocks, PP2 Leader <br>

- To style deck font color in Javascript 
    - Code Institute Tutor Support, Ger (legend) <br>

- Logo created using Free Logo Design
    - ![Logo](../higher-lower-game/assets/images/logo.png) <br>

- Toggling sections
    - Rachel Rock, fellow Code Institute co-hort student <br>

- Inserting images into README.md
    - [Justyna Golawska](https://medium.com/@justynagolawska/how-to-easily-add-screenshots-into-your-readme-file-on-github-d806a01d6ffd)



