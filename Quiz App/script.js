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
}
Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogrucevap
}
let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır ?", { a: "Node.js", b: "TypeScript", c: "Npm" }, "c")
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır ?", { a: "Node.js", b: "nuget", c: "Npm" }, "b")

let sorular = [
    new Soru("1-Hangisi js paket yönetim uygulamasıdır ?", { a: "Node.js", b: "TypeScript", c: "Npm" }, "c"),
    new Soru("2-Hangisi javascript paket yönetim uygulamasıdır ?", { a: "Node.js", b: "TypeScript", c: "Npm" }, "c"),
    new Soru("3-Hangisi javascript paket yönetim uygulamasıdır ?", { a: "Node.js", b: "TypeScript", c: "Npm" }, "c"),
    new Soru("4-Hangisi javascript paket yönetim uygulamasıdır ?", { a: "Node.js", b: "TypeScript", c: "Npm" }, "c"),
]

function Quiz(sorular) {
    this.sorular = sorular
    this.soruIndex = 0
}

Quiz.prototype.soruGetir = function () {
    return this.sorular[this.soruIndex]
}

const quiz = new Quiz(sorular)


document.querySelector(".btn-start").addEventListener("click", function(){
    if (quiz.sorular.length != quiz.soruIndex){
        console.log(quiz.soruGetir())
        quiz.soruIndex += 1
    } else {
        console.log("quiz bitti")
    }
})