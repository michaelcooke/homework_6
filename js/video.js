let video = document.querySelector('video')
const volumeSpan = document.getElementById('volume')

window.addEventListener('load', function () {
  video = document.querySelector('#myVideo')
})

document.querySelector('#play').addEventListener('click', function () {
  video.play()
  volumeSpan.innerHTML = video.volume * 100 + '%'
})

document.querySelector('#pause').addEventListener('click', function () {})
