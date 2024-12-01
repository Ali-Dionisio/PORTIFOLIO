const form = document.getElementById("registroForm");
const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const mensagem = document.getElementById("mensagem");
const botaoEnviar = document.getElementById("botaoEnviar");

function validarFormulario(event){
    event.preventDefault();

    mensagem.textContent = '';
    nome.style.color = '';
    mensagem.style.border = '';

    if(nome.value === ''){
        mensagem.textContent = 'Por favor o seu nome antes de continuar';
        mensagem.style.color = 'red';
        mensagem.style.border = "2px solid red";
        return;
    }else{
        mensagem.style.border = "2px solid green";
    }

    if(idade.value === ''){
        mensagem.textContent = 'Por favor o sua idade antes de continuar';
        mensagem.style.color = 'red';
        mensagem.style.border = "2px solid red";
        return;
    }else{
        mensagem.style.border = "2px solid green";
    }
    if(idade.value < 18){
        mensagem.textContent = 'Você precisa ter mais de 18 anos para acessar esta pagina';
        mensagem.style.color = 'red';
        mensagem.style.border = "2px solid red";
        return;
    }else{
        mensagem.style.border = "2px solid green";
    }

    mensagem.textContent = `Bem-vindo, ${nome.value}! Seu registro foi concluído com sucesso!`
    mensagem.style.color = 'green';

    nome.value = '';
    idade.value = '';
}

botaoEnviar.addEventListener('click', validarFormulario)