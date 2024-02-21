//function constructor
function KisiES5(ad, meslek, dogumYili) {
    this.ad = ad
    this.meslek = meslek
    this.dogumYili = dogumYili
    this.yasHesapla = function () {
        let tarih = new Date().getFullYear()
        return tarih - dogumYili
    }
}

let bedo = new KisiES5("Bedirhan Sığırcı", "Ogrenci", 2001)
let murat = new KisiES5("Murat Peker", "IT", 2001)

//class

class kisiES6 {
    constructor(ad, meslek, dogumYili) {
        this.ad = ad
        this.meslek = meslek
        this.dogumYili = dogumYili
    }

    yasHesapla() {
        let tarih = new Date().getFullYear()
        return tarih - this.dogumYili
    }
}

let kisi1 = new kisiES6("çınar", "ogrenci", 2012)
let kisi2 = new kisiES6("ada", "ogrenci", 2019)

console.log(kisi1.yasHesapla())
console.log(kisi2.yasHesapla())
console.log(bedo.yasHesapla())
console.log(murat.yasHesapla())
