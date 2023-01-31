
let currentUser;

let highScores;

function storeScore() {
    var newUser = localStorage.setItem('user', currentUser);
    var newScore = localStorage.setItem('score', currentScore); 
}


function retrieveHighScores() {
    var users = localStorage.getItem('highScores');

    highScores = users;
}



