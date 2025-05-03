import { login, register, logout } from "./auth";
import { sendMessage, listenForMessages } from "./chat";

const loginForm = document.getElementById("login-form");
const chatForm = document.getElementById("chat-form");
const messagesContainer = document.getElementById("messages");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  await login(email, password);
});

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = e.target.message.value;
  const user = auth.currentUser;
  if (user) {
    await sendMessage(user, message);
    e.target.message.value = "";
  }
});

listenForMessages((messages) => {
  messagesContainer.innerHTML = "";
  messages.forEach((msg) => {
    const msgElement = document.createElement("div");
    msgElement.textContent = `${msg.user}: ${msg.message}`;
    messagesContainer.appendChild(msgElement);
  });
});
