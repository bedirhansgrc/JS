const quiz = new Quiz(sorular)

document.querySelector(".btn_start").addEventListener("click", function () {
    document.querySelector(".quiz_box").classList.add("active")
    soruGoster(quiz.soruGetir())
    soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length)
    document.querySelector(".next_btn").classList.remove("show");
})

document.querySelector(".next_btn").addEventListener("click", function () {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        document.querySelector(".quiz_box").classList.add("active")
        quiz.soruIndex += 1
        soruGoster(quiz.soruGetir())
        soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length)
        document.querySelector(".next_btn").classList.remove("show");
    } else {
        console.log("quiz bitti")
    }
})

const option_list = document.querySelector(".option_list")
const correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`
const falseIcon = `<div class="icon"><i class="fas fa-times"></i></div>`

function soruGoster(soru) {
    let question = `<span>${soru.soruMetni}</span>`
    let options = ''

    for (let cevap in soru.cevapSecenekleri) {
        options +=
            `
            <div class="option">
                <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
            </div>
        `;
    }




    document.querySelector(".question_text").innerHTML = question
    document.querySelector(".option_list").innerHTML = options

    const option = option_list.querySelectorAll(".option")
    for (let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
    console.log(option)
}

function optionSelected(option) {
    let cevap = option.querySelector("span b").textContent
    let soru = quiz.soruGetir()

    if (soru.cevabiKontrolEt(cevap)) {
        option.classList.add("correct")
        option.insertAdjacentHTML("beforeend", correctIcon)
    } else {
        option.classList.add("incorrect")
        option.insertAdjacentHTML("beforeend", falseIcon)
    }

    for (let i = 0; i < option_list.children.length; i++) {
        option_list.children[i].classList.add("disabled")
    }

    document.querySelector(".next_btn").classList.add("show")
}

function soruSayisiniGoster(soruSirasi, toplamSoru) {
    let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag
}