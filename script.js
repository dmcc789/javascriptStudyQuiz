
var countEl = document.querySelector("#count");
var letsGoEl = document.querySelector("#letsGo");
var mainContent = document.querySelector("#maincontent");
var submitInital = document.querySelector("#initials");

var questionEl;
var buttonEl;
let count = 5;

// declaring question objects
const qOne = {
    text:"What makes you think ARRAY?", 
    correctAnswer: ["Square brackets"],
    possibleIncorrectAnswers: ["Parentheses", "A dollar sign", "Double vertical bars"],
};
const qTwo = {
    text:"What can JavaScript add to a page of HTML & CSS?",
    correctAnswer: ["All"],
    possibleIncorrectAnswers: ["Animation", "Logic", "Dynamic functionality"],
}; 
// const qThree = {
//     text:"",
//     correctAnswer: ,
//     possibleIncorrectAnswers: [],
// };
// const qFour = {
//     text:"",
//     correctAnswer: ,
//     possibleIncorrectAnswers: [],
// };
// const qFive = {
//     text:"",
//     correctAnswer: ,
//     possibleIncorrectAnswers: [],
// }; 

// declaring question object array
const quizQs = [qOne, qTwo];
// const question = quizQs[i];


// defining set counter function
function setCounter() {
    var timerInterval = setInterval(function() {
        count--;
        countEl.textContent = count;

        if(count === 0) {
            clearInterval(timerInterval);
            hallOfFame();
        }
    }, 1000);
    
}


// defining a function to create each "screen" of question/button combination
function createQuiz() {
    
    mainContent.textContent = " ";
    mainContent.setAttribute("class", "text-left");
    
    var questionEl = document.createElement("h2");
    mainContent.appendChild(questionEl);
    
    questionEl.textContent = qOne.text;
    
    var ulEl = document.createElement("ul");
    questionEl.appendChild(ulEl);

    var answers = qOne.possibleIncorrectAnswers.concat(qOne.correctAnswer);
    
    answers.forEach(i => {
        var liEl = document.createElement("li");
        ulEl.appendChild(liEl);
        var buttonEl = document.createElement("button");
        buttonEl.setAttribute("type", "button");
        buttonEl.setAttribute("class", "btn btn-info")
        buttonEl.innerText = i;
        liEl.appendChild(buttonEl);
    })  

    // for (let i = 0; i < quizQs.length; i++) {
    //     const question = quizQs[i];
    //     createQuestions();
    //     questionEl.textContent = question.text;
    //     createButtons();        
    // }
}

//defining function to create questions
// function createQuestions() {
   
//     var questionEl = document.createElement("h2");
//     mainContent.appendChild(questionEl);
//     // questionEl.textContent = quizQs[i].text;
// }
//defining a function to create buttons
// function createButtons() {
//     var answers = question.possibleIncorrectAnswers.concat(question.correctAnswer);
//     answers.forEach(i => {
//         var buttonEl = document.createElement("button");
//         buttonEl.innerText = i;
//         mainContent.appendChild(buttonEl);
//     })  
// }
// buttonEl.addEventListener("click", function())

// const option = answers[i];

// num.forEach(i => {
//   var button = document.createElement("button");
//   button.innerText = i;
  
//   button.addEventListener("click", function() {
//     console.log(i)
//   })
//   buttonsContainer.appendChild(button);
// })


// defining a function to move ahead ??
// function moveAhead() {
//     if 
// }

let userScore = 3;

// defining function to create enter initials landing page
function hallOfFame() {
    mainContent.textContent = " ";

    var h1El = document.createElement("h1");
    var h2El = document.createElement("h2");
    var formEl = document.createElement("form");
    var inputEl = document.createElement("input");
    var submitEl = document.createElement("button");

    h1El.textContent = "All done!"
    h2El.textContent = "Your final score is " + userScore;
    inputEl.setAttribute("placeholder", "Initials");
    
    submitEl.setAttribute("type", "button");
    submitEl.setAttribute("class", "btn btn-info");
    submitEl.textContent = "Submit";

    mainContent.appendChild(h1El);
    mainContent.appendChild(h2El);
    h2El.appendChild(formEl);
    formEl.appendChild(inputEl);
    formEl.appendChild(submitEl);
}

letsGoEl.addEventListener("click", function() {
    setCounter();
    createQuiz();
})

