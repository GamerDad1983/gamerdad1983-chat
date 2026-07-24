ComfyJS.onConnected = ( address, port ) => {
    console.log("Connected!");
};

ComfyJS.onChat = ( user, message, flags, self, extra ) => {

    console.log(user + ": " + message);

    const chat = document.getElementById("chat");

    const box = document.createElement("div");
    box.className = "message";

    box.innerHTML = `
        <div class="username">${user}</div>
        <div class="text">${message}</div>
    `;

    chat.appendChild(box);

    setTimeout(() => {
        box.remove();
    }, 6000);

};

ComfyJS.Init("gamerdad1983");
