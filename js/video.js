let video = document.querySelector('video')
const volumeSpan = document.getElementById('volume')

function updateVolumeSpan () {
  volumeSpan.innerHTML = video.volume * 100 + '%'
}

function logVideoPlaybackRate () {
  console.log(video.playbackRate)
}

window.addEventListener('load', function () {
  video = document.querySelector('#myVideo')
})

document.querySelector('#play').addEventListener('click', function () {
  video.play()
  updateVolumeSpan()
})

document.querySelector('#pause').addEventListener('click', function () {
  video.pause()
})

document.querySelector('#volumeSlider').addEventListener('change', function () {
  video.volume = this.value / 100
  updateVolumeSpan()
})

document.querySelector('#faster').addEventListener('click', function () {
  video.playbackRate *= 1.1
  logVideoPlaybackRate()
})

document.querySelector('#slower').addEventListener('click', function () {
  video.playbackRate *= 0.9
  logVideoPlaybackRate()
})

document.querySelector('#skip').addEventListener('click', function () {
  video.currentTime += 5
  video.play()
  console.log(video.currentTime)
})
