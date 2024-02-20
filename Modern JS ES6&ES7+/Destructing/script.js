//Array Destructing
let name = ["Bedirhan", "Sığırcı"]

// let firstName = name[0]
// let lastName = name[1]

// let [firstName, lastName] = name

// console.log(firstName, lastName)

let urun = {
    marka: "apple",
    model: "iphone 13",
    fiyat: 20000,
    satisDurumu: true
}

function urunGoster(obj) {
    let { marka, model, fiyat = 0, satisDurumu = false } = obj
    console.log(marka, model, fiyat, satisDurumu)
}

urunGoster(urun)