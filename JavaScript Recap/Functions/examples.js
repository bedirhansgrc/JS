function repeat(msg, times) {
    for (let i = 0; i < times; i++) {
        console.log(msg)
    }
}

repeat("aloha", 3)

function dikdortgen(a, b) {
    let cevre = (a + b) * 2
    let alan = (a * b)
    console.log("alanı :", alan, "cevresi :", cevre)
}

dikdortgen(10, 20)

function flip() {
    let random = Math.random() //0-1
    if (random < 0.5) {
        console.log("yazı")
    } else {
        console.log("tura")
    }
}

flip()

function ebob(sayi) {
    let bolenler = []
    for (let i = 0; i <= sayi; i++) {
        if (sayi % i == 0) {
            bolenler.push(i)
        }
    }
    console.log(bolenler)
}

ebob(15)

function toplam() {
    let sonuc = 0
    for(let i = 0; i<arguments.length; i++){
        sonuc += arguments[i]
    }
    console.log(sonuc)
}

toplam(1,5,6,7,8)