let playList = ["audio-file.mp3","aud2.mp3", "aud3.mp3", "aud4.mp3", "aud5.mp3"];

let song = document.getElementById("song");
let progress = document.getElementById("progress");
let ctrlIcon = document.querySelector(".ctrlIcon i");
let audioSong = document.getElementById("song");

let count = 0;

let prevIcon = document.getElementById("prev");

prevIcon.addEventListener("click", function () {
  // playList.forEach((song) => {

  // });
  if (count > 0) {
    count--;
    audioSong.src = `files/${playList[count]}`;
    audioSong.play();
}else{
    count=playList.length-1
}
});

let nextIcon = document.getElementById("next");

  nextIcon.addEventListener("click", function () {
    if (count < playList.length - 1) {
        count++;
        audioSong.src = `files/${playList[count]}`;
        audioSong.play();
    }else{
        count=0;
    }
    console.log(count,playList[count])
  });
console.log(count);
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);

  progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  };
}
