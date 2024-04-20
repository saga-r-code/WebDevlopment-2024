let btn_add_remove = document.querySelector(".add-remove");
let isstatus = document.querySelector("span");
let falg = 1;

function buttonclick(){
    btn_add_remove.addEventListener("click", function () {
        if (falg == 0) {
          isstatus.innerHTML = "Stranger";
          isstatus.style.color = "#631111";
      
          btn_add_remove.innerHTML = "Add Friend";
          btn_add_remove.style.backgroundColor = "#06cfc889";
          btn_add_remove.style.color = "white";
      
        //   console.log("no");
          falg++;
        } 
        
        else {
          isstatus.innerHTML = "Friends";
          isstatus.style.color = "greenyellow";
      
          btn_add_remove.innerHTML = "Remove";
          btn_add_remove.style.backgroundColor = "#aca9a9";
          btn_add_remove.style.color = "#080808c6";

        //   console.log("yes");
          falg--;
        }
      });
}

buttonclick();
