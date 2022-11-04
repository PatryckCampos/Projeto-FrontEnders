function validar(formulario){
    var letrasMaiusculas = /[A-Z]/;
   
    if(formulario.email.value == ''){
        alert("O campo e-mail é obrigatório.");
        return false;
    }
    if(formulario.email.value.indexOf(('@' && '.'),0)== -1){
    alert("E-mail inválido.");
    return false;
}
    if(formulario.senha.value == ''){
        alert("A senha é obrigatória.");
        return false;
    }
    if(formulario.senha.value.length < 8){
    alert("A senha está muito curta.");
    return false;
}
if(formulario.senha.value.length > 16)
    alert("A senha está muito longa");
  
    else if(formulario.senha.value.indexOf(letrasMaiusculas)== -1){
        alert("Deve ter letra maiúscula")

       return false; 
    }


else{alert("Você está logado");
location.href="home.html";
return true;
}
    
}