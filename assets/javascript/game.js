// pseudocode 

// Pick a random word 
var words = [
    'cat', 'dog', 'fish'
]

var word = words[Math.floor(Math.random() * words.length)];

// creating the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
}

var remainigLetters = word.length;

// while the word has not been guessed{
while (remainigLetters > 0){
    // Game code goes here
    // show the player their progress
    //makeElement(answerArray.join(" "));
    alert(answerArray.join(" "));
    // Handling the player input
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    // if the player wants to quit, exit the loop
    if (guess === null){
        break;
    // if the guess is not a single letter, tell the player to pick a single letter
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // if the guess is in the word, update the game state with the guess
        for (var j = 0; j < word.length; j++){
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainigLetters--;
                makeElement(answerArray.join(" ")); 
            }
        }
    }
}

    function makeElement(winningWord) {
    //var text = document.createElement('p');
    //text.innerHTML = winningWord;
    return document.querySelector("#gameText").innerHTML = winningWord;
}
  

// In win condition, congratulate the player on guessing the word
//alert(answerArray.join(" "));
//alert("Good Job! The answer was " + word);

// defined the function that will produce an image tag equal to the winning word

function makeWinningImage(animal) {
    var winningImage = document.createElement('img');
    winningImage.setAttribute("src", "./assets/images/" + animal + ".jpg")
    return document.querySelector("#winningImage").append(winningImage);
}

// using tghe above function
makeWinningImage(answerArray.join(""))
