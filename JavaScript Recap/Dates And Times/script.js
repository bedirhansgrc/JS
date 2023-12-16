let simdi = new Date(); // Şimdiki tarih- saat

//get methods
sonuc = simdi;
sonuc = simdi.getDate() //gün
sonuc = simdi.getDay() //0:pazar 6:cumartesi
sonuc = simdi.getFullYear() //yıl
sonuc = simdi.getHours() // saat
sonuc = simdi.getTime()

//set methods
simdi.setFullYear(2025)
simdi.setMonth(7) // 0:Ocak
simdi.setDate(15)

sonuc = simdi

let dogumtarihi = new Date(1990, 5, 15)

sonuc = simdi.getFullYear() - dogumtarihi.getFullYear()

let milisecond = simdi - dogumtarihi
let saniye = milisecond / 1000
let dakika = saniye / 60
let saat = dakika / 60
let gun = saat / 24

sonuc = gun

console.log(sonuc);
console.log(typeof sonuc)