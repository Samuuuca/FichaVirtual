const User = document.querySelector('#UserName')
const Password = document.querySelector('#UserPassword')

function Login(){

    localStorage.setItem('Usuario', User.value);

    if(User.value == 'Alice' && decodificador(Password.value) == 'Alice' ){ //Alice
        window.location.replace("pages/Ficha.html");
    }
    else if(User.value == 'Adamastor' && decodificador(Password.value) == 'Adamastor' ){ // Mathues
        window.location.replace("pages/Ficha.html");
    }
    else if(User.value == 'Millena' && decodificador(Password.value) == 'Millena' ){ // Millena
        window.location.replace("pages/Ficha.html");
    }
    else if(User.value == 'Manuela' && decodificador(Password.value) == 'Manuela' ){ // Manu
        window.location.replace("pages/Ficha.html");
    }
    else if(User.value == 'Nathalia' && decodificador(Password.value) == 'Nathalia' ){ // Nathalia
        window.location.replace("pages/Ficha.html");
    }
    else{
        alert('Usuario ou senhas Incorretos')
    }
    
}
