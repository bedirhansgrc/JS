function Soru(soruMetni, cevapSecenekleri, dogrucevap) {
    this.soruMetni = soruMetni
    this.cevapSecenekleri = cevapSecenekleri
    this.dogrucevap = dogrucevap
}
Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogrucevap
}

let sorular = [
    new Soru("1-Hangisi js paket yönetim uygulamasıdır ?", { a: "Node.js", b: "TypeScript", c: "Npm", d: "Nuget" }, "c"),
    new Soru("2-Hangisi frantend kapsamında değerlendirilmez?", { a: "css", b: "html", c: "JS", d: "sql" }, "d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilir ?", { a: "Node.js", b: "TypeScript", c: "angular", d: "react" }, "a"),
    new Soru("4-Hangisi javascript pprogramlama dilini kullanmaz ?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d"),
]