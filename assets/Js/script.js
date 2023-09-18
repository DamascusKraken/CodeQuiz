var count = 0;
var score = 0;
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

//Handle on button container
var startContainer = document.querySelector(".start-container");

//Handle on button element
var startBtn = document.querySelector(".start");
startBtn.textContent = "Start Quiz";

    //Handle on quiz-container
    var quizContainer = document.querySelector(".quiz-container");
    quizContainer.style.display = "none";
    var endGameEl = document.querySelector(".end-game");
    endGameEl.style.display = "none";

startBtn.addEventListener("click", function() {
    headerEl.style.display = "none";
    directionEl.style.display = "none";
    startContainer.style.display  = "none";
    quizContainer.style.display = "block";

    console.log("start btn pressed");
    // setTimer();
    var timerInterval = setInterval(function() {
        
        secondsLeft--;
        timerEl.textContent = "Timer: " + secondsLeft;
       
       if(secondsLeft <= 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
          highscore();
        }
    
      }, 1000);
    console.log("set timer called");
    quizTime(question1, question2, question3, question4, question5, count);
    console.log("after quiztime");
})

//Handle on Quiz question header
var questionEl = document.querySelector(".question");
//handle on answer buttons
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");

var question1 = {
    name: "When do Javascripts execute?",
        answer1: "After designated time",
        answer2: "After user interaction",
        answer3: "Before page is loaded",
        answer4: "Immediately",
        


};
var question2 = {
    name: "How many scripts can you have in a document?",
        answer1: "Unlimited",
        answer2: "Infinite",
        answer3: "Endless",
        answer4: "All of the Above",
        //correct: question2.answer4
};
var question3 = {
    name: "Is Javascript case sensitive?",
        answer1: "Case by Case Scenario",
        answer2: "Depends on what brower",
        answer3: "Yes",
        answer4: "No",
       // correct: question3.answer3

};
var question4 = {
    name: "How are single line comments started?",
        answer1: "//",
        answer2: "\\\\",
        answer3: "/*",
        answer4: "None of the Above",
        //correct: question4.answer1

};
var question5 = {
    name: "What are variables?",
        answer1: "a value that can change",
        answer2: "\"containers\" for storing information",
        answer3: "A symbol representing a number",
        answer4: "factor in a scientific experiment",
        //correct: question5.answer2

};
var secondsLeft = 75;
function quizTime (){
    var quizContent= [question1, question2, question3, question4, question5];
    
    questionEl.textContent = quizContent[count].name;
    
    answer1El.textContent = "1.  " + quizContent[count].answer1; 
    answer2El.textContent = "2.  " + quizContent[count].answer2
    answer3El.textContent = "3.  " + quizContent[count].answer3;
    answer4El.textContent = "4.  " + quizContent[count].answer4;
    }
    var answer1BtnEl = document.querySelector("#answer1");
    answer1BtnEl.addEventListener("click",function(){
        if (count > 3){
            score = secondsLeft;
            secondsLeft = 0;
        }
        var userInput = this.getAttribute("id");
        validate(userInput,count);
        count++;
        quizTime(question1, question2, question3, question4, question5, count);
    });

    var answer2BtnEl = document.querySelector("#answer2");
    answer2BtnEl.addEventListener("click",function(){
        if (count > 3){
            score = secondsLeft;
            secondsLeft = 0;
        } 
        var userInput = this.getAttribute("id");
        validate(userInput,count);
        count++;
        quizTime(question1, question2, question3, question4, question5, count);
   
        
    });
    var answer3BtnEl = document.querySelector("#answer3");
    answer3BtnEl.addEventListener("click",function(){
        if (count > 3){
            score = secondsLeft;
            secondsLeft = 0;
        }
        var userInput = this.getAttribute("id");
        validate(userInput,count);
        count++;
        quizTime(question1, question2, question3, question4, question5, count);
    });

    var answer4BtnEl = document.querySelector("#answer4");
    answer4BtnEl.addEventListener("click",function(){
        if (count > 3){
            score = secondsLeft;
            secondsLeft = 0;
            
        }
        var userInput = this.getAttribute("id");
        validate(userInput, count);
        count++;
        quizTime(question1, question2, question3, question4, question5, count);
        
        
    });
    
    function validate(userInput, count){
    var correctAns = ["answer4", "answer4", "answer3", 
        "answer1", "answer2"];
        console.log(correctAns[count]);
        
        if( userInput == correctAns[count] ){
            rightWrongEl.textContent = "Right!";
        }else {
            rightWrongEl.textContent = "Wrong!";
            secondsLeft -= 10;
        }
    }
//handle for the wrong/right display
var rightWrongEl = document.querySelector(".verification");
//Handle for answer container
var answerContainerEl = document.querySelector(".answers");




function highscore(){
    //Handle for highscore display
var finalScore = document.querySelector(".final-score");
//Hanlde for initial entry
var userInitials = document.querySelector(".initials");
    console.log("input highscore!!!");

    timerEl.textContent = "Timer: " + score;
    
    answerContainerEl.style.display = "none";
    rightWrongEl.style.display = "none";
    questionEl.textContent = "All Done!!";
    endGameEl.style.display = "block";
    finalScore.textContent = "Your final score is " + score + ".";
    userInitials.textContent = "Enter Initials:" 
    
}