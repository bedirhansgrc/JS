const ogrenciler = new Map()

ogrenciler.set(1, "bedirhan sığırcı")
ogrenciler.set("12312312312", "hakan sığırcı")
ogrenciler.set(true, "şenay")
console.log(ogrenciler.get(1))

let sonuc = ogrenciler.size
sonuc = ogrenciler.has("12312312312")

// for(let x of ogrenciler.keys()){
//     console.log(x)
// }
// for(let x of ogrenciler.values()){
//     console.log(x)
// }
for(let x of ogrenciler.entries()){
    console.log(x)
}
