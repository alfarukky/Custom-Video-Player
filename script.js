const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timeStamp = document.getElementById("timestamp");

//Play and pause video functionality
function toggleVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//change play and pause icon based on video event
function changeUpdatedIcon() {
  if (video.paused) {
    play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
  } else {
    play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
  }
}

//show video time progress
function showVideoProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timeStamp.innerHTML = `${mins}:${secs}`;
}

//
function progressUpdate() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

//Stop video from playing
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//add event Listeners
video.addEventListener("click", toggleVideo);
video.addEventListener("play", changeUpdatedIcon);
video.addEventListener("pause", changeUpdatedIcon);
video.addEventListener("timeupdate", showVideoProgress);
play.addEventListener("click", toggleVideo);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", progressUpdate);
