let url = "https://www.sadikturan.com/";
let kursAdi = "Komple Web Geliştirme Kursu"

karakter = url.length

console.log(karakter)

kelime = kursAdi.split(" ").length

console.log(kelime)

sorgu = url.startsWith("https");

console.log(sorgu)

sorgu2 = kursAdi.includes("Eğitimi")

console.log(sorgu2)

yenikursAdi = kursAdi.replaceAll(" ", "-").toLowerCase()

merge = `${url}${yenikursAdi}`

console.log(merge);