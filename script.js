console.log("Script loaded");

ComfyJS.onConnected = (address, port) => {
    console.log("Connected to Twitch!", address, port);
};

ComfyJS.onChat = (user, message, flags, self, extra) => {
    console.log("CHAT:", user, message);

    const chat = document.getElementById("chat");

    const box = document.createElement("div");
    box.className = "message";

    box.innerHTML = `
        <div class="username">${user}</div>
        <div class="text">${message}</div>
    `;

    chat.prepend(box);

    setTimeout(() => box.remove(), 6500);
};

console.log("Joining channel:", CHANNEL);
ComfyJS.Init(CHANNEL);
