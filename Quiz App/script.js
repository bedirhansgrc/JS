// OOP : Nesne Tabanlı Programlama
// Object

// let soru = {
//     soruMetni: "Hangisi javascript paket yönetim uygulamasıdır ?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "TypeScript",
//         c: "Npm"
//     },
//     dogrucevap: "c",
//     cevabıKontrolEt: function (cevap) {
//         return cevap === this.dogrucevap
//     }
// }
// let soru2 = {
//     soruMetni: "Hangisi .net paket yönetim uygulamasıdır ?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "nuget",
//         c: "Npm"
//     },
//     dogrucevap: "b",
//     cevabıKontrolEt: function (cevap) {
//         return cevap === this.dogrucevap
//     }
// }


// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7

function Soru(soruMetni, cevapSecenekleri, dogrucevap) {
    this.soruMetni = soruMetni
    this.cevapSecenekleri = cevapSecenekleri
    this.dogrucevap = dogrucevap
    console.log(this)
}
Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogrucevap
}
let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır ?", { a: "Node.js", b: "TypeScript", c: "Npm" }, "c")
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır ?", {a: "Node.js",b: "nuget",c: "Npm"}, "b")

let sorular = [
    new Soru("Hangisi js paket yönetim uygulamasıdır ?", { a: "Node.js", b: "TypeScript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulamasıdır ?", { a: "Node.js", b: "TypeScript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulamasıdır ?", { a: "Node.js", b: "TypeScript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulamasıdır ?", { a: "Node.js", b: "TypeScript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulamasıdır ?", { a: "Node.js", b: "TypeScript", c: "Npm" }, "c")
]

console.log(soru1.cevabiKontrolEt("c"))