let vize1 = 90, vize2 = 90, final = 30;

let ortalama = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6)

if (ortalama >= 50 && final >= 50){
    console.log("Geçtiniz")
}else if (final >= 70){
    console.log("geçtiniz")
}else{
    console.log("kaldınız")
}
console.log("ortalamanız: " + ortalama)