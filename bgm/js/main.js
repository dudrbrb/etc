// bgm setting

var soundOff = document.getElementById('sound-off');
var soundON = document.getElementById('sound-on');
var bgmPath = 'img/bgm.mp3';
var bgmNowPlaying = false;
var bgm = new Sound('myAudio', bgmPath, 100, true);

window.onload = function() {
    bgm.init();
};


soundOff.addEventListener('click', bgmPlay);
soundON.addEventListener('click', bgmStop);

/**
 * 배경음 플레이
 */
function bgmPlay() {
    if (!bgmNowPlaying) {
        soundOff.style.display = 'none';
        soundON.style.display = 'block';
        bgmNowPlaying = !bgmNowPlaying;
        bgm.startMusic();
    }
}

/**
 * 배경음 일시 정지
 */
function bgmStop() {
    if (bgmNowPlaying) {
        soundON.style.display = 'none';
        soundOff.style.display = 'block';
        bgmNowPlaying = !bgmNowPlaying;
        bgm.pauseMusic();
    }
}
