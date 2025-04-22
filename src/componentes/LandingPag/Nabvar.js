import * as React from "react";
import Button from "@mui/material/Button";
import { styled as muiStyled } from "@mui/system";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { signInWithGoogle } from "../../firebase/auth";
import { signInWithFacebook } from "../../firebase/auth";
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  );
}

function BasicButtons() {
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
    </ContenedorBotones>
  );
}

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
    }
  };

  return (
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
        </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
          >
            <TextField
              label="Correo Electrónico"
              type="email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Stack direction="column" spacing={2} width="100%" px={3} pb={3}>
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
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>

      <Snackbar
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
function boton3() {
  alert("Todavía no está programado 3");
}
function boton4() {
  alert("Todavía no está programado 4");
}

export default Nabvar;