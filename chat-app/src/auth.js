import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export async function register(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("Zarejestrowano pomyślnie!");
  } catch (error) {
    console.error("Błąd rejestracji:", error.message);
  }
}

export async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Zalogowano pomyślnie!");
  } catch (error) {
    console.error("Błąd logowania:", error.message);
  }
}

export async function logout() {
  try {
    await signOut(auth);
    console.log("Wylogowano pomyślnie!");
  } catch (error) {
    console.error("Błąd wylogowania:", error.message);
  }
}
