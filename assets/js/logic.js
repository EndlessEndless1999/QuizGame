const startButton = document.querySelector('button');
const startScreen = document.querySelector('#start-screen');
const questionTitle = document.querySelector('#question-title');
const questionContainer = document.querySelector('#choices');
const myQuestions = document.querySelector('#questions');
const timeDisplay = document.querySelector('#time');
const endGameScreen = document.querySelector('#end-screen');
const formSubmitter = document.querySelector('#submit');
const initialsForm = document.querySelector('#initials');
const finalScore = document.querySelector('#final-score');




let time = 60;
let timeUp = false;

let ShuffledArray = [];
let questionNum = 0;
let optionsNum = 3;

let currentQuestion;
let currentScore = 0;

function init(){
    ShuffledArray = shuffleArr(questions);
    console.log(ShuffledArray);
}

function shuffleArr(Arr){
    for(let i = Arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const tempVal = Arr[i];

        //SWAPPING VALUES
        Arr[i] = Arr[j];
        Arr[j] = tempVal;
    }
    return Arr;
}

function onStart(){
    displayQuestion();
    timer();
}

function displayQuestion() {
    startScreen.classList.add('hide');
    questionContainer.classList.remove('hide');
    myQuestions.classList.remove('hide');

    currentQuestion = ShuffledArray[questionNum];

    questionTitle.textContent = currentQuestion.Question;


    var answerIndex = 0;
    
    while(optionsNum > 0){
        var newLi = document.createElement('li');
        var newButton = document.createElement('button');

        newLi.setAttribute('questionNum', answerIndex);
        newButton.setAttribute('buttonNum', answerIndex);

        switchExpression = newLi.getAttribute('questionNum');

        buttonAttribute = newButton.getAttribute('buttonNum');

        switch(switchExpression){
            case '0':
                newLi.textContent = currentQuestion.Answer1;
                console.log('this is question 1');
                break;
            case '1':
                newLi.textContent = currentQuestion.Answer2;
                console.log('this is question 2');
                break;
            case '2':
                newLi.textContent = currentQuestion.Answer3;
                console.log('this is question 3');
        }

        answerIndex++;
        newButton.textContent = 'Confirm';
        newLi.appendChild(newButton);
        questionContainer.appendChild(newLi);
        newButton.addEventListener('click', onAnswerClick);
        optionsNum--;
    }
    optionsNum = 3;
    answerIndex = 0;
    





}

function removeCurrentQuestions(){
    while(questionContainer.lastElementChild){
        questionContainer.removeChild(questionContainer.lastElementChild);
    }
    displayQuestion();
}

function onAnswerClick(){
    event.preventDefault();
    var button = event.target.getAttribute('buttonNum');
    
    if(button === currentQuestion.Correct){
        currentScore += 1;
    }else{
        time -= 10;
    }
    questionNum += 1;
    removeCurrentQuestions();
}


function timer() {
    var timer = setInterval( function () { 
        timeDisplay.innerHTML = time;
        time --;

        if (time <= 0){
            endGame();
        }


    }, 1000);
}

function endGame() {
    removeCurrentQuestions();

    endGameScreen.classList.remove('hide');
    questionContainer.classList.add('hide');
    myQuestions.classList.add('hide');

    finalScore.textContent = currentScore;

    formSubmitter.addEventListener('click', submitScore);
}

function submitScore() {
    currentUser = initialsForm.value;
    storeScore();
}


init();


startButton.addEventListener('click', onStart);