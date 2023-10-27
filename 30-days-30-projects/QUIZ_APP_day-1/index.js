const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { option: "shark", correct: false },
      { option: "Blue Whale", correct: false },
      { option: "Elephant", correct: true },
      { option: "griaffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { option: "Asia", correct: false },
      { option: "australia", correct: true },
      { option: "Arctic", correct: false },
      { option: "Africa", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { option: "Vatican City", correct: false },
      { option: "Bhutan", correct: true },
      { option: "Nepal", correct: false },
      { option: "Shri Lanka", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { option: "Kalahari", correct: false },
      { option: "Gobi", correct: false },
      { option: "Sahara", correct: false },
      { option: "Antarctica", correct: true },
    ],
  },
];

const questionBox = document.getElementById("question");
const answerBtnDiv = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next_btn");
const quizDiv = document.querySelector(".quiz");

let index = 0;
let total = questions.length;
let score = 0;

function displayQuestion(data) {
  questionBox.textContent = data.question;
  answerBtnDiv.innerHTML = "";
  data.answers.map((opt) => {
    const ansBtns = document.createElement("button");

    ansBtns.textContent = opt.option;

    if (opt.correct) {
      ansBtns.classList.add("btn", "correct");
    } else {
      ansBtns.classList.add("btn", "wrong");
    }

    ansBtns.addEventListener("click", () => {
      const correct = document.querySelector(".correct");
      correct.style.backgroundColor = "green";
      const getAllWorng = document.querySelectorAll(".wrong");
      if (opt.correct) {
        score += 5;
        correct.disabled = true;
      } else {
        ansBtns.style.backgroundColor = "red";
        getAllWorng.forEach((e) => {
          e.disabled = true;
        });
      }
    });
    answerBtnDiv.append(ansBtns);
  });
  index++;
  if (index === questions.length) {
    nextBtn.textContent = "Finish";
  }
}
const curr_score = document.getElementById("curr_score");
nextBtn.addEventListener("click", function () {
  curr_score.textContent = score;
  if (index !== questions.length) {
    nextBtn.textContent = "Next";
    displayQuestion(questions[index]);
  } else {
    quizDiv.innerHTML = "";
    curr_score.innerHTML = "";
    const scoreDiv = document.createElement("div");
    const h1 = document.createElement("h2");
    h1.textContent = "Your Current Score is";
    const h2 = document.createElement("h2");
    h2.textContent = score;
    scoreDiv.append(h1, h2);
    quizDiv.append(scoreDiv);
  }
});
