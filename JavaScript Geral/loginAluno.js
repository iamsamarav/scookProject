// Aqui ocorrerá o preenchimento da variável instValid, de acordo com os valores do banco de dados do browser...


function entrar(){
    let emailInst = document.querySelector('#emailInst')
    let emailLabel = document.querySelector('#emailLabel')

    let password = document.querySelector('#password')
    let passwordLabel = document.querySelector('#passwordLabel')

    let listaUser = []

    let instValid = {

        email: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaInst'))

    listaUser.forEach((item) => {
        if(emailInst.value == item.emailCad && password.value == item.senhaCad){
            instValid = {
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    })


// Aqui temos a condicional do código, nela será realizada uma comparação dos valores inseridos no e-mail e na
// senha, após isso, será feita uma verifação afim de descobrir se são são iguais aos que foram cadastrado no banco do browser ou não...


    if (emailInst.value == instValid.email && password.value == instValid.senha) {
        window.location.href = '#'
        alert('Seu login foi efetuado com sucesso...')      
    } else {
        alert('E-mail ou senha incorretos, tente novamente!')
    }
}