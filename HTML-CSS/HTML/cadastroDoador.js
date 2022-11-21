
let nome = document.querySelector('#nome')
let titulo = document.querySelector('#titulo')

let email = document.querySelector('#email')
let cpf = document.querySelector('#cpf')
let senha = document.querySelector('#senha')
let confirmsenha = document.querySelector('#confirmsenha')

nome.addEventListener('keyup', () => {
        if (nome.value.length <= 2) {
            titulo.setAttribute('style', 'color: red')
        } else {
            titulo.setAttribute('style', 'color: green')
        }
    })

function cadastrar(){
    alert('botão clicado')
}