const video = document.querySelector('.join-us-video');
const playButton = document.querySelector('.join-us-video-play-button');

function togglePlayPause() {
  video.paused ? video.play() : video.pause();
  playButton.textContent = video.paused ? 'Play' : ' ';
  playButton.style.opacity = video.paused ? 1 : 0;
}

playButton.addEventListener('click', togglePlayPause);
