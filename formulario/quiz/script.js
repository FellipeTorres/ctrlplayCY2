let points = 0
let counter = 0

const questions = [["Qual é o maior planeta do sistema solar?", "Marte", "Júpiter", "Sarturno", "Terra"],
["Qual o idioma mais falado no mundo?", "Inglês", "espanhol", "Russo", "Portugues-Brasil"],
["Qual o maior órgão do corpo humano?", "Estômago", "olhos", "fémon", "pele"],
["Qual entre esses NÃO é de cordas", "Violão", "Flauta", "Violino", "Piano"]]

function verificar() {
    const select = document.querySelector('input[name="resposta"]:checked')
    const h1 = document.getElementsByTagName("h1")[0]
    const allLabel = document.getElementsByTagName("label")

    if (select.value === "true") {
        points++
    }

    counter++
    console.log(points)

    if (counter === 1) {
        h1.innerText = questions[0][0]
        allLabel[0].innerHTML = `<input type="radio" name="resposta" value="false" id="rsp1"> ${questions[0][1]}`
        allLabel[1].innerHTML = `<input type="radio" name="resposta" value="true" id="rsp2"> ${questions[0][2]}`
        allLabel[2].innerHTML = `<input type="radio" name="resposta" value="false" id="rsp3"> ${questions[0][3]}`
        allLabel[3].innerHTML = `<input type="radio" name="resposta" value="false" id="rsp4"> ${questions[0][4]}`

    } else if (counter === 2) {
        h1.innerText = questions[1][0]
        allLabel[0].innerHTML = `<input type="radio" name="resposta" value="true" id="rsp1"> ${questions[1][1]}`
        allLabel[1].innerHTML = `<input type="radio" name="resposta" value="false" id="rsp2"> ${questions[1][2]}`
        allLabel[2].innerHTML = `<input type="radio" name="resposta" value="false" id="rsp3"> ${questions[1][3]}`
        allLabel[3].innerHTML = `<input type="radio" name="resposta" value="false" id="rsp4"> ${questions[1][4]}`

    } else if (counter === 3) {
        h1.innerText = questions[2][0]
        allLabel[0].innerHTML = `<input type="radio" name="resposta" value="false" id="rsp1"> ${questions[2][1]}`
        allLabel[1].innerHTML = `<input type="radio" name="resposta" value="false" id="rsp2"> ${questions[2][2]}`
        allLabel[2].innerHTML = `<input type="radio" name="resposta" value="false" id="rsp3"> ${questions[2][3]}`
        allLabel[3].innerHTML = `<input type="radio" name="resposta" value="true" id="rsp4"> ${questions[2][4]}`

    } else if (counter === 4) {
        h1.innerText = questions[3][0]
        allLabel[0].innerHTML = `<input type="radio" name="resposta" value="false" id="rsp1"> ${questions[3][1]}`
        allLabel[1].innerHTML = `<input type="radio" name="resposta" value="true" id="rsp2"> ${questions[3][2]}`
        allLabel[2].innerHTML = `<input type="radio" name="resposta" value="false" id="rsp3"> ${questions[3][3]}`
        allLabel[3].innerHTML = `<input type="radio" name="resposta" value="false" id="rsp4"> ${questions[3][4]}`
    }

    if (counter === 5){
        let flz = document.getElementsByClassName("finalizar")[0]
        let env = document.getElementsByClassName("enviar")[0]
        env.style.display = "none"
        flz.style.display = "inline-block"
    }
}

function finalizar(){
    window.location.href = `pontos.html?pt=${points}`

}