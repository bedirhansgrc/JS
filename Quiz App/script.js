const quiz = new Quiz(sorular)
const ui = new  UI()

ui.btn_start.addEventListener("click", function () {
    ui.quiz_box.classList.add("active")
    soruGoster(quiz.soruGetir())
    soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length)
    ui.btn_next.classList.remove("show");
})

ui.btn_next.addEventListener("click", function () {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        document.querySelector(".quiz_box").classList.add("active")
        quiz.soruIndex += 1
        soruGoster(quiz.soruGetir())
        soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length)
        ui.btn_next.classList.remove("show");
    } else {
        console.log("quiz bitti")
    }
})

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
    ui.option_list.innerHTML = options

    const option = ui.option_list.querySelectorAll(".option")
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
        option.insertAdjacentHTML("beforeend", ui.correctIcon)
    } else {
        option.classList.add("incorrect")
        option.insertAdjacentHTML("beforeend", ui.falseIcon)
    }

    for (let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled")
    }

    ui.btn_next.classList.add("show")
}

function soruSayisiniGoster(soruSirasi, toplamSoru) {
    let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag
}