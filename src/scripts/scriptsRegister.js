const viewPasswordRegister = document.querySelector("#view-password-register-image")
const inputPasswordRegister = document.querySelector("#input-password-register")

const viewPasswordConfirm = document.querySelector("#view-password-register-confirm-image")
const inputPasswordRegisterConfirm = document.querySelector("#input-password-register-confirm")

const viewPasswordRegisterFunction =()=>{
    if(inputPasswordRegister.type === "password"){
        inputPasswordRegister.type = "text"
        viewPasswordRegister.src = "src/images/notVisibility.png"
    }else{
        inputPasswordRegister.type = "password"
        viewPasswordRegister.src = "src/images/visibility.png"
    }
}

const viewPasswordConfirmFunction =()=>{
    if(inputPasswordRegisterConfirm.type === "password"){
        inputPasswordRegisterConfirm.type = "text"
        viewPasswordConfirm.src = "src/images/notVisibility.png"
    }else{
        inputPasswordRegisterConfirm.type = "password"
        viewPasswordConfirm.src = "src/images/visibility.png"
    }
}

viewPasswordRegister.addEventListener("click", function(){
    viewPasswordRegisterFunction()
})

viewPasswordConfirm.addEventListener("click", function(){
    viewPasswordConfirmFunction()
})
