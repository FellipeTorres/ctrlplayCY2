document.addEventListener("DOMContentLoaded", function(){
    const elemento = document.querySelector("#ponto1");
    const elemento2 = document.querySelector("#ponto2");
    const elemento3 = document.querySelector("#ponto3");
    const elemento4 = document.querySelector("#ponto4");
    const elemento5 = document.querySelector("#ponto5");
    const elemento6 = document.querySelector("#ponto6");
    
    const posicao = elemento.getBoundingClientRect()
    const posicao2 = elemento.getBoundingClientRect()
    const posicao3 = elemento.getBoundingClientRect()
    const posicao4 = elemento.getBoundingClientRect()
    const posicao5 = elemento.getBoundingClientRect()
    const posicao6 = elemento.getBoundingClientRect()
    
    if(posicao.top <= window.innerHeight){
        elemento.classList.add("animate__animated", "animate__bounceInLeft")
    }

    if(posicao2.top <= window.innerHeight){
        elemento2.classList.add("animate__animated", "animate__bounceInLeft")
    }

    if(posicao3.top <= window.innerHeight){
        elemento3.classList.add("animate__animated", "animate__bounceInLeft")
    }

    if(posicao4.top <= window.innerHeight){
        elemento4.classList.add("animate__animated", "animate__bounceInLeft")
    }
    
    if(posicao5.top <= window.innerHeight){
        elemento5.classList.add("animate__animated", "animate__bounceInLeft")
    }

    if(posicao6.top <= window.innerHeight){
        elemento6.classList.add("animate__animated", "animate__bounceInLeft")
    }
})

