const messages = document.querySelector(".app-data .cahtsDetails .cahtsDetailsBox"); // My Message
const inputChat = document.querySelector(".app-data .cahtsDetails .inputSend input"); // Input Chat
const btnSend = document.querySelector(".app-data .cahtsDetails .inputSend button"); // Btn Send
const messageBox = document.querySelector(".app-data .cahtsDetailsBox");
// console.log(messages, inputChat, btnSend, messageBox);

btnSend.addEventListener("click", function () {
    const text = inputChat.value.trim();
    if (text !== "") {
        const msg = document.createElement("p");
        messages.appendChild(msg);
        msg.classList.add("myMessage");

        msg.innerText = inputChat.value;
        inputChat.value = "";

        messageBox.scrollTop = messageBox.scrollHeight; // لما ابعت رسالة ينزل الشات تلقائى لأخر رسالة
    }
});

// click يبعت الرسالة مش شرط Enter عشان لو عملت
inputChat.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        btnSend.click();
    }
});
