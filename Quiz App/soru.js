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
    new Soru("2-Hangisi javascript paket yönetim uygulamasıdır ?", { a: "Node.js", b: "TypeScript", c: "Npm" }, "c"),
    new Soru("3-Hangisi javascript paket yönetim uygulamasıdır ?", { a: "Node.js", b: "TypeScript", c: "Npm" }, "c"),
    new Soru("4-Hangisi javascript paket yönetim uygulamasıdır ?", { a: "Node.js", b: "TypeScript", c: "Npm" }, "c"),
]