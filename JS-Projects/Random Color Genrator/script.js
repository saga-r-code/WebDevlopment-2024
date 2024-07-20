const btn = document.body.querySelector(".btn");

// btn.addEventListener("click", () => {
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
// document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// });

btn.addEventListener("click", () => {
  const hax = "16777215";
  const haxCodeGenrator = Math.floor(Math.random() * hax);
//   console.log(haxCodeGenrator)
  haxcode = "#" + haxCodeGenrator.toString(16)
 document.body.style.backgroundColor = haxcode


});
