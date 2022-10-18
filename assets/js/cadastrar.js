const botaoCadastrar = document.getElementById('btn-cadastrar');

botaoCadastrar.addEventListener("click", function cadastrarUsuarios(e) {
    e.preventDefault();

    const nomeCadastro = document.getElementById('cadastrar-nome');
    const sobrenomeCadastro = document.getElementById('cadastrar-sobrenome');
    const emailCadastro = document.getElementById('cadastrar-email');
    const senhaCadastro = document.getElementById('cadastrar-senha');
    const confirmarSenha = document.getElementById('confirmar-senha');

    if (nomeCadastro.value != "" && sobrenomeCadastro.value != "") {
        if (senhaCadastro.value == confirmarSenha.value) {
            alert("USUÁRIO CADASTRADO")
            const usuario = {
             nome: `${nomeCadastro.value} ${sobrenomeCadastro.value}`,
             email: emailCadastro.value,
             senha: senhaCadastro.value
            };
       
            localStorage.setItem(emailCadastro.value, JSON.stringify(usuario));
    
            window.location="index.html"

        } else {
            alert("AS SENHAS NÃO SÃO IGUAIS")
        }
    }
});
