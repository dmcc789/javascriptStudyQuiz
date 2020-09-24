
var countEl = document.querySelector("#count");
var letsGoEl = document.querySelector("#letsGo");
var mainContent = document.querySelector("#maincontent");
var messageEl = document.querySelector("#messagecontent");
var submitInital = document.querySelector("#initials");

var questionEl;
var buttonEl;
let count = 15;

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
const qThree = {
    text:"What does DOM stand for?",
    correctAnswer: ["Document Object Model"] ,
    possibleIncorrectAnswers: ["Document Obstacle Model", "Donut Object Model", "Document Object Morsel"],
};
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
const quizQs = [qOne, qTwo, qThree];

let currentQuestionIndex = 0; //global variable 
let currentQuestion = quizQs[currentQuestionIndex]; 


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
    messageEl.textContent = " ";
    mainContent.setAttribute("class", "text-left");
    
    var questionEl = document.createElement("h2");
    mainContent.appendChild(questionEl);
    
    questionEl.textContent = currentQuestion.text;
    
    var ulEl = document.createElement("ul");
    questionEl.appendChild(ulEl);

    var answers = currentQuestion.possibleIncorrectAnswers.concat(currentQuestion.correctAnswer);
    var sortAnswers = answers.sort();

    //creating a button for each answer
    sortAnswers.forEach(i => {
        var liEl = document.createElement("li");
        ulEl.appendChild(liEl);
        var buttonEl = document.createElement("button");
        buttonEl.setAttribute("type", "button");
        buttonEl.setAttribute("class", "btn btn-info");
        buttonEl.setAttribute("id", "answers");
        buttonEl.innerText = i;
        liEl.appendChild(buttonEl);
        buttonEl.addEventListener("click", function() {
            currentQuestionIndex++;
            console.log(currentQuestionIndex);
            loopEr();
            if (this.innerText === currentQuestion.correctAnswer[0]) {
                // to display Correct! & move to next question 
                setTimeout(function() {messageEl.textContent= "Correct!"});
            } else {
                // to display Wrong! & deduct 10 seconds & move to next question 
                setTimeout(function() {messageEl.textContent= "Wrong!"});
                count = (count-5);
            };
        })
    });  
}

function loopEr() {
    if (currentQuestionIndex < 3) {
        createQuiz(currentQuestionIndex);
    } else {
        hallOfFame();
    };      
}
    // for (let i = 0; i < quizQs.length; i++) {
    //     const question = quizQs[i];
    //     createQuestions();
    //     questionEl.textContent = question.text;
    //     createButtons();        
    // }
// function sendMessage() {

// }


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
    messageEl.textContent = " ";
    

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

