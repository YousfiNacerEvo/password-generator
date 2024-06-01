//variable
const display = document.querySelector(".display");
const generating  = document.querySelector("#generate");
const copie = document.querySelector("#copie");
const input = document.querySelector("#input");

//main
generating.addEventListener("click", passwordGenerator)
copie.addEventListener("click",copyText)






//function
function passwordGenerator() {
    let lettre = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=@~&!:"
    let password;
    let A = lettre[Math.floor(Math.random()*lettre.length)];
    password = A;
    for (let index = 0; index < 16; index++) {
        A = lettre[Math.floor(Math.random()*lettre.length)];
        password += A;
    }
    display.textContent = `${password}`; 
    //donner un style au button 
    copie.style.border = "none";
    copie.style.backgroundColor = "rgb(86, 85, 85)";
    copie.style.color = "white";
}

function copyText() {
        const textToCopy = display.textContent;
        if(textToCopy.length>=16){
            //copier le mot de pass
             navigator.clipboard.writeText(textToCopy);
            //donner un style au button 
            copie.style.border = " 1px solid #566DE9";
            copie.style.backgroundColor = "white";
            copie.style.color = "#566DE9";
            alert("copie effectuee")
             
        } 
  }
  