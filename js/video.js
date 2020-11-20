let video = document.querySelector('video')
const volumeSpan = document.getElementById('volume')

function updateVolumeSpan () {
  volumeSpan.innerHTML = video.volume * 100 + '%'
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
