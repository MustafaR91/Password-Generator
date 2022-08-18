const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordCopy = document.getElementById('password')

function generate() {
    let inputVal = document.getElementById('input-el')
    let letter1 = Math.floor(Math.random() * characters.length)
    let letter2 = Math.floor(Math.random() * characters.length)
    let letter3 = Math.floor(Math.random() * characters.length)
    let letter4 = Math.floor(Math.random() * characters.length)
    let letter5 = Math.floor(Math.random() * characters.length)
    let letter6 = Math.floor(Math.random() * characters.length)
    let letter7 = Math.floor(Math.random() * characters.length)
    let letter8 = Math.floor(Math.random() * characters.length)
    let letter9 = Math.floor(Math.random() * characters.length)
    let letter10 = Math.floor(Math.random() * characters.length)
    if(inputVal.value == 1) {
        document.getElementById('password').textContent = characters[letter1]
    } else if(inputVal.value == 2) {
        document.getElementById('password').textContent = characters[letter1] + characters[letter2] 
    } else if(inputVal.value == 3) {
        document.getElementById('password').textContent = characters[letter1] + characters[letter2] 
    + characters[letter3]
    } else if(inputVal.value == 4) {
        document.getElementById('password').textContent = characters[letter1] + characters[letter2] 
    + characters[letter3] + characters[letter4]
    } else if(inputVal.value == 5) {
        document.getElementById('password').textContent = characters[letter1] + characters[letter2] 
    + characters[letter3] + characters[letter4] + characters[letter5]
    } else if(inputVal.value == 6) {document.getElementById('password').textContent = characters[letter1] + characters[letter2] 
    + characters[letter3] + characters[letter4] + characters[letter5] + characters[letter6]
    } else if(inputVal.value == 7) {document.getElementById('password').textContent = characters[letter1] + characters[letter2] 
    + characters[letter3] + characters[letter4] + characters[letter5] + characters[letter6] + 
    characters[letter7]
    } else if(inputVal.value == 8) {document.getElementById('password').textContent = characters[letter1] + characters[letter2] 
    + characters[letter3] + characters[letter4] + characters[letter5] + characters[letter6] + 
    characters[letter7] + characters[letter8]
    } else if(inputVal.value == 9) {document.getElementById('password').textContent = characters[letter1] + characters[letter2] 
    + characters[letter3] + characters[letter4] + characters[letter5] + characters[letter6] + 
    characters[letter7] + characters[letter8] + characters[letter9]
    } else if(inputVal.value == 10) {document.getElementById('password').textContent = characters[letter1] + characters[letter2] 
    + characters[letter3] + characters[letter4] + characters[letter5] + characters[letter6] + 
    characters[letter7] + characters[letter8] + characters[letter9] + characters[letter10]
    }
}

passwordCopy.addEventListener('click', function() {
    const passwordBox = document.getElementById("password").innerHTML;
    const el = document.createElement("textarea");
    el.value = passwordBox;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Copied the text: " + passwordCopy.textContent)
})