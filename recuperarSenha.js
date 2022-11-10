var btn = document.querySelector('#entrar');
var done

function validar() {
    if (email.value == '') {
        document.getElementById("error-email").innerHTML = "O email é obrigatório"
        done = 2
        return false;
    }
    else if (email.value.indexOf(('@' && '.'), 0) == -1) {
        document.getElementById("error-email").innerHTML = "Email inválido"
        done = 0;
    } else { document.getElementById("error-email").innerHTML = ""; done = 1 }
};

var botaoEmail = btn.addEventListener('click', function validar() { });


function validarTotal() {
    if (done == 1) {
        alert('Um e-mail foi enviado a você. Siga as instruções corretamente para recuperar a senha.');
        location.href = "home.html";
        return false;
    }
    else if (done == 2) {
        document.getElementById("error-email").innerHTML = "O email é obrigatório"
    }

    else if (done == 0) {
        document.getElementById("error-email").innerHTML = "Email inválido"
    }
    else {
        document.getElementById("error-email").innerHTML = "";
    }
};