const flashcardContainer = document.getElementById("flashcard-container");
const flashcardFront = document.getElementById("flashcard-front");
const flashcardBack = document.getElementById("flashcard-back");
const timer = document.getElementById("timer");
const addCardButton = document.getElementById("add-card-button");

let cards = [
  {
    question: "groß",
    answer: "grande",
    },
    {
    question: "klein",
    answer: "pequeno",
    },
    {
    question: "billig",
    answer: "barato",
    },
    {
    question: "teuer",
    answer: "caro",
    },
    {
    question: "schön",
    answer: "bonito",
    },
    {
    question: "hässlich",
    answer: "feio",
    },
    {
    question: "fern",
    answer: "distante",
    },
    {
    question: "nah",
    answer: "próximo",
    },
    {
    question: "freundlich",
    answer: "amigável",
    },
    {
    question: "unfreundlich",
    answer: "antipático",
    },
    {
    question: "gut",
    answer: "bom",
    },
    {
    question: "schlecht",
    answer: "ruim",
    },
    {
    question: "warm",
    answer: "quente",
    },
    {
    question: "kalt",
    answer: "frio",
    },
    {
    question: "modern",
    answer: "moderno",
    },
    {
    question: "klassisch",
    answer: "clássico",
    },
    {
    question: "hell",
    answer: "claro",
    },
    {
    question: "dunkel",
    answer: "escuro",
    },
    {
    question: "neu",
    answer: "novo",
    },
    {
    question: "alt",
    answer: "velho",
    },
    {
    question: "interessant",
    answer: "interessante",
    },
    {
    question: "langweilig",
    answer: "entediante",
    },
    {
    question: "müde",
    answer: "cansado",
    },
    {
    question: "kaputt",
    answer: "quebrado",
    },
    {
    question: "lecker",
    answer: "saboroso",
    }
];

let currentCardIndex = 0;

// Display the question on the front of the card
flashcardFront.innerHTML = cards[currentCardIndex].question;

// Set the timer to 5 seconds
let timeLeft = 5;

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
        timeLeft = 5;
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
  timeLeft = 5;
  flashcardBack.innerHTML = "";
  flashcardContainer.classList.remove("flip");
  clearInterval(countdown);
  startTimer();
});
