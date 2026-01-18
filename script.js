const passwordInput = document.querySelector('input');
let length= 12
let upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase= "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*()_+-=[]{}|/<>?`~"

let allChar = upperCase + lowerCase + number + symbol

function generatePassword(){
let password=""

password +=upperCase[Math.floor(Math.random() * upperCase.length)]
password +=lowerCase[Math.floor(Math.random() * lowerCase.length)]
password +=number[Math.floor(Math.random() * number.length)]
password +=symbol[Math.floor(Math.random() * symbol.length)]


while(length > password.length){
    password += allChar[Math.floor(Math.random() * allChar.length)]
}

passwordInput.value = password

}

const button = document.querySelector('.button-box');
button.addEventListener("click", ()=>{
    generatePassword()
})

const copyBtn = document.querySelector('.copy-btn');

 copyBtn.addEventListener ('click' , () => {
    copyPassword()
 } );
function copyPassword(){
        passwordInput.select();
        document.execCommand("copy")
    }




