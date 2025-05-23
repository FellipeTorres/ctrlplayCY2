let nomes = [];
let emailo = [];
let assuntos = [];
let mensagens = [];

let tabela = "";

function contato(event) {

    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let assunto = document.getElementById('assunto').value;
    let mensagem = document.getElementById('mensagem').value;

    nomes.push(nome);
    emailo.push(email);
    assuntos.push(assunto);
    mensagens.push(mensagem);

    tabela = `<tr>
            <th>Nomes</tr>
            <th>emailo</th>
            <th>assuntos</tr>
            <th>mensagens</th>
            </tr>`;

    for (let i = 0; i < nomes.length; 1++) {

        tabela += `<tr>
                    <th>${nomes[i]}nomes</tr>
                    <th>${emailo[i]}emailo</th>
                    <th>${assuntos[i]}assuntos</tr>
                    <th>${mensagens[i]}mensagens</th>
                </tr>`;

    }


    document.getElementById('BD').innerHTML = tabela;

    return false;
}