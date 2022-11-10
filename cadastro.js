//  Javascript VIACEP
$(document).ready(function() {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    }
    
    //Quando o campo cep perde o foco.
    $("#cep").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#rua").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");
                $("#ibge").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                        $("#ibge").val(dados.ibge);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});




var btn = document.querySelector('#entrar');
var done;
var doneSenha;
var doneConfirmacao;
var doneNome;
const regexMaiusculo = /[A-Z]/gi;

const regexMinusculo = /[a-z]/gi;

const regexNumeros = /[0-9]/gi;

const especial = /[~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<,(,)]/



function validarNome(){
    if(nome.value == ''){
        doneNome = 2;
        document.getElementById("error-nome").innerHTML = "Nome é obrigatório."
    return false;
    }
else if(nome.value.length < 3) {
    document.getElementById("error-nome").innerHTML = "Nome muito curto."
    doneNome = 0;
    return false;
}
else if(nome.value[0].match(regexMinusculo)) {
    document.getElementById("error-nome").innerHTML = "Comece com a letra minúscula.";
    doneNome = 0;
    return false;
}
else{
    document.getElementById("error-nome").innerHTML = ""
    doneNome = 1;
    return false;
}
}







function validar(){
    if(email.value == ''){
        done = 2;
        document.getElementById("error-email").innerHTML = "Email é obrigatório"
    return false;
    }
    else if(email.value.indexOf(('@' && '.'),0)== -1){
        document.getElementById("error-email").innerHTML = "Email inválido";
        done = 0;
} else{document.getElementById("error-email").innerHTML = ""; done = 1}};


   // INÍCIO Validação de EMAIL
    
// FIM DO EMAIL


// INICIO Validação de SENHA



// VALIDAÇÃO KEYUP
function validarSenha(){
    if(senha.value == ''){
        document.getElementById("error-senha").innerHTML = "A senha é obrigatória";
        doneSenha = 2;
        return false;}
 
 else if(senha.value.match(regexMaiusculo) && senha.value.match(regexMinusculo) && senha.value.match(regexNumeros) && senha.value.match(especial) && senha.value.length >= 8){
     document.getElementById("error-senha").innerHTML = "";
     doneSenha = 1;
     
    }else{document.getElementById("error-senha").innerHTML = "Senha inválida"; doneSenha = 0}
};
    
function validarConfirmacao(){
    if(confirmarSenha.value !== senha.value){
        document.getElementById("error-senha2").innerHTML = "A senha está diferente";
        doneConfirmacao = 0;
        return false;
    }
    else {document.getElementById("error-senha2").innerHTML = "";
doneConfirmacao = 1;}
}
        
   // VALIDAÇÃO CLICK
        function validarTotal(){
        if(done == 1 && doneSenha == 1 && doneNome == 1){
            alert('Você está logado.')
            location.href="home.html";
            return false;
        }
        else if(done == 2){
            document.getElementById("error-email").innerHTML = "O email é obrigatório" 
        }
        
        else if(doneSenha == 2){
            document.getElementById("error-email").innerHTML = "A senha é obrigatória" 
        }
        else if(doneSenha == 0){
            document.getElementById("error-email").innerHTML = "Senha inválida" 
        }
       
        
        else if(done == 0){
            document.getElementById("error-email").innerHTML = "Email inválido"
        }
        
        else {document.getElementById("error-email").innerHTML = ""}};


       
// FIM validação senha e email


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

   var senhaEimagem2 = document.querySelector('#mostrar-senha-dnv');
   var input2 = document.querySelector('#confirmarSenha');
   var icon2 = document.querySelector('.imgSenha');
   

   icon2.addEventListener('click', function(){
    senhaEimagem2.classList.toggle('visible');
    if(senhaEimagem2.classList.contains('visible')) {
        icon2.src="imagens/eye-off.svg";
        input2.type="text";
    }
    else{icon2.src = "imagens/eye.svg";
    input2.type="password"; 
}
   });