const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const stopBtn = document.getElementById('stop-btn');

playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = 'Play';
  }
});

stopBtn.addEventListener('click', () => {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  playPauseBtn.textContent = 'Play';
});