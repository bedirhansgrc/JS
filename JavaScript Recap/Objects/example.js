let siparis_1 = {
    "siparis_id" : 101,
    "siparis_tarihi" : "30.12.2022",
    "odeme_sekli" : "kredi karti",
    "kargo_adresi" : {
        "mahalle": "yayha kaptan",
        "ilce" : "izmit",
        "sehir" : "kocaeli"
    },
    "urunler" : [
         {  
            "urun_id" : 5,
            "urun_adi": "iphone 13 pro",
            "urun_fiyat" : 22000
        },
        {
            "urun_id" : 6,
            "urun_adi": "iphone 13 pro max",
            "urun_fiyat" : 25000
        }
    ]
}

let siparis_2 = {
    "siparis_id" : 102,
    "siparis_tarihi" : "30.12.2022",
    "odeme_sekli" : "kredi karti",
    "kargo_adresi" : {
        "mahalle": "yayha kaptan",
        "ilce" : "izmit",
        "sehir" : "kocaeli"
    },
    "urunler" : [
        {
            "urun_id" : 6,
            "urun_adi": "iphone 13 pro max",
            "urun_fiyat" : 25000
        }
    ]
}


let toplam = (siparis_1.urunler[0].urun_fiyat + siparis_1.urunler[1].urun_fiyat + siparis_2.urunler[0].urun_fiyat) * 1.18

let siparisler = [siparis_1, siparis_2]

console.log(toplam)