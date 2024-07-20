let newWebsite = "New Website Coming Soon....";
document.getElementById("newWebsite").innerHTML = newWebsite;

let input = document.querySelectorAll("input");
let endDate = "30 July 2024 11:00 AM";

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000; // Difference in seconds

    if (diff > 0) {
        input[0].value = Math.floor(diff / 3600 / 24); // Days 
        input[1].value = Math.floor(diff / 3600) % 24; // Hours
        input[2].value = Math.floor(diff / 60) % 60; // Minutes
        input[3].value = Math.floor(diff % 60); // Seconds
    } else {
        input[0].value = 0;
        input[1].value = 0;
        input[2].value = 0;
        input[3].value = 0;
    }
};

setInterval(clock, 1000);
clock();


//1 hours = 3600 sec {diff/sec} convert into hours
