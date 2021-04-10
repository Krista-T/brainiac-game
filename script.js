// ALL GLOBAL VARIABLES & Flags
let points = 0;
let likes = 10;
let rowNumber = 0;
let rowTime;
let counter = 60;
let time = 0;
let muted = false;
let gameEnded = false;

// Short hand for html elements
// rows:
let row
let row1 = document.querySelector('#row1');
let row2 = document.querySelector('#row2');
let row3 = document.querySelector('#row3');
let row4 = document.querySelector('#row4');
let row5 = document.querySelector('#row5');
let row6 = document.querySelector('#row6');
let row7 = document.querySelector('#row7');
let row8 = document.querySelector('#row8');
let row9 = document.querySelector('#row9');
let row10 = document.querySelector('#row10');

let hearts = document.querySelector('#hearts' + likes);
let like = document.querySelector('#flying_like');
let empty1 = document.querySelector('#flying_empty1');
let empty2 = document.querySelector('#flying_empty2');

let gamebackground = document.querySelector('#game_background');
let levelcomplete = document.querySelector('#level_complete');
let btn_replay = document.querySelector('#btn_replay');
let timer = document.querySelector('#time_board');
let startScreen = document.querySelector('#start')
let start_msg = document.querySelector('#start_msg');
let message = document.querySelector('#message');
let closeYellow = document.querySelector('#close_yellow');
let closePurple = document.querySelector('#close_purple');
let boy = document.querySelector('.character');
let analogClock = document.querySelector('#clock');
let scoreBoard = document.querySelector('#game_ui');
let settingBtn = document.querySelector('#settings_Btn')
let settingScreen = document.querySelector('#settings_screen');
let closeSettingBtn = document.querySelector('#close_Btn');
let musicBtn = document.querySelector('#music');
let gameSountBtn = document.querySelector('#sounds');
let gameOverLogo = document.querySelector('#gameover_logo');
let gameOverScreen = document.querySelector('#gameover_screen');
let gameLogo = document.querySelector('#logo')
let playBtn = document.querySelector('#btn_play')


// let click = SNIMI KLIK SOUND
let backgroundMusic = document.querySelector('#backgroundMusic');
let voice = document.querySelector('#voice');
let winSound = document.querySelector('#winSound');
let loseSound = document.querySelector('#loseSound');
let levelSound = document.querySelector('#levelSound');
let gameOverSound = document.querySelector('#gameOverSound');

//ELEMENTS NOT DISPLAYED
gamebackground.style.display = 'none';
levelcomplete.style.display = 'none';
btn_replay.style.display = 'none';
closeYellow.style.display = 'none';
closePurple.style.display = 'none';
boy.style.display = 'none';
analogClock.style.display = 'none';
scoreBoard.style.display = 'none';
settingScreen.style.display = 'none';
closeSettingBtn.style.display = 'none';
musicBtn.style.display = 'none';
gameSountBtn.style.display = 'none';
row1.style.display = 'none';
row2.style.display = 'none';
row3.style.display = 'none';
row4.style.display = 'none';
row5.style.display = 'none';
row6.style.display = 'none';
row7.style.display = 'none';
row8.style.display = 'none';
row9.style.display = 'none';
row10.style.display = 'none';
message.style.display = 'none';
gameOverLogo.style.display = 'none';
gameOverScreen.style.display = 'none';


//START SCREEN
window.addEventListener('load', showStartScreen);

function showStartScreen() {
    console.log('Start screen displayed');
    gameLogo.classList.add('logo_swirl');
    settingBtn.style.display = 'none';
    playBtn.classList.add('pulsate');
    playBtn.addEventListener('click', start);
}


