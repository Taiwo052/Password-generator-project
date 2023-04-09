const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let generatedPwOne = document.getElementById("generated-pw-one")
let generatedPwTwo = document.getElementById("generated-pw-two")
let pwGeneratorBtn = document.getElementById("pw-generator-btn")
let resetPasswordBtn = document.getElementById("reset-password-btn")

let passwordLength = 15

pwGeneratorBtn.addEventListener( "click", function() {
    generatedPwOne.textContent = generatePassword()
    generatedPwTwo.textContent = generatePassword()
})

resetPasswordBtn.addEventListener( "click", function() {
    generatedPwOne.textContent = ""
    generatedPwTwo.textContent = ""
})



function getRandomCharacters(){
    let randomIndexOne = Math.floor( Math.random() * characters.length)
    return characters[randomIndexOne]
}

function generatePassword(){
    let randomPassword = ""
    for ( let i = 0; i < passwordLength; i++ ){
        randomPassword += getRandomCharacters()
    }
    return randomPassword
}
