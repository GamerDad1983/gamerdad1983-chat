ComfyJS.onConnected = () => {
    console.log("Connected!");
};

ComfyJS.onChat = (user, message, flags) => {

    console.log("MESSAGE RECEIVED:", user, message);

    const chat = document.getElementById("chat");

    const box = document.createElement("div");
    box.className = "message";

    box.innerHTML = `
        <div class="username">${user}</div>
        <div class="text">${message}</div>
    `;

    chat.prepend(box);

    setTimeout(() => {
        box.remove();
    }, 6500);
};

ComfyJS.Init(CHANNEL);