//START GAME
function start() {
    console.log('start works');

    if (!muted) {
        voice.play();
    }
    setTimeout(function () {
        backgroundMusic.play();
    }, 1800);

    playBtn.removeEventListener('click', start);
    // document.querySelector('#btn_replay').removeEventListener('click', start);
    startScreen.style.display = 'none';
    document.querySelector('#gameover').style.display = 'none';
    settingBtn.style.display = 'block';
    settingBtn.classList.add('pulsate');
    gamebackground.style.display = 'block';
    analogClock.style.display = 'block';
    boy.style.display = 'block';
    scoreBoard.style.display = 'block';
    start_msg.classList.add('appear2');
    start_msg.addEventListener('animationend', rowAppear);
}


//SETTINGS SCREEN
function showSettings() {
    // settingBtn.removeEventListener('click', showSettings);
    settingScreen.style.display = 'block';
    closeSettingBtn.style.display = 'block';
    musicBtn.style.display = 'block';
    gameSountBtn.style.display = 'block';
    closeSettingBtn.classList.add('pulsate');
    musicBtn.classList.add('pulsate');
    gameSountBtn.classList.add('pulsate');
    let row = document.querySelector('#row' + rowNumber);
    row.classList.add('paused');
    hearts.classList.add('paused');
    like.classList.add('paused');
    empty1.classList.add('paused');
    empty2.classList.add('paused');
    // clearInterval(time);

    //music on-off
    musicBtn.addEventListener('click', toggleMusic);
    //sounds on-off
    gameSountBtn.addEventListener('click', toggleSounds);
    closeSettingBtn.addEventListener('click', closeSettings);
}

//CLOSE SETTINGS

function closeSettings() {
    closeSettingBtn.removeEventListener('click', closeSettings);
    console.log('closeSettings works');
    let row = document.querySelector('#row' + rowNumber);
    row.classList.remove('paused');
    hearts.classList.remove('paused');
    like.classList.add('paused');
    empty1.classList.remove('paused');
    empty2.classList.remove('paused');
    //time?
    // clearInterval(time);
    settingScreen.style.display = 'none';
    closeSettingBtn.style.display = 'none';
    musicBtn.style.display = 'none';
    gameSountBtn.style.display = 'none';

}

//TOGGLE MUSIC
function toggleMusic() {
    console.log('toggle music');
    if (backgroundMusic.muted == true) {
        backgroundMusic.muted = false;
    } else {
        backgroundMusic.muted = true;
    }
}

//TOGGLE SOUNDS
function toggleSounds() {
    console.log('sound toggled');
    if (muted == false) {
        muted = true;
    } else {
        muted = false;
    }
}

// TIMER
function gameCounter() {
    if (counter === 0) {
        timer.textContent = "Time is up!";
        gameOver();
    } else {
        counter--;
        timer.textContent = "Time: " + counter;
    }
}


// ROWS
function rowAppear() {
    // console.log('rows appear!');
    // console.log('no points: ' + points);
    if (rowNumber === 0) {
        time = setInterval(gameCounter, 1000);
        start_msg.classList.remove('appear2');
        start_msg.style.display = 'none';
        start_msg.removeEventListener('animationend', rowAppear);
        settingBtn.addEventListener('click', showSettings);

    } else {
        // console.log('row no > 1')
        row.classList.remove('appear');
        row.style.display = 'none';
    }

    rowNumber++;
    // console.log('row no ' + rowNumber)
    row = document.querySelector('#row' + rowNumber)
    row.style.display = 'flex';
    row.querySelector('.right').addEventListener('click', addPoints);
    row.querySelector('.wrong1').addEventListener('click', removeLike);
    row.querySelector('.wrong2').addEventListener('click', removeLike);

    row.querySelector('.right').addEventListener('click', rowLarger);
    row.querySelector('.wrong1').addEventListener('click', rowLarger);
    row.querySelector('.wrong2').addEventListener('click', rowLarger);

    rowTime = setTimeout(rowDissapear, 3000);
}

