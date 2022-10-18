const botaoVerificar = document.getElementById('btn-verificar')

botaoVerificar.addEventListener("click", function verificarUsuarios(e) {
    e.preventDefault()
        
        const emailLogin = document.getElementById('verificar-email');
        const senhaLogin = document.getElementById('verificar-senha');
    
        const alertaLogin = document.getElementById('alerta-login')
    
        if (emailLogin.value != "" && senhaLogin.value != "") {
            let dados = JSON.parse(localStorage.getItem(emailLogin.value))
            if (senhaLogin.value == dados.senha){
                
                
                alert(`Seja bem vindo: \n${dados.nome}`)
                
                emailLogin.value = ""
                senhaLogin.value = ""
                
            } else {
                alertaLogin.innerHTML = `<label>Você errou a senha!</label>`
            }


        }  else {
            alertaLogin.innerHTML = `<label>Preencha os campos acima!</label>`
        }
    })
