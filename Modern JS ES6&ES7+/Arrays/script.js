const sayilar = [1, 5, 7, 3, 2, 67]
const urunler = [
    {urunAdi: "iphone 11",fiyat: 12000},
    {urunAdi: "iphone 12",fiyat: 15000},
    {urunAdi: "iphone 13",fiyat: 17000},
    {urunAdi: "iphone 14",fiyat: 19000}
]

//const tekSayilar = sayilar.filter((sayi) => sayi % 2 == 1)
const tekSayilar = sayilar.map((sayi) => sayi % 2 == 1)
const sonuc = urunler.filter(urun => urun.fiyat > 15000).map(urun => urun.urunAdi)



console.log(sonuc)