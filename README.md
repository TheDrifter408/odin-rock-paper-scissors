# Odin Project
## Project Rock Paper Scissors:
This was a project to implement a rock, paper scissors game to play a game of five rounds and determine the winner by keeping track of the points.

### Functions:
Only 3 functions were implemented and Math.random was used to get a random number between 1 and 3 an object was used to store the corresponding value such 1 for rock, 2 for paper and 3 for scissors.
```javascript
const choice = {
    1: "rock",
    2: "paper",
    3: "scissors"
}
```
The function `playRound()` would take the `humanChoice` and `computerChoice` as parameters to determine who won the round and implement the correct counter.

Finally, the `playGame()` function was used to run a loop of 5 times for 5 rounds and in end of the rounds determine who won the overall match.