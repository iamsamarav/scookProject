
// Inicio de função

// Essa parte do codigo pega as informções arquivadas no banco do browser
// e preenche a variável userValid para futuramente fazer a validção

function entrar(){
    let usuario = document.querySelector('#usuario')
    let usuarioLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let listaUser = []

    let userValid = {
        nome: '',
        email: '',
        cpf: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(usuario.value == item.cpfCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                email: item.emailCad,
                cpf: item.cpfCad,
                senha: item.senhaCad
            }
        }
    })

// Fim de função

// Inicio da condicinal

// Essa parte do codigo faz a comparação dos valores inseridos no login e
// senha e verifaca se são iguais aos que foram cadastrado no banco do browser 

    if (usuario.value == userValid.cpf && senha.value == userValid.senha) {
        window.location.href = 'inicioDoador.html'
        alert('Login com Sucesso')      
    } else {
        alert('CPF/CNPJ ou Senha incorreta')
    }
}

// Fim de função    