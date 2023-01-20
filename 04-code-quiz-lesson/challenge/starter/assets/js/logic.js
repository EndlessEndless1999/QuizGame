const startButton = document.querySelector('button');
const startScreen = document.querySelector('#start-screen');
const questionTitle = document.querySelector('question-title');
const questionContainer = document.querySelector('#choices');

let ShuffledArray = [];
let questionNum = 0;

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


    
    var currentQuestion = ShuffledArray[questionNum];

}






init();


startButton.addEventListener('click', onStart);