let toplam = 0

// for (let i = 0; i <= 10; i++) {
//     toplam += i
// }

// console.log(toplam)


let sayilar =[1,4,5,8,4,3]

for(i = 0; i < sayilar.length; i++){
    toplam += sayilar[i]
}

console.log(toplam)

for(let i in sayilar){ //sayilarin index numaralarını tek tek i'ye atar
    toplam+= sayilar[i]
}

console.log(toplam)

for(let sayi of sayilar){ //direkt indexin içindeki değeri atar
    toplam+= sayi
}
console.log(toplam)

let user = {
    "name " : "Bedirhan Sığırcı",
    "username" : "bedirhansgrc",
    "password" : "12345",
    "email" : "bedirhansigirci@gmail.com"
}

for(let key in user){
    console.log(user[key])
}