let kursAdi = "Komple uygulamalı web geliştirme eğitimi";

let sonuc;

sonuc = kursAdi.toLowerCase()
sonuc = kursAdi.toUpperCase()
sonuc = kursAdi.length
sonuc = kursAdi[1]
sonuc = kursAdi.slice(0, 6)
sonuc = kursAdi.slice(10)

sonuc = kursAdi.substring(0,6)

sonuc = kursAdi.replace("eğitimi","Kursu")
sonuc = kursAdi.trim()

sonuc = kursAdi.indexOf("web")
sonuc = kursAdi.split(" ")



console.log(sonuc)