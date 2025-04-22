import React from "react";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Usuario autenticado:", result.user);
    } catch (error) {
      console.error("Error en la autenticación:", error);
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
    </div>
  );
};

export default Login;
