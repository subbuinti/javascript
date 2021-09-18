let questionFormEl = document.getElementById("questionsForm");

let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");
let resultMsgEl = document.getElementById("resultMsg");

let capitalCity = "Delhi";
let selectdCity = null;

cityHyderabadEl.addEventListener("change", function(event) {
    selectdCity = event.target.value;
});

cityChennaiEl.addEventListener("change", function(event) {
    selectdCity = event.target.value;
});

cityDelhiEl.addEventListener("change", function(event) {
    selectdCity = event.target.value;
});

cityMumbaiEl.addEventListener("change", function(event) {
    selectdCity = event.target.value;
});

questionFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectdCity === null) {
        resultMsgEl.textContent = "Please select the City!";
        resultMsgEl.style.color = "#dc3545";
    } else if (selectdCity === capitalCity) {
        resultMsgEl.textContent = "Correct Answer!";
        resultMsgEl.style.color = "#2b9a40";
    } else {
        resultMsgEl.textContent = "Wrong Answer!";
        resultMsgEl.style.color = "#dc3545";
    }
});