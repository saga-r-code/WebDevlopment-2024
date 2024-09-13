const input = document.body.getElementsByClassName("qr-input")[0];
const btn = document.body.getElementsByClassName("qr-btn")[0];
const img = document.body.getElementsByClassName("qr-img")[0];

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const inputvalue = input.value
    console.log(inputvalue)
    if(!inputvalue){
        alert("Please Enter Text ")
        return
    }
    else {
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
        img.alt = `${inputvalue}`;
    }
});
