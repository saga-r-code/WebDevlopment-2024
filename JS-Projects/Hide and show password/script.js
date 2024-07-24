var icon = document.body.getElementsByClassName("show")[0];
var password = document.body.getElementsByClassName("password")[0];

icon.style.pointerEvents = "none";
icon.style.opacity = "0.5";

//for begning iocn disable untill user enter password
function handleIcon() {
  if (!password.value) {
    icon.style.pointerEvents = "none";
  } 
  else {
    icon.style.pointerEvents = "auto";
    icon.style.opacity = "1";
}
}

password.addEventListener("input", handleIcon);

//this is for the hide and show functionality
icon.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    icon.setAttribute("src", "open.png");
  } else {
    password.type = "password";
    icon.setAttribute("src", "close.png");
  }
})
