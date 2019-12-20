window.addEventListener('keydown', (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const soundDiv = document.querySelector(`div[data-key="${event.keyCode}"]`)

  if (!audio) return
  soundDiv.classList.add('playing') //add playing animation class
  audio.currentTime = 0 // rewinds the audio to start positon
  audio.play()

  setTimeout(() => {
    soundDiv.classList.remove('playing')
  }, 150)
})
