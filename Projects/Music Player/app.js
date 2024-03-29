const container = document.querySelector(".container")
const image = document.querySelector("#music-image")
const title = document.querySelector("#music-details .title")
const singer = document.querySelector("#music-details .singer")
const prev = document.querySelector("#controls #prev")
const play = document.querySelector("#controls #play")
const next = document.querySelector("#controls #next")
const duration = document.querySelector("#duration")
const currentTime = document.querySelector("#current-time")
const progressBar = document.querySelector("#progress-bar")
const volume = document.querySelector("#volume")
const volumeBar = document.querySelector("#volume-bar")

const player = new MusicPlayer(musicList)

let music = player.getMusic()

window.addEventListener("load", () => {
    let music = player.getMusic()
    displayMusic(music)
})

function displayMusic(music) {
    title.innerText = music.getName()
    singer.innerText = music.singer
    image.src = "img/" + music.img
    audio.src = "mp3/" + music.file
}
play.addEventListener("click", () => {
    const isMusicPlay = container.classList.contains("playing")
    isMusicPlay ? pauseMusic() : playMusic()
})

prev.addEventListener("click", () => {
    prevMusic()
})

next.addEventListener("click", () => {
    nextMusic()
})

function prevMusic() {
    player.prev()
    let music = player.getMusic()
    displayMusic(music)
    playMusic()

}
function nextMusic() {
    player.next()
    let music = player.getMusic()
    displayMusic(music)
    playMusic()
}

function pauseMusic() {
    container.classList.remove("playing")
    play.classList = "fa-solid fa-play"
    audio.pause()
}

function playMusic() {
    container.classList.add("playing")
    play.classList = "fa-solid fa-pause"
    audio.play()
}
const calcualteTime = (toplamSaniye) => {
    const dakika = Math.floor(toplamSaniye / 60)
    const saniye = Math.floor(toplamSaniye % 60)
    const guncellenenSaniye = saniye < 10 ? `0${saniye}` : `${saniye}`
    const sonuc = `${dakika}:${guncellenenSaniye}`
    return sonuc
}
audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calcualteTime(audio.duration)
    progressBar.max = Math.floor(audio.duration)
})
audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime)
    currentTime.textContent = calcualteTime(progressBar.value)
})

progressBar.addEventListener("input", () => {
    currentTime.textContent = calcualteTime(progressBar.value)
    audio.currentTime = progressBar.value
})
let sesDurumu = "sesli"

volumeBar.addEventListener("input", (e) => {
    const value = e.target.value
    audio.volume = value/100
    if(value == 0){
        audio.muted= true
        sesDurumu = "sessiz"
        volume.classList = "fa-solid fa-volume-xmark"
    }else{
        audio.muted = false
        sesDurumu = "sesli"
        volume.classList = "fa-solid fa-volume-high"
    }
})

volume.addEventListener("click", () => {
    if(sesDurumu === "sesli"){
        audio.muted= true
        sesDurumu = "sessiz"
        volume.classList = "fa-solid fa-volume-xmark"
        volumeBar.value = 0
    }else{
        audio.muted = false
        sesDurumu = "sesli"
        volume.classList = "fa-solid fa-volume-high"
        volumeBar.value = 100
    }
})