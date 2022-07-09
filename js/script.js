function checkPassword(){
    
    if(passwordRepeatInput.value==passwordInput.value){
        passwordRepeatInput.classList.remove("error");
        passwordInput.classList.remove("error");
        errorText.classList.remove("error");

    }else{
        passwordRepeatInput.classList.add("error");
        passwordInput.classList.add("error");
        errorText.classList.add("error");

    }
}

let passwordRepeatInput = document.querySelector("#user_password_repeat");
passwordRepeatInput.addEventListener("input", checkPassword);

let passwordInput = document.querySelector("#user_password");
passwordInput.addEventListener("input", checkPassword);

let errorText = document.querySelector(".password");