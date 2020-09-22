
var countEl = document.querySelector("#count");
var letsGoEl = document.querySelector("#letsGo");
var mainContent = document.querySelector("#maincontent");
var submitInital = document.querySelector("#initials");

let count = 5;

// declaring question objects
const qOne = {
    text:"What makes you think ARRAY?", 
    correctAnswer: "Square brackets",
    possibleIncorrectAnswers: ["Parentheses", "A dollar sign", "Double vertical bars"],
};
// const qTwo = {
//     text:"",
//     correctAnswer: ,
//     possibleIncorrectAnswers: [],
// }; 
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
// const quizQs = [qOne, qTwo, qThree, qFour, qFive];



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

// //defining function to create questions
// function createQuiz() {
// }

function createQuestions() {
    mainContent.textContent = " ";
    mainContent.setAttribute("class", "text-left");
    
    var questionEl = document.createElement("h2");

    questionEl.textContent = qOne.text;

    mainContent.appendChild(questionEl);
}

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
    createQuestions();
})

