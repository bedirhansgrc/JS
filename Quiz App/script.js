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
    this.cevabiKontrolEt = function(cevap){
        return cevap === this.dogrucevap
    }
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

console.log(sorular[0].soruMetni)

for(let s of sorular){
    console.log(s.soruMetni)
}

console.log(soru1.soruMetni)
console.log(soru1.dogrucevap)
console.log(soru1.cevabiKontrolEt("c"))

console.log(soru2.soruMetni)
console.log(soru2.dogrucevap)
console.log(soru2.cevabiKontrolEt("b"))