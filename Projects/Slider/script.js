var models = [
    {
        name: 'Mercedes C200',
        image: 'pics/MERCEDESC200.jpg',
        link: 'https://www.mercedes-benz.com.tr/?gagcmid=GA_20739445150_155538493575_679161451432&gad_source=1&gclid=CjwKCAiAnL-sBhBnEiwAJRGiguNxadkqC_3TtvtGI5o84Z7QooTKoGUbPmrjeQsbUfHTiZAyokz98hoCsi8QAvD_BwE&gclsrc=aw.ds&group=all&subgroup=all.saloon&view=BODYTYPE'
    },
    {
        name: 'Toyota Supra',
        image: 'pics/Supra.jpg',
        link: 'https://www.toyota.com.tr/'
    },
    {
        name: 'Lamborghini Urus',
        image: 'pics/Urus.jpg',
        link: 'https://www.lamborghini.com/en-en'
    },
    {
        name: 'Audi R8',
        image: 'pics/r8.jpg',
        link: 'https://www.audi.com.tr/tr/web/tr.html'
    }

]
var index = 0
var slaytCount = models.length
var interval
var settings = {
    duration: '1000',
    random: true
}
init(settings)




showSlide(index)

document.querySelector(".fa-arrow-left").addEventListener('click', function () {

    index--;
    showSlide(index)
    console.log(index)
})
document.querySelector(".fa-arrow-right").addEventListener('click', function () {

    index++;
    showSlide(index)
    console.log(index)
})

document.querySelectorAll('.fa-2x').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval)
    })
})

document.querySelectorAll('.fa-2x').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings)
    })
})

function init(settings) {
    var prev
   interval = setInterval(function () {

        if (settings.random) {
            //random index
            do {
                index = Math.floor(Math.random() * slaytCount)
            } while (index == prev)
            prev = index
        } else {
            //artan index
            if (slaytCount == index + 1) {
                index = -1
            }
            showSlide(index)
            console.log(index)
            index++
        }
        showSlide(index)

    }, settings.duration)



}

function showSlide(i) {

    index = i

    if (i < 0) {
        index = slaytCount - 1
    }

    if (i >= slaytCount) {
        index = 0
    }


    document.querySelector(".card-title").textContent = models[index].name
    document.querySelector(".card-link").setAttribute('href', models[index].link)
    document.querySelector(".card-img-top").setAttribute('src', models[index].image)


}

