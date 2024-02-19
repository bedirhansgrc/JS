//ES5
function selamlama1(isim) {
    console.log("Merhaba " + isim)
}
//ES5
var selamlama2 = function () {
    console.log("Merhaba2")
}
selamlama1("ali")

selamlama2()

//ES6 - Arrow Function

const Selamlama3 = (isim) => {
    console.log("Merhaba3 " + isim)

}
Selamlama3("mehmet")

//ES5
var toplamES5 = function(a,b){
    return a + b
}
var sonuc = toplamES5(5,10)

console.log(sonuc)

//ES6

const toplamES6 = (a,b) => a+b
var sonuc = toplamES6(10,20)
console.log(sonuc)