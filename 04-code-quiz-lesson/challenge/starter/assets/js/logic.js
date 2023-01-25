const startButton = document.querySelector('button');
const startScreen = document.querySelector('#start-screen');
const questionTitle = document.querySelector('#question-title');
const questionContainer = document.querySelector('#choices');
const myQuestions = document.querySelector('#questions');

let ShuffledArray = [];
let questionNum = 0;
let optionsNum = 3;

let currentQuestion;

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
    currentQuestion = ShuffledArray[questionNum];

    console.log(currentQuestion);

    var answerIndex = 0;
    
    while(optionsNum > 0){
        var newLi = document.createElement('li');
        var newButton = document.createElement('button');
        newLi.setAttribute('questionNum', answerIndex);
        newButton.setAttribute('buttonNum', answerIndex);

        switchExpression = newLi.getAttribute('questionNum');
        buttonAttribute = newButton.getAttribute('buttonNum');
        console.log(switchExpression);

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

}

function onAnswerClick(){
    event.preventDefault();
    var button = event.target.getAttribute('buttonNum');
    
    if(button === currentQuestion.Correct){
        console.log('Correct!');
    }else{
        console.log('Incorrect!');
    }
    questionNum += 1;
    removeCurrentQuestions();
}




init();


startButton.addEventListener('click', onStart);