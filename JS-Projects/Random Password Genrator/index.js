const passwordInput = document.body.querySelector(".pass");
const copy = document.body.querySelector(".copy");
const generatePassButton = document.body.getElementsByClassName("btn")[0];
console.log(passwordInput);

const passLength = 8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowrCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()_-+=[]~{}<>/";

const allchar = upperCase + lowrCase + number + symbol;

function genpass() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowrCase[Math.floor(Math.random() * lowrCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  for (let i = password.length; i < passLength; i++) {
    password += allchar[Math.floor(Math.random() * allchar.length)];
  }

  passwordInput.value = password;
  copyhandler()
}

function copyhandler(){
 if(!passwordInput.value){
  copy.style.pointerEvents = "none"
 }
 else{
  copy.style.pointerEvents = "auto"
 }
}

generatePassButton.addEventListener("click", () => {
  genpass();
  
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
  alert("copy successfully");
});

copyhandler()
