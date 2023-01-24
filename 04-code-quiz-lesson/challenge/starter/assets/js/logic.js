const startButton = document.querySelector('button');
const startScreen = document.querySelector('#start-screen');
const questionTitle = document.querySelector('#question-title');
const questionContainer = document.querySelector('#choices');
const myQuestions = document.querySelector('#questions');

let ShuffledArray = [];
let questionNum = 0;
let optionsNum = 3;

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
}

function displayQuestion() {
    startScreen.classList.add('hide');
    questionContainer.classList.remove('hide');
    myQuestions.classList.remove('hide');
    var currentQuestion = ShuffledArray[questionNum];

    var answerIndex = 0;
    
    while(optionsNum > 0){
        var newLi = document.createElement('li');
        var newButton = document.createElement('button');
        newLi.setAttribute('questionNum', answerIndex);
        newButton.setAttribute('buttonNum', answerIndex);
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

function onAnswerClick(){
    console.log('Answer Chosen');
}




init();


startButton.addEventListener('click', onStart);