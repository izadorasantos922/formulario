const usuario = "vinicius@gmail.com"
const password = "252623"

function check_login (){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(usuario == email && password == senha){
     document.location.href ="loged.html"
    }else{
        alert ("Usuário e senha errados")
        document.getElementById("forget").style.display = "flex"
    }

}