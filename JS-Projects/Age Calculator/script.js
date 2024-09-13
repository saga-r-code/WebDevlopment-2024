const date = document.querySelector('input[type="date"]');
let calculate = document.body.getElementsByClassName("btn")[0];
let res = document.body.getElementsByClassName("details")[0]

calculate.addEventListener("click", calculateAge);

date.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  const birthDate = new Date(date.value);
  const today = new Date();

  let bd = birthDate.getDate();
  let bm = birthDate.getMonth() + 1;
  let by = birthDate.getFullYear();

  let td = today.getDate();
  let tm = today.getMonth() + 1;
  let ty = today.getFullYear();

  //difference calaculte
  let diff_date, diff_month;

  //Year Calculate
  let diff_year = ty - by;

  //Month Calculate
  if (tm >= bm) {
    //9 >=10
    diff_month = tm - bm;
  } else {
    diff_year--; //year minus and check previous
    diff_month = 12 + tm - bm; //12 + 9 - 10 == 11month // add 12 to current month
  }

  //Date Calculate
  if (td >= bd) {
    diff_date = td - bd;
  } else {
    diff_month--; //month minus and check previous
    diff_date = getDateInMonth(by, bm) + td - bd; //(2006, 8) output: 31 + 14 - 11 = 34days
  }

  if (diff_month < 0) {
    diff_month = 11;
    diff_year--;
  }

  res.innerHTML += `You are ${diff_year} Years, ${diff_month} Months, ${diff_date} Days Old`
}

function getDateInMonth(year, month) {
  return new Date(year, month, 0).getDate(); //2006, 8  output: 31
}
