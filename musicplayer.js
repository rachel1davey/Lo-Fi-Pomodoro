const playlist = [
    'assets/music/Daydreams-chosic.com_.mp3',
    'assets/music/Double-Rainbow-chosic.com_.mp3',
    'assets/music/Heart-Of-The-Ocean(chosic.com).mp3',
]

let currentTrack = 0;
let isPlaying = false;
const audio = new Audio(playlist[currentTrack]);
const toggleplayingtext = document.getElementById('isplaying')
const playpausebutton = document.getElementById('play-pause')

//auto play next track
audio.addEventListener('ended', nextTrack);

function TogglePlay() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        toggleplayingtext.textContent = ('music is paused!')
    } else {
        audio.play();
        isPlaying = true;
        toggleplayingtext.textContent = ('music is playin!')
    }
}
function nextTrack() {
    audio.pause();
    currentTrack = (currentTrack + 1) % playlist.length;
    audio.src = playlist[currentTrack];
    if (isPlaying) { 
        audio.play();
    }
}

