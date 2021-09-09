let counterValueEl = document.getElementById("counterValue");

// getting the value of the clickCount from the localStorage
let clickCount = localStorage.getItem("clickCount");

// checking if the clickCount value exits in the localStorage or not
if (clickCount === null) {
    //Assining 0 to the textContent of the counterValueEl if doesn't exit
    counterValueEl.textContent = 0;
} else {
    //Assining the clickCount value to the textContent of the counterValueEl if it exits
    counterValueEl.textContent = clickCount;
}

function onIncrementCount() {
    let previousCounterValue = counterValueEl.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;

    // updating the clickCount value in the localStorage
    localStorage.setItem("clickCount", updatedCounterValue);
    // updating the counterValueEl textContent
    counterValueEl.textContent = updatedCounterValue;
}