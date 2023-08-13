# Lamb Cult Dice

I drew inspiration for this project from playing the game "The Cult of the Lamb." Within this game, there was a subgame that resembled what I have created. Let me describe the game:

Each player has a 3x3 field, making it a two-player game. The objective is to score more points than your opponent. The rules are quite intriguing:

During each turn, you roll a dice numbered from 1 to 6.
You have three columns, each with a height of three, and you can place your dice at the highest available position in any column with empty cells.
If your opponent has the same dice value in a corresponding column on their field, your dice destroys theirs. The same applies if your opponent places a dice and you have the same value.
The first person to fill all nine cells with dice ends the game, and the players must tally the scores to determine the winner.
Each dice awards between 1 and 6 points, depending on the rolled number. However, it can award even more points. If you have two identical dice, the scoring logic differs:
For example, if you have 1, 5, and 5 in your left column, the score will be 21. The scoring formula operates as follows: 1 + ((5 + 5) * 2).
If you have three identical "5" dice, you will receive 45 points, as (5 + 5 + 5) * 3 equals 45 points.

How to Run the Game:

To play this game, follow these steps:

1. Clone this repository.
2. Run the command **npm i** to install the necessary dependencies.
3. After the installation, use the command **npm start** and go to **http://localhost:3000/**.
4. Enjoy your time playing with my small project! :)
