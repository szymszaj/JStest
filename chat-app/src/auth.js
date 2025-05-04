import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export async function register(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Zarejestrowano pomyślnie:", userCredential.user);
    alert("Rejestracja zakończona sukcesem! Możesz się teraz zalogować.");
  } catch (error) {
    console.error("Błąd rejestracji:", error.message);
    alert("Rejestracja nie powiodła się: " + error.message);
  }
}

export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Zalogowano pomyślnie:", userCredential.user);
  } catch (error) {
    console.error("Błąd logowania:", error.message);
    alert("Logowanie nie powiodło się: " + error.message);
  }
}

export async function logout() {
  try {
    await signOut(auth);
    console.log("Wylogowano pomyślnie!");
    alert("Wylogowano pomyślnie!");
  } catch (error) {
    console.error("Błąd wylogowania:", error.message);
    alert("Wylogowanie nie powiodło się: " + error.message);
  }
}
