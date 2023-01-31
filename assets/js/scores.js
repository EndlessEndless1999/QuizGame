
let currentUser;

let HighScores = [];

localStorage.setItem('highScores', JSON.stringify(HighScores));

function storeScore() {

    JSON.parse(localStorage.getItem('highScores'));

    const user = new Object();

    user.initials = currentUser;
    user.score = currentScore;

    HighScores.push(user);

    console.log(HighScores);
}


function retrieveHighScores() {
    var users = JSON.parse(localStorage.getItem('highScores'));

    HighScores = users;

    localStorage.setItem('highScores', JSON.stringify(HighScores));
}


function displayScores() {
    return;
}



