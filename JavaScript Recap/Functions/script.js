function selamlama(msg) {
    console.log(msg)
}
selamlama("selam")
selamlama("merhaba")
selamlama("iyi gunler")


function yasHesapla(dogumyili) {
    return new Date().getFullYear() - dogumyili
}

yasHesapla(1985)

function emeklilik(dogumyili, isim) {
    let yas = yasHesapla(dogumyili)
    let kalansene = 65 - yas
    if (kalansene > 0) {
        console.log(`${isim} emekli olmanıza ${kalansene} yıl kaldı `)
    }else{
        console.log("zaten emekli oldunuz")
    }
}

emeklilik(1990, "mehmet")