function rowLarger() {
    row.querySelector('.right').removeEventListener('click', rowLarger);
    row.querySelector('.wrong1').removeEventListener('click', rowLarger);
    row.querySelector('.wrong2').removeEventListener('click', rowLarger);

    row.querySelector('.right').removeEventListener('click', addPoints);
    row.querySelector('.wrong1').removeEventListener('click', removeLike);
    row.querySelector('.wrong2').removeEventListener('click', removeLike);

    clearTimeout(rowTime);
    rowTime = -1;
    row.classList.add('larger');
    row.removeEventListener('click', rowLarger);
    row.addEventListener('animationend', rowDissapear);
}

function rowDissapear() {
    row.classList.remove('larger');

    row.querySelector('.right').removeEventListener('click', rowLarger);
    row.querySelector('.wrong1').removeEventListener('click', rowLarger);
    row.querySelector('.wrong2').removeEventListener('click', rowLarger);

    row.querySelector('.right').removeEventListener('click', addPoints);
    row.querySelector('.wrong1').removeEventListener('click', removeLike);
    row.querySelector('.wrong2').removeEventListener('click', removeLike);


    clearTimeout(rowTime);
    rowTime = -1;

    row.classList.add('appear');

      row.classList.remove('larger');
    if (rowNumber < 10) {
        row.addEventListener('animationend', rowAppear);
    } else if (points === 10) {
        console.log('levelComplete');
        gameOver();
    } else if (points === 0) {
        gameOver();
    } else {
        row.addEventListener('animationend', write);
    }
}

//LIKES(hearts) AND POINTS
function removeLike() {
    if (gameEnded == false) {
        let hearts = document.querySelector('#hearts' + likes);
        hearts.classList.remove('hearts_sprite');
        hearts.classList.add('empty_heart_sprite');
        likes--;
        console.log("You have " + likes + " lives");
        if (!muted) {
            loseSound.play();
        }
    } else {
        gameOver();
    }
}

function addPoints() {
    points++;
    document.querySelector('#score_board').textContent = "score: " + points + " /10";
    if (!muted) {
        winSound.play();
    }

}

// SECOND PART: Click on flying elements
function write() {
    console.log('Hello loser!');
    message.style.display = 'block';
    message.classList.add('appear2');
    message.addEventListener('animationend', fly);
}

function fly() {
    if (gameEnded === false) {
        let number = Math.floor(Math.random() * 6 + 1);
        like.classList.add('position' + number);
        console.log(number);
        message.removeEventListener('animationEnd', fly);
        empty1.classList.add('fly', 'speed2');
        empty1.addEventListener('click', emptyClicked);
        empty2.classList.add('fly', 'speed2');
        empty2.addEventListener('click', emptyClicked);
        like.classList.add('fly', 'speed2');
        like.addEventListener('click', heartClicked);
        like.classList.remove('.flying_like_sprite');
        empty1.classList.remove('.flying_empty_sprite1');
        empty2.classList.remove('.flying_empty_sprite2');
    }
}

//win clicked
function heartClicked() {
    if (gameEnded == false) {
        likes++;
        console.log(likes);
        if (!muted) {
            winSound.play();
        }
        let hearts = document.querySelector('#hearts' + likes);
        hearts.classList.remove('empty_heart_sprite');
        hearts.classList.add('hearts_sprite');
        like.classList.remove('position1');
        like.classList.remove('position2');
        like.classList.remove('position3');
        like.classList.remove('position4');
        like.classList.remove('position5');
        like.classList.remove('position6');
        like.classList.add('zoom_out');
        like.removeEventListener('click', heartClicked);
        like.addEventListener('animationend', flyRestart);
    }

    if (likes === 10) {
        console.log('game over');
        gameOver();
    }
}

//empty clicked
function emptyClicked() {
    if (gameEnded === false) {

        let empty1 = this;
        let empty2 = this;
        if (!muted) {
            loseSound.play();
        }

        let hearts = document.querySelector('#hearts' + likes);
        hearts.classList.remove('hearts_sprite');
        hearts.classList.add('empty_heart_sprite');
        likes--;
        empty1.classList.add('zoom_out');
        empty1.removeEventListener('click', emptyClicked);
        empty1.addEventListener('animationend', flyRestart);
    }
    if (likes === 0) {
        console.log('game over');
        gameOver();
    }
}

