
var countEl = document.querySelector("#count");
var letsGoEl = document.querySelector("#letsGo");
var mainContent = document.querySelector("#maincontent");
var messageEl = document.querySelector("#messagecontent");
var submitInital = document.querySelector("#initials");

var questionEl;
var buttonEl;
let count = 75;

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
const qFour = {
    text:"What can help you debug your JavaScript code?",
    correctAnswer: ["all of these"],
    possibleIncorrectAnswers: ["coffee", "console.log", "deep breaths"],
};
const qFive = {
    text:"What makes you think STRING?",
    correctAnswer: ["Quotations"],
    possibleIncorrectAnswers: ["Parentheses", "A dollar sign", "Double vertical bars"],
}; 

// declaring question object array
const quizQs = [qOne, qTwo, qThree, qFour, qFive];

let currentQuestionIndex = 0; //global variable 
let yourScore = "";

// defining set counter function
function setCounter() {
    var timerInterval = setInterval(function() {
        count--;
        countEl.textContent = count;

        if(count === 0) {
            clearInterval(timerInterval);
            hallOfFame();
        }
        if(currentQuestionIndex > 4) {
            clearInterval(timerInterval);
        }
    }, 1000);
}
// defining a function to create each "screen" of question/button combination
function createQuiz() {
    let currentQuestion = quizQs[currentQuestionIndex]; 

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
                // to display Wrong! & deduct 15 seconds & move to next question 
                setTimeout(function() {messageEl.textContent= "Wrong!"});
                count = (count-15);
            };
        })
    });  
}

function loopEr() {
    if (currentQuestionIndex < 5) {
        createQuiz(currentQuestionIndex);
    } else {
        hallOfFame();
    };      
}



// defining function to create enter initials landing page
function hallOfFame() {
    mainContent.textContent = " ";
    messageEl.textContent = " ";
    
    var yourScore = count.valueOf;
    var h1El = document.createElement("h1");
    var h2El = document.createElement("h2");
    var formEl = document.createElement("form");
    var inputEl = document.createElement("input");
    var submitEl = document.createElement("button");

    h1El.textContent = "All done!"
    h2El.textContent = "Your final score is " + yourScore;
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

//binding Start Quiz button with click event listener 

letsGoEl.addEventListener("click", function() {
    setCounter();
    createQuiz();
})













//___________________________________________________________

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