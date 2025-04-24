<<<<<<< HEAD
// Importar las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
=======
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
>>>>>>> 0f8099d (Implementacion de traduccion)

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAAa56oEzwZ6SSFAdEtPNFGmjFKH4p7K4Y",
  authDomain: "mi-portafolio-63812.firebaseapp.com",
  projectId: "mi-portafolio-63812",
<<<<<<< HEAD
  storageBucket: "mi-portafolio-63812.firebasestorage.app",
=======
  storageBucket: "mi-portafolio-63812.appspot.com", 
>>>>>>> 0f8099d (Implementacion de traduccion)
  messagingSenderId: "515087631381",
  appId: "1:515087631381:web:c961a44a1ffe0ab375fa1c"
};

<<<<<<< HEAD
=======

>>>>>>> 0f8099d (Implementacion de traduccion)
// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Configurar los proveedores de autenticación
const googleProvider = new GoogleAuthProvider();
<<<<<<< HEAD
googleProvider.setCustomParameters({ prompt: "select_account" }); // Forzar selección de cuenta

const facebookProvider = new FacebookAuthProvider();

// Exportar configuraciones para usarlas en otros archivos
export { auth, googleProvider, facebookProvider };
=======
googleProvider.setCustomParameters({ prompt: "select_account" });


// Exportar configuraciones para usarlas en otros archivos
export { auth, googleProvider};
>>>>>>> 0f8099d (Implementacion de traduccion)
