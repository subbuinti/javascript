let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");

let ImageMaxWidth = 300;
let ImageMinWidth = 100;
let originalImageWidth = 200;
let maxwidthWarningMessage = "Too big. Decrease the size of the Image.";
let minWidthWarningMessage = "can't Visible. Increase the size of the Image."

imageElement.style.width = originalImageWidth + "px";
imageElementElement.textContent = originalImageWidth + "px";

function onIncrement() {
    if (originalImageWidth >= ImageMaxWidth) {
        warningMessageElement.textContent = maxwidthWarningMessage;
    } else {
        originalImageWidth = originalImageWidth + 5;
        let updatedImageWidth = originalImageWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
}

function onDecrement() {
    if (originalImageWidth <= ImageMinWidth) {
        warningMessageElement.textContent = minWidthWarningMessage;
    } else {
        originalImageWidth = originalImageWidth - 5;
        let updatedImageWidth = originalImageWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
}