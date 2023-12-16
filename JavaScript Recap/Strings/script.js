let ad = "Bedirhan";
let soyad = "Sığıcı";
let yas = 65;
let sehir = "Adana";

//ternary operators 
let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65 - yas) + " yıl kaldı." : "Zaten emekli oldunuz"

let mesaj = `Benim adim ${ad} ve soyadim ${soyad} ${sehir}'da yaşıyorum. ${emeklilik}`

console.log(mesaj)

