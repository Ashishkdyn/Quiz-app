//all questions with options in one object
const questions = [
  {
    que: "which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JAVASCRIPT",
    d: "PHP",
    correct: "a",
  },
  {
    que: "which year javascript was launched?",
    a: "1997",
    b: "1998",
    c: "1995",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "what does css stands for?",
    a: "Hypertext markup language",
    b: "Cascading style sheets",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats lamborginis",
    correct: "b",
  },
];
let total = questions.length;
let right = 0,
  wrong = 0;
let index = 0;
const quesBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll(".options");

// load question with options
const loadQuestions = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  quesBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerHTML = data.a;
  optionInputs[1].nextElementSibling.innerHTML = data.b;
  optionInputs[2].nextElementSibling.innerHTML = data.c;
  optionInputs[3].nextElementSibling.innerHTML = data.d;
};

// when click on submit button
const submitQuiz = () => {
  const ans = getAnswer();
  const data = questions[index];
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestions();
};

// when click on any option get that option through this function
const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

// reset selected option
const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

//end quiz after last question
const endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <div style = "text-align : center">
    <h1>Thanks for playing the Quiz</h1>
    <h2 style = "margin-top: 10px; color : green;">Correct = ${right}</h2>
    <h2 style = "color : red;">Wrong = ${wrong}</h2>
    </div>
    `;
};

//initial call
loadQuestions();
