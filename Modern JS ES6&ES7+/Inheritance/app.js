//Parent

class Kisi {
    constructor(ad, dogumYili) {
        this.ad = ad
        this.dogumYili = dogumYili
    }
    yasHesapla() {
        let tarih = new Date().getFullYear()
        return tarih - this.dogumYili
    }

    kendiniTanit() {
        return `benim adım ${this.ad}`
    }
}
//Child

class Ogrenci extends Kisi {
    constructor(ad, dogumYili, okulNumarasi) {
        super(ad, dogumYili)
        this.okulNumarasi = okulNumarasi
    }

    dersCalis() {
        return (`${this.ad} ders calisman lazım`)
    }

    kendiniTanit() {
        return `benim adım ${this.ad} okul numaram da ${this.okulNumarasi}`
    }

}
let kisi = new Kisi("ali", 2002)
let ogrenci = new Ogrenci("bedo", 2001, 312)

console.log(ogrenci.kendiniTanit())