function flyRestart() {
    console.log(this);
    this.removeEventListener('animationend', flyRestart);
    this.classList.remove('zoom_out');
    this.addEventListener('click', fly);
    like.removeEventListener('animationend', flyRestart);
    like.classList.remove('zoom_out');
    like.addEventListener('click', fly);
}

//GAME OVER
function gameOver() {
    row.classList.remove('appear');
    row.style.display = 'none';

    document.querySelector('#row' + rowNumber).classList.add('paused');
    document.querySelector('#hearts' + likes).classList.add('paused');
    document.querySelector('#score_board').classList.add('paused');
    document.querySelector('#energy_board').classList.add('paused');
    message.classList.add('paused');
    like.classList.add('paused');
    document.querySelector('#flying_empty1').classList.add('paused');
    document.querySelector('#flying_empty2').classList.add('paused');
    hearts.classList.add('paused');

    gamebackground.classList.add('appear');
    gameEnded = true;
    clearInterval(time);
    time = -1;
    counter = 60;
    likes = 10;
    rowNumber = 0;
    clearTimeout(rowTime)
    rowTime = -1;
    if (points === 10) {
        // gamebackground.addEventListener('animationend', levelComplete);
        gamebackground.addEventListener('animationend', levelComplete);
    } else {
        gamebackground.addEventListener('animationend', replayGame);
    }

}

//LEVEL COMPLETE
function levelComplete() {
    gamebackground.removeEventListener('animationend', levelComplete);
    gamebackground.classList.remove('appear');
    backgroundMusic.pause();
    if (!muted) {
        levelSound.play();
    }
    scoreBoard.style.display = 'none';
    settingBtn.style.display = 'none';
    boy.style.display = 'none';
    document.querySelector('#level_complete').style.display = 'block';
    closeYellow.style.display = 'block';
    closeYellow.classList.add('pulsate');
    closeYellow.addEventListener('click', backToStart);
}

function replayGame() {
    // backToStart()
    gameEnded = false;
    points = 0;
    likes = 10;

    gamebackground.removeEventListener('animationend', replayGame);
    gamebackground.classList.remove('appear');

    backgroundMusic.pause();
    if (!muted) {
        gameOverSound.play();
    }


    document.querySelector('#flying_empty1').classList.remove('paused');
    document.querySelector('#flying_empty2').classList.remove('paused');
    hearts.classList.remove('paused');
    scoreBoard.style.display = 'none';
    settingBtn.style.display = 'none';
    boy.style.display = 'none';
    like.style.display = 'none';
    empty1.style.display = 'none';
    empty2.style.display = 'none';
    document.querySelector('#gameover').style.display = 'block';
    gameOverLogo.style.display = 'block';
    gameOverScreen.style.display = 'block';
    closePurple.style.display = 'block';
    closePurple.classList.add('pulsate');
    btn_replay.style.display = 'block';
    gameover.classList.add('shake');
    gameOverLogo.classList.add('logo_swirl');
    btn_replay.classList.add('pulsate');
    closePurple.addEventListener('click', backToStart);
    btn_replay.addEventListener('click', replay);
}

function replay() {
    console.log('start 2 works');
alert('I don´t work!');
    // if (!muted) {
    //     voice.play();
    // }
    // setTimeout(function () {
    //     backgroundMusic.play();
    // }, 1800);

    // document.querySelector('#gameover').style.display = 'none';
    // btn_replay.removeEventListener('click', replay);
    // settingBtn.style.display = 'block';
    // settingBtn.classList.add('pulsate');
    // gamebackground.style.display = 'block';
    // analogClock.style.display = 'block';
    // boy.style.display = 'block';
    // scoreBoard.style.display = 'block';
    // start_msg.style.display = 'block';
    // start_msg.classList.add('appear2');
    // start_msg.addEventListener('animationend', rowAppear);
}

function backToStart() {
    window.location.reload();
}