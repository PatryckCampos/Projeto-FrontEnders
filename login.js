function validar(formulario){
   // INÍCIO Validação de EMAIL
    if(formulario.email.value == ''){
        alert("O campo e-mail é obrigatório.");
        return false;
    }
    if(formulario.email.value.indexOf(('@' && '.'),0)== -1){
    document.getElementById("error-email").innerHTML = "Email inválido"
    return false;
} else{document.getElementById("error-email").innerHTML = ""}
//FIM EMAIL
}


// INICIO Validação de SENHA
var btn = document.querySelector('#entrar');

const regexMaiusculo = /[A-Z]/gi;

const regexMinusculo = /[a-z]/gi;

const regexNumeros = /[0-9]/gi;

const especial = /[~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<,(,)]/

    btn.addEventListener('click', function validarSenha(){
        if(senha.value == ''){
           document.getElementById("error-senha").innerHTML = "A senha é obrigatória" 
           return false;
    }
    
    if(senha.value.match(regexMaiusculo) && senha.value.match(regexMinusculo) && senha.value.match(regexNumeros) && senha.value.match(especial) && senha.value.length >= 8){
        document.getElementById("error-senha").innerHTML = "";
    
    }
                                //TEXTO DO ERRO
    else{document.getElementById("error-senha").innerHTML = "Senha inválida"}
    })



    //Mostrar senha
   var senhaEimagem = document.querySelector('#mostrar-senha');
   var input = document.querySelector('#senha');
   var icon = document.querySelector('.imgSenha');
   

   icon.addEventListener('click', function(){
    senhaEimagem.classList.toggle('visible');
    if(senhaEimagem.classList.contains('visible')) {
        icon.src="imagens/eye-off.svg";
        input.type="text";
    }
    else{icon.src = "imagens/eye.svg";
    input.type="password"; 
}
   });
   








