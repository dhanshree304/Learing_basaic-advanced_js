const quotes = [
  {
    quote:
      "I cant change the direction of the wind, but I can adjust my sails to always reach my destination.",
    author: "Jimmy Dean",
  },
  {
    quote:
      "Being entirely honest with oneself is a good exercise.-Sigmund Freud",
    author: "Lewis Cass",
  },
  {
    quote:
      "To be fully alive, fully human, and completely awake is to be continually thrown out of the nest.",
    author: "Marcus Aurelius",
  },
  {
    quote: "Once you choose hope, anything's possible",
    author: "Jane Austen",
  },
  {
    quote:
      "Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant.",
    author: "Abraham Lincoln",
  },
];

const displayBox = document.getElementById("displayBox");
const Btn = document.getElementById("Btn");

Btn.addEventListener("click", function () {
  showNewQuote();
});

let count = 0;

function showNewQuote() {
  // let count = Math.floor(Math.random() * 5);
  // console.log(count);

  // displayBox.innerHTML="";
  // displayBox.textContent=`${quotes[count].quote}-${quotes[count].author}`

  //......................................................



  displayBox.innerHTML = "";
  displayBox.textContent = `${quotes[count].quote}-${quotes[count].author}`;
  count++;

  if (count === quotes.length) {
    count = 0;
  }
  console.log(count);
}
