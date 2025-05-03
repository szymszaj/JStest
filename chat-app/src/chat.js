import { db } from "./firebase-config";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

export async function sendMessage(user, message) {
  try {
    await addDoc(collection(db, "messages"), {
      user: user.email,
      message: message,
      timestamp: new Date(),
    });
  } catch (error) {
    console.error("Błąd wysyłania wiadomości:", error.message);
  }
}

export function listenForMessages(callback) {
  const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
  onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map((doc) => doc.data());
    callback(messages);
  });
}
