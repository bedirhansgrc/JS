// const msj = ["benim", "adım", "bedirhan", "sığırcı"]

// let sonuc = ""
// for (let x of msj) {
//     sonuc += x + " "
// }
// console.log(sonuc)

// console.log(...msj)

// const dizi1 = ["bir", "iki"]
// const dizi2 = ["üç", "dört"]
// const dizi3 = [...dizi1, ...dizi2]
// console.log(dizi3)

const sayilar1 = [1,2,3]
//const sayilar2 = sayilar1 // referans copy
const sayilar2 =[...sayilar1] // value copy

sayilar2[0] = 10

console.log(sayilar1, sayilar2)

const user = {
    username: "bedirhansgrc",
    email: "gmail.com"
}
const adress = {
    city: "adana"
}
console.log({...user, ...adress})

//rest parameters
function toplam(...args){
    let sonuc = 0
    for(let sayi of args){
        sonuc += sayi
    }
    return sonuc
}
console.log(toplam(1,3,5))

console.log(toplam(1,3,5,10))

function bilgileriGoster(isim, soyad, ...adres){
    console.log(isim, soyad ,adres)
}
bilgileriGoster("Bedirhan","Sığırcı", "ASDASD","ASDASDASD")