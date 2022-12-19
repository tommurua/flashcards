const flashcardContainer = document.getElementById("flashcard-container");
const flashcardFront = document.getElementById("flashcard-front");
const flashcardBack = document.getElementById("flashcard-back");
const timer = document.getElementById("timer");
const addCardButton = document.getElementById("add-card-button");

let cards = [
  {
    question: "Deutschland",
    answer: "Alemanha",
  },
  {
    question: "Handy",
    answer: "Celular",
  },
];

let currentCardIndex = 0;

// Display the question on the front of the card
flashcardFront.innerHTML = cards[currentCardIndex].question;

// Set the timer to 10 seconds
let timeLeft = 10;

let countdown;

function startTimer() {
  // Update the timer every second
  countdown = setInterval(() => {
    if (timeLeft === 0) {
      clearInterval(countdown);
      timer.innerHTML = "Time's up!";
      // Display the answer on the back of the card
      flashcardBack.innerHTML = cards[currentCardIndex].answer;
      // Flip the card
      flashcardContainer.classList.add("flip");
      // Show the next card after 2 seconds
      setTimeout(() => {
        currentCardIndex++;
        if (currentCardIndex === cards.length) {
          currentCardIndex = 0;
        }
        flashcardFront.innerHTML = cards[currentCardIndex].question;
        timeLeft = 10;
        flashcardBack.innerHTML = "";
        flashcardContainer.classList.remove("flip");
        clearInterval(countdown);
        startTimer();
      }, 2000);
    } else {
      timer.innerHTML = `Time left: ${timeLeft} seconds`;
      timeLeft--;
    }
  }, 1000);
}

startTimer();

// Add a new card when the "Add Card" button is clicked
addCardButton.addEventListener("click", () => {
  // Prompt the user for the question and answer
  const question = prompt("Wort auf deutsch:");
  const answer = prompt("Palavra em português:");
  // Add the new card to the cards array
  cards.push({
    question: question,
    answer: answer,
  });
  // Display the new card and restart the timer
  currentCardIndex = cards.length - 1;
  flashcardFront.innerHTML = cards[currentCardIndex].question;
  timeLeft = 10;
  flashcardBack.innerHTML = "";
  flashcardContainer.classList.remove("flip");
  clearInterval(countdown);
  startTimer();
});
