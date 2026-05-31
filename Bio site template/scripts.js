const banner = `
  o8boooo ,8b.     888  ,d8 888888888 ,8b.       <3
  88booop 88'8o    888_dPY8    '88d   88'8o        
  88b     88PPY8.  8888' 88   '888    88PPY8.      
  88P     8b   \`Y' Y8P   Y8 '88p      8b   \`Y'

  Fantas bio-site template - https://discord.gg/thfFUvrpgu
    `;
    console.log(banner);
const songs = [
    {
        name: "I want a cigarette ~ Grimwell",
        file: "assets/audios/i want a cigarette.mp3"
    },
    {
        name: "Hair ~ $uicideboy$",
        file: "assets/audios/hair.mp3"
    },
    /* To add songs Do this:
    {
        name: "SongName ~ SongAuthor",
        file: "Path/to/song.mp3"
    
    },
    */
];




/* These are the scripts behind the music player and stuff, probably leave these unless you know what your doing */
let currentSong = 0;
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const volumeSlider = document.getElementById("volumeSlider");
const track = document.getElementById("track");
const player = document.querySelector(".music-player");
function loadSong(index) {
    audio.src = songs[index].file;
    console.log(`(LOAD) Loaded ${songs[index].name}`)
    track.innerText = `♪ loaded: ${songs[index].name}`;
}
loadSong(currentSong);
playBtn.onclick = async () => {
    console.log(`(onplayBtnclick) Playing: ${songs[currentSong].name}`)
    try {
        await audio.play();

        track.innerText = `♪ playing: ${songs[currentSong].name}`;

        player.classList.add("playing");
    } catch {
        track.innerText = "audio blocked";
    }
};
pauseBtn.onclick = () => {
    console.log(`(onpauseBtnclick) Paused current song`)
    audio.pause();
    track.innerText = "♪ idle: nothing playing";
    player.classList.remove("playing");
};
nextBtn.onclick = () => {
    currentSong++;
    if (currentSong >= songs.length) {
        currentSong = 0;
    }
    loadSong(currentSong);
    audio.play();
    track.innerText = `♪ playing: ${songs[currentSong].name}`;
    console.log(`(onnextBtnclick) now playing ${songs[currentSong].name}`)
};
prevBtn.onclick = () => {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    loadSong(currentSong);

    audio.play();

    track.innerText = `♪ playing: ${songs[currentSong].name}`;
    console.log(`(onprevBtnclick) now playing ${songs[currentSong].name}`)
};
volumeSlider.oninput = () => {
    audio.volume = volumeSlider.value;
};
audio.volume = 0.5;
audio.onended = () => {
    console.log(`(onSongEnd) now playing ${songs[currentSong].name}`)
    nextBtn.click();
};