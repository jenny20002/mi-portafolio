import * as React from "react";
<<<<<<< HEAD
=======
import { useTranslation } from "react-i18next";
>>>>>>> 0f8099d (Implementacion de traduccion)
import Button from "@mui/material/Button";
import { styled as muiStyled } from "@mui/system";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
<<<<<<< HEAD
import { signInWithGoogle } from "../../firebase/auth";
import { signInWithFacebook } from "../../firebase/auth";
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

=======
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useNavigate } from 'react-router-dom';


import {
  getAuth,
  signOut,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

import { signInWithGoogle } from "../../firebase/auth";

// ESTILOS
>>>>>>> 0f8099d (Implementacion de traduccion)
const BarraNav = muiStyled("div")`
  margin-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5%;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const ContenedorBotones = muiStyled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BotonMod = muiStyled(Button)`
  && {
    font-size: 14px;
    font-weight: 600;
    text-transform: none;
    border-radius: 8px;
    padding: 10px 20px;
    margin-left: 10px;
  }
`;

<<<<<<< HEAD
function Nabvar() {
  // Usamos el estado para controlar el modo oscuro
  const [darkMode, setDarkMode] = React.useState(true); // Aquí definimos que el modo oscuro esté activado por defecto

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", // Cambia entre modo oscuro o claro
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BarraNav>
        <BasicButtons />
      </BarraNav>
    </ThemeProvider>
=======
// COMPONENTE PRINCIPAL
function Nabvar() {

  React.useEffect(() => {
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence).catch((error) => {
      console.error("Error al configurar la persistencia:", error);
    });
  }, []);

  return (
      <BarraNav>
        <BasicButtons />
      </BarraNav>
>>>>>>> 0f8099d (Implementacion de traduccion)
  );
}

function BasicButtons() {
<<<<<<< HEAD
  const navigate = useNavigate();

  return (
    <ContenedorBotones>
      <LoginButton />

      {/* Redirigir al usuario a la página de PersonalInfoForm */}
      <BotonMod variant="outlined" onClick={() => navigate("/crea-tu-portafolio")}>
        Crea tu portafolio
      </BotonMod>

      <BotonMod variant="outlined" onClick={boton3}>
        Plantillas
      </BotonMod>
      <BotonMod variant="outlined" onClick={boton4}>
        Descargas
      </BotonMod>
=======
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);

  React.useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user || null);
    });
    return () => unsubscribe();
  }, []);

  const handlePortafolioClick = () => {
    if (currentUser) {
      window.location.href = "/crea-tu-portafolio";
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setCurrentUser(null); // Asegura que el estado se actualiza inmediatamente
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  const handleDescargasClick = () => {
    navigate('/vista-previa');

  };
  return (
    <ContenedorBotones>
      <LoginButton
        isOpen={isLoginModalOpen}
        onOpen={() => setIsLoginModalOpen(true)}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={(user) => {
          setCurrentUser(user);
          setIsLoginModalOpen(false);
        }}
      />

      <BotonMod variant="outlined" onClick={handlePortafolioClick}>
        {t('Crea tu portafolio')}
      </BotonMod>
      <BotonMod variant="outlined" onClick={() => alert("Todavía no está programado 3")}>
       {t('Plantillas')}
      </BotonMod>
      <BotonMod variant="outlined" onClick={handleDescargasClick}>
        {t('Descargas')}
      </BotonMod>

      {currentUser && (
        <BotonMod variant="contained"  onClick={handleLogout}>
          {t('Log out')}
        </BotonMod>
      )}
>>>>>>> 0f8099d (Implementacion de traduccion)
    </ContenedorBotones>
  );
}

<<<<<<< HEAD
function LoginButton() {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [registeredUsers, setRegisteredUsers] = React.useState({});

  React.useEffect(() => {
    const storedUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || {};
    setRegisteredUsers(storedUsers);
  }, []);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleEmailSubmit = () => {
    if (email && password) {
      const storedUsers = { ...registeredUsers };
      if (storedUsers[email] && storedUsers[email] === password) {
        setMessage(`¡Bienvenido de nuevo, ${email}!`);
      } else {
        storedUsers[email] = password;
        localStorage.setItem("registeredUsers", JSON.stringify(storedUsers));
        setMessage(`Correo registrado: ${email}`);
      }
      setRegisteredUsers(storedUsers);
      setOpen(true);
      setModalOpen(false);
      // Limpiar los campos después del envío
      setEmail("");
      setPassword("");
    } else {
      setMessage("Por favor, ingrese un correo y contraseña válidos.");
      setOpen(true);
=======
function LoginButton({ isOpen, onOpen, onClose, onLoginSuccess }) {
  const { t } = useTranslation();
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailSubmit = () => {
    const auth = getAuth();
    
    if (!email || !password) {
      setMessage("Por favor, ingrese un correo y contraseña válidos.");
      return;
    }
  
    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
  
    // Establecer la persistencia dentro de la función de login
    setPersistence(auth, browserSessionPersistence)
      .then(() => signInWithEmailAndPassword(auth, email, password))
      .then(({ user }) => {
        setMessage(`¡Bienvenido de nuevo, ${user.email}!`);
        onLoginSuccess(user);
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          // Si el usuario no existe, intentamos registrarlo
          createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
              setMessage(`Usuario registrado correctamente: ${user.email}`);
              onLoginSuccess(user);
            })
            .catch((error) => {
              if (error.code === "auth/email-already-in-use") {
                setMessage("Este correo ya está registrado. Intenta iniciar sesión.");
              } else {
                console.error("Error al registrar usuario:", error);
                setMessage(error.message || "Error al registrar usuario.");
              }
            });
        } else {
          console.error("Error al iniciar sesión:", error);
          setMessage(error.message || "Correo o contraseña incorrectos.");
        }
      });
  };
  

  const handleGoogleLogin = async () => {
    const user = await signInWithGoogle();
    if (user) {
      setMessage(`¡Bienvenido, ${user.email || user.displayName}!`);
      onLoginSuccess(user);
>>>>>>> 0f8099d (Implementacion de traduccion)
    }
  };

  return (
<<<<<<< HEAD
    <div>
      <BotonMod variant="contained" onClick={handleOpenModal}>
        Login
      </BotonMod>

      <Dialog
        open={modalOpen}
        onClose={handleCloseModal}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
          Iniciar Sesión
=======
    <>
      <BotonMod variant="contained" onClick={onOpen}>
        {t('Login')}
      </BotonMod>

      <Dialog open={isOpen} onClose={onClose} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
          {t('Iniciar Sesión')}
>>>>>>> 0f8099d (Implementacion de traduccion)
        </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
          >
            <TextField
<<<<<<< HEAD
              label="Correo Electrónico"
              type="email"
              fullWidth
              variant="outlined"
=======
              label={t("Correo Electrónico")}
              type="email"
              fullWidth
>>>>>>> 0f8099d (Implementacion de traduccion)
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
<<<<<<< HEAD
              label="Contraseña"
              type="password"
              fullWidth
              variant="outlined"
=======
              label={t("Contraseña")}
              type="password"
              fullWidth
>>>>>>> 0f8099d (Implementacion de traduccion)
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Stack direction="column" spacing={2} width="100%" px={3} pb={3}>
<<<<<<< HEAD
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleEmailSubmit}
            >
              Ingresar
            </Button>
            <Typography
              textAlign="center"
              variant="body2"
              color="textSecondary"
            >
              o
            </Typography>
            <Button variant="outlined" fullWidth onClick={signInWithGoogle}>
              Iniciar sesión con Google
            </Button>
            <Button
              variant="outlined"
              fullWidth
              onClick={signInWithFacebook}
              color="primary"
            >
              Iniciar sesión con Facebook
=======
            <Button variant="contained" fullWidth onClick={handleEmailSubmit}>
              {t('Ingresar')}
            </Button>
            <Typography textAlign="center" variant="body2" color="textSecondary">
              o
            </Typography>
            <Button variant="outlined" fullWidth onClick={handleGoogleLogin}>
              {t('Iniciar sesión con Google')}
>>>>>>> 0f8099d (Implementacion de traduccion)
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>

      <Snackbar
<<<<<<< HEAD
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
=======
        open={!!message}
        autoHideDuration={4000}
        onClose={() => setMessage("")}
      >
        <Alert onClose={() => setMessage("")} severity="info" variant="filled">
          {message}
        </Alert>
      </Snackbar>
    </>
>>>>>>> 0f8099d (Implementacion de traduccion)
  );
}

function boton2() {
  const auth = getAuth();
  const user = auth.currentUser; // Verifica si hay un usuario autenticado

  if (user) {
    window.location.href = "index_2.html"; // Redirige si el usuario está autenticado
  } else {
    alert("Debes iniciar sesión para crear un portafolio.");
  }
  <a href="index_2.html" target="_self"></a>;
}
<<<<<<< HEAD
function boton3() {
  alert("Todavía no está programado 3");
}
function boton4() {
  alert("Todavía no está programado 4");
}
=======

>>>>>>> 0f8099d (Implementacion de traduccion)

export default Nabvar;