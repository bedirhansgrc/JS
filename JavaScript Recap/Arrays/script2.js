let ogrenciler = ["Çınar", "Yiğit", "Ada"]

sonuc = ogrenciler.length

//array to string
sonuc = ogrenciler.toString()
sonuc = ogrenciler.join(" ")

//eleman silme
//sonuc = ogrenciler.pop()            //son eleman silinir ve geri döndürülür
//sonuc = ogrenciler.shift()          // ilk eleman silinir ve geriye döndürülür
//sonuc = ogrenciler.push("Sena")     // Dizinin sonuna eleman ekler
//sonuc = ogrenciler.unshift("sena")  //Listenin başına eleman ekler

let markalar1 = ["Mazda", "Toyota"]
let markalar2 = ["opel", "renault"]
let markalar3 = ["mercedes",]

// sonuc = markalar1.concat(markalar2, markalar3)

sonuc = markalar1.splice(0,1, "bmw","audi")

console.log(sonuc)
console.log(markalar1)