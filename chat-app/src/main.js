import { login, register, logout } from "./auth";
import { sendMessage, listenForMessages } from "./chat";

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const chatForm = document.getElementById("chat-form");
const messagesContainer = document.getElementById("messages");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  await login(email, password);
});

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  await register(email, password);
  e.target.reset();
});

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = e.target.message.value;
  const user = auth.currentUser;
  if (user) {
    await sendMessage(user, message);
    e.target.message.value = "";
  } else {
    console.error("Użytkownik niezalogowany");
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
