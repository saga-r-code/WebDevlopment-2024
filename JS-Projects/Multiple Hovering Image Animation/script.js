let elem_img = document.querySelectorAll(".elem");

elem_img.forEach(function (val) {
    // console.log(val.childNodes[3])

  val.addEventListener("mouseenter", function () {
    val.childNodes[3].style.opacity = 1;
  });

  val.addEventListener("mouseleave", function () {
    val.childNodes[3].style.opacity = 0;
  
  });

  val.addEventListener("mousemove", function(dets){
    val.childNodes[3].style.left = dets.x + "px";

  })
});

