// Variáveis
let instituicao = document.querySelector('#instituição')
let instLabel = document.querySelector('#instLabel')
let validInst = false

let emailInst = document.querySelector('#emailInst')
let emailLabel = document.querySelector('#emailLabel')
let validEmail = false

let quantAlunos = document.querySelector('#quantAlunos')
let alunosLabel = document.querySelector('#alunosLabel')
let validAluno = false

let password = document.querySelector('#password')
let passwordLabel = document.querySelector('#passwordLabel')
let validSenha = false

let confirme = document.querySelector('#confirme')
let confirmeLabel = document.querySelector('#confirmeLabel')
let validConfirme = false

// Neste trecho ocorrerá o processo de validação e arrecadação dos dados do usuário (as escolas)
instituicao.addEventListener('keyup', () => {
   if(instituicao.value.length <= 2){
        instLabel.setAttribute('style', 'color: red')
        instLabel.innerHTML = 'Digite o nome da instituição'
        validInst = false
   } else{
        instLabel.setAttribute('style', 'color: green')
        instLabel.innerHTML = 'Instituição ✔'
        validInst = true
   }
})

emailInst.addEventListener('keyup', () => {
    if(emailInst.value.length <= 9 ){
        emailLabel.setAttribute('style', 'color: red')
        emailLabel.innerHTML = 'E-mail'
        validEmail = false
    } else{
        emailLabel.setAttribute('style', 'color: green')
        emailLabel.innerHTML = 'E-mail ✔'
        validEmail = true
    }
 })

 quantAlunos.addEventListener('keyup', () => {
    if(quantAlunos.value.length <= 2){
        alunosLabel.setAttribute('style', 'color: red')
        alunosLabel.innerHTML = 'Insira o número total'
        validAluno = false
    } else{
        alunosLabel.setAttribute('style', 'color: green')
        alunosLabel.innerHTML = 'Alunos ✔'
        validAluno = true
    }
 })

 password.addEventListener('keyup', () => {
    if(password.value.length <= 7){
        passwordLabel.setAttribute('style', 'color: red')
        passwordLabel.innerHTML = 'Senha *digite no mínimo 8 caracteres'
        validSenha = false
    } else{
        passwordLabel.setAttribute('style', 'color: green')
        passwordLabel.innerHTML = 'Senha ✔'
        validSenha = true
    }
 })

 confirme.addEventListener('keyup', () => {
    if(confirme.value != senha.value){
        confirmeLabel.setAttribute('style', 'color: red')
        confirmeLabel.innerHTML = 'Confirme a sua senha'
        validConfirme = false
    } else{
        confirmeLabel.setAttribute('style', 'color: green')
        confirmeLabel.innerHTML = 'Confirmar senha ✔'
        validConfirme = true
    }
 })


// *Utilizamos o armazenamento local para guardar as imformações obtidas (o armazenamento foi realizado através do browser)
// Apartir daqui, se todas as informações obtidas forem verdadeiras o usúario será encaminhado para a tela de 'login'...
function cadastrar(){
    if(validInst && validEmail && validAluno && validSenha && validConfirme){

        let listaInst = JSON.parse(localStorage.getItem('listaInst') || '[]')

        listaInst.push(
            {
                instituicaoCad: instituicao.value,
                emailInstCad: emailInst.value,
                quantAlunosCad: quantAlunos.value,
                passwordCad: password.value
            }
        )

        localStorage.setItem('listaInst', JSON.stringify(listaInst))
        
        window.location.href = 'loginAluno.html'

    } else {
        alert('Ocorreu alguma falha! Preencha com atenção todos os campos do fromulário')
    }
}