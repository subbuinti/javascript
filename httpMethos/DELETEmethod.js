let userInputEl = document.getElementById("userInput");
let sendDeleteRequestBtnEl = document.getElementById("sendDeleteRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function sendDeleteHTTPRequest() {
    let userInputVal = userInputEl.value;
    let requestUrl = "https://gorest.co.in/public-api/users" + userInputVal;
    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 28cefe15e452f42f0f45a49bd5ba2be89668ccec69db454cb50e0317b68da4e1",
        },
    };

    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");

    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requestStatusEl.classList.remove("d-none");
            loadingEl.classList.add("d-none");

            let requestStatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = httpResponse;
        });
}

sendDeleteRequestBtnEl.addEventListener("click", sendDeleteHTTPRequest);