
// Inicio da sessão de variáveis

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmsenha = document.querySelector('#confirmsenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

// Fim da sessão de variáveis


// Inicio das validações

// Nessa parte do codigo foram feita as validações para saber se todas a informações foram preenchidas corretamente

nome.addEventListener('keyup', () => {
   if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *digite mais de 3 caracteres'
        validNome = false
   } else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome ✔'
        validNome = true
   }
})

email.addEventListener('keyup', () => {
    if(email.value.length <= 9 ){
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'E-mail'
        validEmail = false
    } else{
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'E-mail ✔'
        validEmail = true
    }
 })

 cpf.addEventListener('keyup', () => {
    if(cpf.value.length < 11){
        labelCpf.setAttribute('style', 'color: red')
        labelCpf.innerHTML = 'CPF/CNPJ *insira números completos'
        validCpf = false
    } else if (cpf.value.length > 14){   
        labelCpf.setAttribute('style', 'color: red')
        labelCpf.innerHTML = 'CPF/CNPJ *números em excesso'  
        validCpf = false   
    } else{
        labelCpf.setAttribute('style', 'color: green')
        labelCpf.innerHTML = 'CPF/CNPJ ✔'
        validCpf = true
    }
 })

 senha.addEventListener('keyup', () => {
    if(senha.value.length <= 7){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *digite no mínimo 8 caracteres'
        validSenha = false
    } else{
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha ✔'
        validSenha = true
    }
 })

 confirmsenha.addEventListener('keyup', () => {
    if(confirmsenha.value != senha.value){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar a senha *senhas diferentes'
        validConfirmSenha = false
    } else{
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar senha ✔'
        validConfirmSenha = true
    }
 })


// Fim das validações


// Inicio função cadastrar 

// Nessa parte de codigo foi feito atraves das condionais o encaminhamento para a pagina de
// login caso todas a informações tenham sido preenchidas corretamente

// também foi utilizado o localStorage como forma de armazenamento das imformações através do browser

function cadastrar(){
    if(validNome && validEmail && validCpf && validSenha && validConfirmSenha){

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                emailCad: email.value,
                cpfCad: cpf.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        
        window.location.href = 'loginDoador.html'

    } else {
        alert('Preencha todos os campo corretamente')
    }
}

// Fim função cadastrar 