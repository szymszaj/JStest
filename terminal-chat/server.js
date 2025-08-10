const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const MESSAGES_FILE = "./messages.json";

app.get("/messages", (req, res) => {
  if (!fs.existsSync(MESSAGES_FILE)) return res.json([]);
  const data = fs.readFileSync(MESSAGES_FILE, "utf8");
  res.json(JSON.parse(data || "[]"));
});

app.post("/messages", (req, res) => {
  const { message, user } = req.body;
  if (!message || !user) {
    return res.status(400).json({ error: "Brak wiadomości lub użytkownika" });
  }

  let messages = [];
  if (fs.existsSync(MESSAGES_FILE)) {
    messages = JSON.parse(fs.readFileSync(MESSAGES_FILE, "utf8") || "[]");
  }
  messages.push({ message, user, date: new Date().toISOString() });

  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));
  res.status(201).json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
