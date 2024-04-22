let main = document.querySelector(".main");
let moving = document.querySelector(".cusrsor");

main.addEventListener("mousemove", function (dets) {
  
    moving.style.left = dets.x + "px";
    moving.style.top = dets.y + "px"; 
  });