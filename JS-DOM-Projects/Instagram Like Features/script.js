let photo = document.querySelector(".conatiner");
let like = document.querySelector("i");

photo.addEventListener("dblclick", function () {
  like.style.transform = "translate(-50%, -50%) scale(1)";
  like.style.opacity = 0.8;


  setTimeout(() => {
   like.style.opacity = 0;
   like.style.transform = "translate(-50%, -50%) scale(0)";
 },1000);



});
