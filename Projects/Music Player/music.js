class Music {
    constructor(title, singer, img, file) {
        this.title = title
        this.singer = singer
        this.img = img
        this.file = file
    }

    getName() {
        return this.title + " - " + this.singer
    }
}
const musicList = [
    new Music("Embarrassed", "Don Toliver", "don.jpg", "don.mp3"),
    new Music("Forget Me Too", "MGK", "mgk.jpg", "mgk.mp3"),
    new Music("Around Me", "Metro Boomin", "metro.jpg", "metro.mp3")
]