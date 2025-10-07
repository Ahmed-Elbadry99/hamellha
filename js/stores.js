const btnOpen = document.querySelector(".chat-widget-container .btn-chat-widget button");
const boxChat = document.querySelector(".chat-widget-container .chat-widget-Box");
const btnClose = document.querySelector(".chat-widget-Box .head i");

const boxMessage = document.querySelector(".chat-widget-container .chat-widget-Box .body .boxMessage");
const messageDetails = document.querySelector(".chat-widget-container .chat-widget-Box .message-details");
const btnMessageAll = document.querySelector(".chat-widget-Box span.i-message");

const inputGroup = document.querySelector(".chat-widget-container .chat-widget-Box .body .input-group");

const btnSend = document.querySelector(".chat-widget-container .chat-widget-Box .message-details .inputSend button");
const inputChat = document.querySelector(".chat-widget-container .chat-widget-Box .message-details .inputSend input");
const messages = document.querySelector(".chat-widget-container .chat-widget-Box .message-details .messagesBox");

//! Box Chat فتح
btnOpen.addEventListener("click", function () {
    if (boxChat.classList.contains("closeBox")) { // مقفول
        // هيفتح البوكس
        boxChat.classList.add("openBox");
        boxChat.classList.remove("closeBox");
        // هيخفى الزرار
        btnOpen.classList.add("hideBtnBox");
        btnOpen.classList.remove("showBtnBox");
    }
    else { // مفتوح
        // هيقفل البوكس
        boxChat.classList.remove("openBox");
        boxChat.classList.add("closeBox");
        // هيظهر الزرار
        btnOpen.classList.remove("hideBtnBox");
        btnOpen.classList.add("showBtnBox");
    }
});

//! Box Chat قفل
btnClose.addEventListener("click", function(){
    if (boxChat.classList.contains("openBox")) { // مفتوح
        // هيقفل البوكس
        boxChat.classList.add("closeBox");
        boxChat.classList.remove("openBox");
        // هيظهر الزرار
        btnOpen.classList.add("showBtnBox");
        btnOpen.classList.remove("hideBtnBox");
    }
    else { // مقفول
        // هيقفل البوكس
        boxChat.classList.remove("closeBox");
        boxChat.classList.add("openBox");
        // هيظهر الزرار
        btnOpen.classList.remove("showBtnBox");
        btnOpen.classList.add("hideBtnBox");
    }
});

//! Message-Details فتح
boxMessage.addEventListener("click",function(){
    messageDetails.classList.remove("d-none");
    boxMessage.classList.add("d-none");
    inputGroup.classList.add("d-none");
    btnMessageAll.classList.remove("d-none");
});

//! Message-Details قفل
btnMessageAll.addEventListener("click",function(){
    messageDetails.classList.add("d-none");
    boxMessage.classList.remove("d-none");
    inputGroup.classList.remove("d-none");
    btnMessageAll.classList.add("d-none");
});


// ببعت رسالة
btnSend.addEventListener("click", function () {
    const text = inputChat.value.trim();
    if (text !== "") {
        const msg = document.createElement("p");
        messages.appendChild(msg);
        msg.classList.add("myMessage");

        msg.innerText = inputChat.value;
        inputChat.value = "";

        messageDetails.scrollTop = messageDetails.scrollHeight; // لما ابعت رسالة ينزل الشات تلقائى لأخر رسالة
    }
});

// click يبعت الرسالة مش شرط Enter عشان لو عملت
inputChat.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        btnSend.click();
    }
});