const viewPasswordLogin = document.querySelector("#view-password-login-image")
const inputPassword = document.querySelector("#input-password-login")

const viewPasswordFunction =()=>{
    if(inputPassword.type === "password"){
        inputPassword.type = "text"
        viewPasswordLogin.src = "src/images/notVisibility.png"
    }else{
        inputPassword.type = "password"
        viewPasswordLogin.src = "src/images/visibility.png"
    }
}

viewPasswordLogin.addEventListener("click", function(){
    viewPasswordFunction()
})