const passwordInput = document.body.querySelector(".password");
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
  console.log(password);
}

// passwordInput.addEventListener("click", genpass);

generatePassButton.addEventListener("click", () => {
  genpass();
  passwordInput.innerHTML = passwordInput.value
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
  alert("copy successfully");
});
