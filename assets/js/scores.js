var scoresDiv = document.querySelector('#highscores');


let currentUser;

let HighScores = [];

localStorage.setItem('highScores', JSON.stringify(HighScores));


function storeScore() {

    JSON.parse(localStorage.getItem('highScores'));

    const user = new Object();

    user.initials = currentUser;
    user.score = currentScore;

    console.log(user);

    HighScores.push(user);

    console.log(HighScores);

    localStorage.setItem('highScores', JSON.stringify(HighScores));

    displayScores();
}


function retrieveHighScores() {
    var users = JSON.parse(localStorage.getItem('highScores'));

    HighScores = users;

    localStorage.setItem('highScores', JSON.stringify(HighScores));
}


function displayScores() {
    console.log(HighScores);
    for(let i = 0; i > HighScores.length; i++) {
        let initialsLi = document.createElement('li');
        initialsLi.textContent = HighScores[i].initials;

        let scoreLi = document.createElement('li');
        scoreLi.textContent = HighScores[i].score;

        scoresDiv.append(initialsLi);
        scoresDiv.append(scoreLi);


    }
}

displayScores();

