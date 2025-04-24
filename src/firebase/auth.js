<<<<<<< HEAD
import { signInWithPopup, signOut, FacebookAuthProvider, getRedirectResult } from "firebase/auth";
import { auth, googleProvider } from "./firebase"; 
const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({
  'display': 'popup'
});


// **Google Authentication**
export const signInWithGoogle = async () => {
  try {
    await auth.signOut(); // Evita sesiones activas antes de autenticarse
=======
import {
  signInWithPopup,
  signOut,
  getRedirectResult,
  setPersistence,
  browserSessionPersistence
} from "firebase/auth";

import { auth, googleProvider} from "./firebase";


// Iniciar sesión con Google
export const signInWithGoogle = async () => {
  try {
    await auth.signOut(); // Limpiar sesión previa
    await setPersistence(auth, browserSessionPersistence);
>>>>>>> 0f8099d (Implementacion de traduccion)
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Usuario autenticado con Google:", result.user);
    return result.user;
  } catch (error) {
    handleAuthError(error, "Google");
<<<<<<< HEAD
    return null; // Devuelve null en lugar de lanzar error para mejor control
  }
};

// **Facebook Authentication**
export const signInWithFacebook = async () => {
  try {
    await auth.signOut(); // Cierra sesión antes de iniciar otra
    const result = await signInWithPopup(auth, facebookProvider);
    console.log("Usuario autenticado con Facebook:", result.user);
    return result.user;
  } catch (error) {
    handleAuthError(error, "Facebook");
=======
>>>>>>> 0f8099d (Implementacion de traduccion)
    return null;
  }
};

<<<<<<< HEAD
// **Cerrar Sesión**
=======


// Cerrar sesión
>>>>>>> 0f8099d (Implementacion de traduccion)
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("Sesión cerrada exitosamente.");
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

<<<<<<< HEAD
// **Función para manejar errores de autenticación**
const handleAuthError = (error, providerName) => {
  if (error.code === 'auth/cancelled-popup-request') {
    console.log(` El usuario intentó iniciar sesión con ${providerName} pero se canceló.`);
  } else if (error.code === 'auth/popup-closed-by-user') {
    console.log(` El usuario cerró la ventana emergente de ${providerName} antes de autenticarse.`);
  } else {
    console.error(` Error en la autenticación con ${providerName}:`, error);
  }
};

// **Obtener el resultado de redirección (para Facebook)**
export const getFacebookRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    if (result) {
      const user = result.user;
      console.log("Usuario redirigido con Facebook:", user);
      return user;
    }
  } catch (error) {
    console.error("Error al obtener el resultado de redirección de Facebook:", error);
  }
};
=======
// Manejar errores de autenticación
const handleAuthError = (error, providerName) => {
  if (error.code === "auth/cancelled-popup-request") {
    console.log(`El usuario canceló el intento de autenticarse con ${providerName}.`);
  } else if (error.code === "auth/popup-closed-by-user") {
    console.log(`El usuario cerró la ventana emergente de ${providerName} antes de autenticarse.`);
  } else {
    console.error(`Error en la autenticación con ${providerName}:`, error);
  }
};

>>>>>>> 0f8099d (Implementacion de traduccion)
