function verificar() {
    let senha1 = document.getElementById("senha1")
    let senha2 = document.getElementById("senha2")
    let p = document.getElementsByTagName("p")[0]

    if (senha1.value != senha2.value){
        p.innerHTML = "As senhas não coincidem"
        p.style.color = "red"

        senha1.style.borderColor = "red"
        senha2.style.borderColor = "red"

        senha1.value = ""
        senha2.value = ""
    }
}

