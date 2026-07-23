ComfyJS.onChat = (user, message, flags) => {

const chat=document.getElementById("chat");

const box=document.createElement("div");

box.className="message";

box.innerHTML=`

<div class="username">${user}</div>

<div class="text">${message}</div>

`;

chat.appendChild(box);

setTimeout(()=>{

box.remove();

},6500);

}

ComfyJS.Init(CHANNEL);