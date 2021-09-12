let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let userInputEl = document.getElementById("userInput");
let sendMsgBtnEl = document.getElementById("sendMsgBtn");

let chatBoxContainer = document.getElementById("chatContainer");

sendMsgBtnEl.onclick = function() {
    let inputMsg = userInputEl.value;

    let inputContainer = document.createElement("div");
    inputContainer.classList.add("msg-to-chatbot-container");

    let inputElement = document.createElement("span");
    inputElement.classList.add("msg-to-chatbot");
    inputElement.textContent = inputMsg;
    inputContainer.appendChild(inputElement);
    chatBoxContainer.appendChild(inputContainer);

    userInputEl.value = "";

    getReplyFromChatBox();
}

function getReplyFromChatBox() {
    let msgs = chatbotMsgList.length;
    let chatBotMsg = chatbotMsgList[Math.ceil(Math.random() * msgs) - 1];

    let chatMsgContainer = document.createElement("div");
    chatMsgContainer.classList.add("msg-from-chatbot-container");
    let chatMsgElement = document.createElement("span");
    chatMsgElement.classList.add("msg-from-chatbot");

    chatMsgElement.textContent = chatBotMsg;
    chatMsgContainer.appendChild(chatMsgElement);
    chatBoxContainer.appendChild(chatMsgContainer);
}