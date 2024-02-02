// OOP : Nesne Tabanlı Programlama
// Object

let soru = {
    soruMetni: "Hangisi javascript paket yönetim uygulamasıdır ?",
    cevapSecenekleri: {
        a: "Node.js",
        b: "TypeScript",
        c: "Npm"
    },
    dogrucevap: "c",
    cevabıKontrolEt: function (cevap) {
        return cevap === this.dogrucevap
    }
}
let soru2 = {
    soruMetni: "Hangisi .net paket yönetim uygulamasıdır ?",
    cevapSecenekleri: {
        a: "Node.js",
        b: "nuget",
        c: "Npm"
    },
    dogrucevap: "b",
    cevabıKontrolEt: function (cevap) {
        return cevap === this.dogrucevap
    }
}

console.log(soru.soruMetni)
console.log(soru.cevabıKontrolEt("c"))
console.log(soru2.cevabıKontrolEt("b"))

// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7