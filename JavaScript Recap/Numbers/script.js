let sonuc;

sonuc = 10
sonuc = Number("10")
sonuc = parseInt("10.6")
sonuc = parseFloat("10.6")
sonuc = parseInt("10a")

sonuc = isNaN("10")

let sayi = 15.123123

sonuc = sayi.toPrecision(5)
sonuc = sayi.toFixed(5)

sonuc = Math.round(2.4)
sonuc = Math.round(2.6)
sonuc = Math.ceil(2.6)
sonuc = Math.floor(2.6)
sonuc = Math.sqrt(25)
sonuc = Math.pow(2,6)
sonuc = Math.abs(-23)
sonuc = Math.min(2,3,4,5,6)
sonuc = Math.max(2,3,4,5,6)
sonuc = Math.ceil(Math.random() * 10)


console.log(typeof sonuc)
console.log(sonuc)