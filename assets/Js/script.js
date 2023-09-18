//Handle for the title
var headerEl = document.querySelector(".webtitle");
headerEl.textContent = "Coding Quiz Challenge";

//Handle for the timer component
var timerEl = document.querySelector(".timer");
timerEl.textContent = "Timer: 0";

//Handle for the direction text
var directionEl = document.querySelector(".directions");
var texts = "Try to answer the following code-related questions within the time limit. \n  " + 
             " Keep in mind that incorrect answers will penalize your score/time"
             + "\nby ten seconds!" ;
           
directionEl.textContent = texts;


//Handle on button element
var startBtn = document.querySelector(".start");
startBtn.textContent = "Start Quiz";

//Handle on button container
var startContainer = document.querySelector(".start-container");
headerEl.style.display = "none";
directionEl.style.display = "none";
startContainer.style.display  = "none";

//Handle on Quiz question header
var questionEl = document.querySelector(".question");
//handle on answer buttons
var answer1El = document.querySelector(".answer1");
var answer2El = document.querySelector(".answer2");
var answer3El = document.querySelector(".answer3");
var answer4El = document.querySelector(".answer4");

var question1 = {
    name: "When do javascripts exectute?",
        answer1: "After designated time",
        answer2: "After user interaction",
        answer3: "Before page is loaded",
        answer4: "Immediately"

};

questionEl.textContent = question1.name;