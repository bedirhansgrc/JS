let array = ["Elma", "Armut", "Muz", "Çilek"]
let sonuc = array.length
console.log(sonuc)

let ilk = array[0]
let son = array[array.length - 1]
console.log(ilk)
console.log(son)

if(array.indexOf("Elma")>=0){
    console.log("Evet Elma Dizinin bir elemanıdır.")
}else{
    console.log("Hayır elma dizinin bir elamanı değildir")
}

array.push("Kiraz")
console.log(array)

array.pop()
array.pop()
console.log(array)

let ogr1 = ["Yiğit","Bilgi", 2010, [70,60,80]]
let ogr2 = ["Ada","Bilgi", 2012, [80,80,90]]
let ogr3 = ["Ahmet","Turan", 2009, [60,60,70]]

let simdi = new Date()
let yil = simdi.getFullYear()
let ogr1yas = yil - ogr1[2]
let ogr2yas = yil - ogr2[2]
let ogr3yas = yil - ogr3[2]
console.log("1. ogrencinin yaşı: " , ogr1yas)
console.log("2. ogrencinin yaşı: " , ogr2yas)
console.log("3. ogrencinin yaşı: " , ogr3yas)

let ort1 = (ogr1[3][0] + ogr1[3][1] + ogr1[3][2]) / 3
let ort2 = (ogr2[3][0] + ogr2[3][1] + ogr2[3][2]) / 3
let ort3 = (ogr3[3][0] + ogr3[3][1] + ogr3[3][2]) / 3
console.log("1.ogrencinn not ortalaması : " ,ort1.toFixed(1))
console.log("2.ogrencinn not ortalaması : " ,ort2.toFixed(1))
console.log("3.ogrencinn not ortalaması : " ,ort3.toFixed(1))