const startButton = document.querySelector('button');
const questionTitle = document.querySelector('question-title');
const questionContainer = document.querySelector('choices');

let ShuffledArray = [];

function init(){
    ShuffledArray = shuffleArr(questions);
    console.log(ShuffledArray);
}


function onStart(){
    
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





init();


startButton.addEventListener('click', onStart);