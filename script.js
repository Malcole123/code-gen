const codeINPUT = document.querySelector("#codeInput");
const verifyBTN = document.querySelector("#verifyBtn");
const displayCode = document.getElementById("displayCode");
const invalidWarning = document.getElementById("invalidCodePrompt");
const login = document.querySelector(".login");
const close_login = document.getElementById("closeLogin")
let redeem_code = ""
const voucherGenerator = ()=>{
    var characters = "abcdefghijklmnopqrstuvwxyz";
    var newStr = ""
    for(let i = 0; i < 6; i++){
        newStr = newStr + characters[Math.floor(Math.random()*26)]
    }
    displayCode.textContent = newStr.toLocaleUpperCase();
    redeem_code = newStr.toLocaleUpperCase()
    return newStr.toLocaleUpperCase()
}

const checkCode = ()=>{
    if(codeINPUT.value.toLocaleUpperCase() === redeem_code){
        invalidWarning.style.display = "none"
        controlLogin("open")
        return true
    }else{
        invalidWarning.style.display = "block"
        return false
    }
}

const controlLogin = (action)=>{
    if(action==='close'){
        login.classList.remove("show_login")
    }else{
        login.classList.add("show_login")
    }
}

codeINPUT.addEventListener('keyup', ()=>{
    invalidWarning.style.display = "none";

})


verifyBTN.addEventListener('click', ()=>{
    checkCode()
})

window.addEventListener('load', ()=>{
    voucherGenerator()
})

close_login.addEventListener("click", ()=>{
    controlLogin("close")
})