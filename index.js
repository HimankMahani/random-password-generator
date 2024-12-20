const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



document.getElementById("generate").addEventListener("click", function() {
    let password1 = "";
    let password2 = "";

    for (let i = 0; i <= 15; i++) {
    password1 += characters[Math.floor(Math.random() * characters.length)];
    password2 += characters[Math.floor(Math.random() * characters.length)];
    }

    let pass1 = document.getElementById("pass1");
    let pass2 = document.getElementById("pass2");
    pass1.textContent = password1;
    pass2.textContent = password2;
});

document.getElementById("pass1").addEventListener("click", function() {
    let copyText = document.getElementById("pass1").textContent;
    navigator.clipboard.writeText(copyText).then(function() {
        alert("Password copied to clipboard!");
    });
});

document.getElementById("pass2").addEventListener("click", function() {
    let copyText = document.getElementById("pass2").textContent;
    navigator.clipboard.writeText(copyText).then(function() {
        alert("Password copied to clipboard!");
    });
});