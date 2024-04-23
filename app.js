const questions = [
  {
    que: "Who is making the web standards?",
    a: "Mozilla",
    b: "Microsoft",
    c: "The World Wide Web Consortium",
    correct: "c",
  },
  {
    que: "How can you open a link in a new browser window?",
    a: "_blank",
    b: "Target",
    c: "Open",
    correct: "a",
  },
  {
    que: "What does HTML stands for?",
    a: "Hyperlinks and Text Markup Language",
    b: "Hyper Text Markup Language",
    c: "Home Tool Markup Language",
    correct: "b",
  },
  {
    que: "What does CSS stand for?",
    a: "Computer Style Sheet",
    b: "Creative Style Sheets",
    c: "Cascading Style Sheets",
    correct: "c",
  },
  {
    que: "What is the correct HTML for referring to an external style sheets",
    a: "<link rel=stylesheet type=text/css href=mystyle.css>",
    b: "Mystyle.css",
    c: "<style>",
    correct: "a",
  },
  {
    que: "Where in an HTML document is the correct place to refer to an external style sheet?",
    a: "In the <body> section",
    b: "At the end of the document",
    c: "In the <head> section",
    correct: "c",
  },
  {
    que: "Which HTML tag is used to define an internal style sheet?",
    a: "<script>",
    b: "<css>",
    c: "<style>",
    correct: "c",
  },
  {
    que: "Which HTML attribute is used to define inline styles?",
    a: "Font",
    b: "Class",
    c: "Style",
    correct: "c",
  },
  {
    que: "Which is the correct CSS syntax?",
    a: "Body {color: black;}",
    b: "Body:color=black;",
    c: "{body;color:black;}",
    correct: "a",
  },
  {
    que: "Which property is used to change the background color?",
    a: "Background-color",
    b: "Color",
    c: "Bgcolor",
    correct: "a",
  },
];
let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;
const questionHeading = document.querySelector("#getQuestion");
const questionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  questionHeading.innerText = `${index + 1}) ${data.que}`;
  questionInputs[0].nextElementSibling.innerText = data.a;
  questionInputs[1].nextElementSibling.innerText = data.b;
  questionInputs[2].nextElementSibling.innerText = data.c;
};
const submitQuestions = () => {
  const data = questions[index];
  const answer = getanswer();
  if (answer === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};
const getanswer = () => {
  let answ;
  questionInputs.forEach((input) => {
    if (input.checked) {
      answ = input.value;
    }
  });
  return answ;
};
const reset = () => {
  questionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  let marks = document.querySelector(".container");
  marks.innerText = `Thank you for Playing the Quiz.
  ${right} / ${total} are correct.`;
  marks.style.fontSize = "2rem";
  marks.style.fontWeight = "bold";
  marks.style.textAlign = "center";
  marks.style.padding = '20px';
};
loadQuestion();
