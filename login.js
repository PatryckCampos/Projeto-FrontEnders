var btn = document.querySelector('#entrar');
var done
var doneSenha
var botaoEmail = btn.addEventListener('click', function validar(){
   // INÍCIO Validação de EMAIL
    if(email.value == ''){
        document.getElementById("error-email").innerHTML = "O email é obrigatório";
        done = 0
    return false;
    }
    else if(email.value.indexOf(('@' && '.'),0)== -1){
    document.getElementById("error-email").innerHTML = "Email inválido"
    done = 0;
} else{document.getElementById("error-email").innerHTML = ""; done = 1}});
// FIM DO EMAIL


// INICIO Validação de SENHA


const regexMaiusculo = /[A-Z]/gi;

const regexMinusculo = /[a-z]/gi;

const regexNumeros = /[0-9]/gi;

const especial = /[~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<,(,)]/

    var botaoSenha = btn.addEventListener('click', function validarSenha(){
        if(senha.value == ''){
           document.getElementById("error-senha").innerHTML = "A senha é obrigatória" 
           return false;
           }
    
    if(senha.value.match(regexMaiusculo) && senha.value.match(regexMinusculo) && senha.value.match(regexNumeros) && senha.value.match(especial) && senha.value.length >= 8){
        document.getElementById("error-senha").innerHTML = "";
        doneSenha = 1;
        
    
    }else{document.getElementById("error-senha").innerHTML = "Senha inválida"; doneSenha = 0}
    });
   
    function validarTotal(){
        if(done == 1 && doneSenha == 1){
            location.href="home.html";
            return false;
        }
    }
// FIM validação senha


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