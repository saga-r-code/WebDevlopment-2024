const btn = document.body.getElementsByTagName("button")[0];
console.log(btn);
let falg = 1;

const ToggleMode = () => {
  if (falg == 1) {
    btn.innerHTML = "Light Mode";
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    document.body.style.transition = ".7s ease-in"

    falg--;
  } else {
    btn.innerHTML = "Dark Mode";
    document.body.style.backgroundColor = "white"

    falg++;
  }
};
