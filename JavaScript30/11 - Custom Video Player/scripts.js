const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
let changingSliders = false;

function togglePlay(){
    if(video.paused){
        video.play()
        updateProgress()
    }else{
        video.pause()
    }
    toggle.textContent = video.paused ? '►' : '❚ ❚';
}

function skipTime () {
    video.currentTime += parseFloat(this.dataset.skip)
}

function sliders (){
    if(changingSliders){
        video[this.name] = this.value
    }
}

function updateProgress (){
    progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%` 
    console.log('hello')
}


toggle.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)
video.addEventListener('timeupdate', updateProgress)
window.addEventListener('keypress', (e)=>{
    if(e.which == 32){
        togglePlay()
    }
}) 

skipButtons.forEach(skip => {
    skip.addEventListener('click', skipTime)
})

ranges.forEach(slide => {
    slide.addEventListener('mousedown', () => changingSliders = true)
    slide.addEventListener('mousemove', sliders)
    slide.addEventListener('mouseup', () => changingSliders = false)
})