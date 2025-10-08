const btnContainer = document.querySelector(".btn-chat-widget");
const btnOpen = document.querySelector(".btn-chat-widget button");
const boxChat = document.querySelector(".chat-widget-container .chat-widget-Box");
const btnClose = document.querySelector(".chat-widget-Box .head i");
const boxMessage = document.querySelector(".chat-widget-container .chat-widget-Box .body .boxMessage");
const messageDetails = document.querySelector(".chat-widget-container .chat-widget-Box .message-details");
const btnMessageAll = document.querySelector(".chat-widget-Box span.i-message");
const inputGroup = document.querySelector(".chat-widget-container .chat-widget-Box .body .input-group");
const btnSend = document.querySelector(".chat-widget-container .chat-widget-Box .message-details .inputSend button");
const inputChat = document.querySelector(".chat-widget-container .chat-widget-Box .message-details .inputSend input");
const messages = document.querySelector(".chat-widget-container .chat-widget-Box .message-details .messagesBox");

const btnModal = document.querySelectorAll(".our-stores .stores-cards .main_btn");


//! فتح وقفل البوكس
btnOpen.addEventListener("click", function () {
    if (boxChat.classList.contains("closeBox")) {
        boxChat.classList.add("openBox");
        boxChat.classList.remove("closeBox");
        // هيخفى الزرار
        btnContainer.classList.add("hideBtnBox");
        btnContainer.classList.remove("showBtnBox");
    }
    else {
        boxChat.classList.add("closeBox");
        boxChat.classList.remove("openBox");
        // هيظهر الزرار
        btnContainer.classList.remove("hideBtnBox");
        btnContainer.classList.add("showBtnBox");
    }
});

//! لما يدوس على الـ X يقفله
btnClose.addEventListener("click", function () {
    boxChat.classList.add("closeBox");
    boxChat.classList.remove("openBox");
    // يظهر الزرار تانى
    btnContainer.classList.add("showBtnBox");
    btnContainer.classList.remove("hideBtnBox");
});

//! Message-Details فتح
boxMessage.addEventListener("click",function(){
    messageDetails.classList.remove("d-none");
    boxMessage.classList.add("d-none");
    inputGroup.classList.add("d-none");
    btnMessageAll.classList.remove("d-none");
    inputChat.focus();
});

//! Message-Details قفل
btnMessageAll.addEventListener("click",function(){
    messageDetails.classList.add("d-none");
    boxMessage.classList.remove("d-none");
    inputGroup.classList.remove("d-none");
    btnMessageAll.classList.add("d-none");
});

//! (مراسلة) Modal تعديل إخفاء ال
btnModal.forEach( (btn) => {
    
    btn.addEventListener("click",function(){
        if (boxChat.classList.contains("closeBox")) {
            boxChat.classList.add("openBox");
            boxChat.classList.remove("closeBox");

            messageDetails.classList.remove("d-none");
            boxMessage.classList.add("d-none");

            inputGroup.classList.add("d-none");
            btnMessageAll.classList.remove("d-none");
            inputChat.focus();

            // هيخفى الزرار
            btnContainer.classList.add("hideBtnBox");
            btnContainer.classList.remove("showBtnBox");
        }
    });
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


