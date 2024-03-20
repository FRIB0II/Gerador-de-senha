let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button-generate");
let buttonSpecialCharYes = document.querySelector("#button-special-char-yes");
let buttonSpecialCharNo = document.querySelector("#button-special-char-no");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let normalCharset = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
let specialCharset = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789!@$&";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    let pass = "";
    for(let i = 0, n = normalCharset.length; i < sliderElement.value; ++i){
        pass += normalCharset.charAt(Math.floor(Math.random() * n))
    }
    
    containerPassword.classList.add("hide");

    password.innerHTML = pass;
    novaSenha = pass;
}

function generateSpecialPassword(){
    let pass = "";
    for(let i = 0, n = specialCharset.length; i < sliderElement.value; ++i){
        pass += specialCharset.charAt(Math.floor(Math.random() * n))
    }
    
    containerPassword.classList.add("hide");

    password.innerHTML = pass;
    novaSenha = pass;
}

function showPassword(){
    containerPassword.classList.remove("hide");
}

function copyPassword(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}