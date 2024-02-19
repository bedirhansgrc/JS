const sayilar = [1, 5, 7, 3, 2, 67]

// const tekSayilar = []
// for (let sayi of sayilar) {
//     if (sayi % 2 == 1) {
//         tekSayilar.push(sayi)
//     }
// }


const tekSayiKontrol = (sayi) => sayi % 2 == 1

const tekSayilar = sayilar.filter(tekSayiKontrol)

console.log(tekSayilar)