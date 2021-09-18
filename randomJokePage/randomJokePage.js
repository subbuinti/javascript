let jokeTextEl = document.getElementById("jokeText");
let spinnerEl = document.getElementById("spinner");
let jokerBtnEl = document.getElementById("jokeBtn");

let options = {
    method: "GET"
};

function getRandomJoke() {
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");

    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let randomJoke = jsonData.value;

            spinnerEl.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");

            jokeTextEl.textContent = randomJoke;
        });
}

jokerBtnEl.addEventListener("click", getRandomJoke);