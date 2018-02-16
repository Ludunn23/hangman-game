function game(){

    prompt('Press any key to get started!');


    window.onload = function() {
        document.getElementById("music").play();
    }
    
    // list of different games.
    
    var gameWordArr = ['pacman', 'donkeykong', 'galaga', 'frogger',
        'centipede', 'defender', 'contra', 'tetris', 'gauntlet']
    
    //  choose a random word.
    var gameType = gameWordArr[Math.floor(Math.random() * gameWordArr.length)];
    console.log(gameType);
    
    // global variables 
    
    var joinAnswerArray;
    var wrongAnswerCount = 12;
    var answerArray = [];
    var gameTypeArray = [];
    
    // filling the answer array with underscores 
    // number of underscores correlates to the randomly selected word 
    
    function startUp() {
        for (var i = 0; i < gameType.length; i++) {
            answerArray[i] = "_";
        }

        gameTypeArray = gameType.split("");
        console.log("gameTypeArray", gameTypeArray);
        

    
        // putting in a string
        joinAnswerArray = answerArray.join(" ");
    
        console.log('Join answer -> ', joinAnswerArray);
        document.getElementById("answer").innerHTML = joinAnswerArray;


    }
    
    
    startUp();
    document.onkeyup = function (event) {

        if (gameTypeArray.indexOf(event.key) !==-1) {
            for (var i = 0; i <gameTypeArray.length; i++){
                if (event.key === gameType[i]){
                    answerArray[i] = event.key;
                    document.getElementById("answer").innerHTML = answerArray.join(" ");
                }
            };
            console.log("is in array");
        } else {
            wrongAnswerCount--;
            document.getElementById("remain").innerHTML = (wrongAnswerCount + " guesses remain");
            console.log("is not in array");
        }
        console.log(gameTypeArray);
        console.log(event.key);
    };
    // startUp()
}

game();