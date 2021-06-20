# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Details:
This game based on the game ”Mastermind” (https://en.wikipedia.org/wiki/Mastermind_(board_game)).

# How To Run:
npm install @material-ui/core
npm start

# How To Play:
At first the computer create password with 4 colors from the colors you can play with.
After that you have to guess the password with the 7/10/12 colors depends on the level you play.
For each guess you will see the result (Direct Hit(Black), Hit(White) or Miss(Red)) next to your guess.
You are not allowed to insert the same color more than once on each guess.
You have only 10 attemps to win or you will lose.

# Components:
Game.js contains all the game logic and flow.
Stack.js is the section that holds the color buttons.
CircleButton.js is responsible for how the buttons will look and how they react.
Board.js contains all the guesses the user made and the results compare to the password.
Circle.js is the basic circle that represent the player guesses and the results.
