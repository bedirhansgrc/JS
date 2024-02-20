const sayilar = new Set()

sayilar.add(1)
sayilar.add(2)
sayilar.add(3)
sayilar.add("4")

// const dizi = [...sayilar]

// sayilar.delete(2)
console.log(sayilar.has(1))

// console.log(sayilar.values())

for(let x of sayilar){
    console.log(x)
}

 