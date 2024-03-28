const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")



//event Listeners
// update progress bar
audio.addEventListener('timeupdate',updateProgress);

//click on progress Bar
progressContainer.addEventListener('click', setProgressBar)

//next song
audio.addEventListener('ended',nextSong)


//play
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

//prev
prevBtn.addEventListener('click',prevSong);
//next
nextBtn.addEventListener('click',nextSong);



//sont titles
const songs = ["hey", "summer", "ukulele"];

//keep track of songs
let songIndex = 2;

//initially load song details
loadSong(songs[songIndex]);

// update song details
function loadSong(song) {
  title.innerHTML = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

//play song
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fa").classList.remove("fa-play");
  playBtn.querySelector("i.fa").classList.add("fa-pause");
  audio.play();
}

// pause  Song

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fa").classList.add("fa-play");
  playBtn.querySelector("i.fa").classList.remove("fa-pause");
  audio.pause();
}

// next song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

//prev Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}


//update time
function updateProgress(e){
  const { duration, currentTime} = e.srcElement;

  // console.log(duration,currentTime)
  const progressPercent = (currentTime / duration) * 100;
  // console.log(progressPercent)
  progress.style.width = `${progressPercent}%`
}


//set progress
function setProgressBar(e){
  const width = this.clientWidth;

  console.log(width)
  const clickX = e.offsetX;
  console.log(clickX)

  const duration = audio.duration;
  audio.currentTime= ( clickX/ width) * duration;
}


let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

 

