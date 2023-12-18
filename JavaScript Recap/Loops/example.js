let sayilar = [1, 5, 7, 15, 3, 25]

for (let i = 0; i < sayilar.length; i++) {
    console.log(sayilar[i] * sayilar[i])
}

for (let i of sayilar) {
    if (i % 5 == 0) {
        console.log(i, " 5'in katıdır")
    }
    else {
        console.log(i, " 5'in katı değildir")
    }
}
let toplam = 0
for (let i of sayilar) {
    if (i % 2 == 0) {
        toplam += i
    }
}
console.log(toplam)

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"]

for (let u of urunler) {
    console.log(u.toUpperCase())
}
let sayac = 0
for (let u of urunler) {
    if (u.includes("samsung")) {
        sayac++
    }
}
console.log(sayac)
let ogrenciler = [
    { "ad": "yiğit", "soyad": "bilgi", "notlar": [60, 70, 60] },
    { "ad": "ada", "soyad": "bilgi", "notlar": [80, 70, 80] },
    { "ad": "çınar", "soyad": "turan", "notlar": [70, 70, 60] },
]

for (let ogrenci of ogrenciler) {
    let not_toplam = 0
    let ortalama = 0
    let adet = 0
    for (let not of ogrenci.notlar) {
        not_toplam += not
        adet++
    }
    ortalama = not_toplam / adet
    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli ogrencinin not ortalaması : ${ortalama}.`)
    if (ortalama >= 50){
        console.log ("başarılı")
    }else{
        console.log("başarısız")
    }
}
