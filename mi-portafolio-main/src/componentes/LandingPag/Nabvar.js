import styled from "styled-components";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled as muiStyled } from "@mui/system";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const BarraNav = styled.div`
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

const ContenedorBotones = styled.div`
  display: flex;
  flex-wrap: wrap; /* Ajusta los botones para que no se desborden */
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BotonMod1 = muiStyled(Button)`
  && {
    font-size: 12px !important;
  } 
  margin: 5px; 
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 160px;
  height: 30px;
  color: rgb(231, 245, 249);
  border-radius: 30px;
  background-color: rgb(211, 165, 0);
`;

const BotonMod = muiStyled(Button)`
  && {
    font-size: 12px !important;
  } 
  margin: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 160px;
  height: 30px;
  color: rgb(231, 245, 249);
  border-radius: 30px;
`;
function a() {
  alert("Hola");
}
 
function BasicButtons() {
  return (
    <ContenedorBotones>
      {CustomizedSnackbars()}
      {/* <BotonMod1 variant="outlined" >Login</BotonMod1> */}
      <BotonMod variant="outlined" onClick={boton2}>Crea tu portafolio</BotonMod>
      <BotonMod variant="outlined" onClick={boton3}>Plantillas</BotonMod>
      <BotonMod variant="outlined" onClick={boton4}>Descargas</BotonMod>
    </ContenedorBotones>
  );
}

function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  React.useEffect(() => {
    console.log('Snackbar state on load:', open);
  }, [open]);
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <BotonMod variant="outlined" onClick={handleClick}>Login</BotonMod>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Todavia no esta programado ^_^
        </Alert>
      </Snackbar>
    </div>
  );
}

function boton2(){
  alert("todavia no esta programado 2");
}
function boton3(){
  alert("todavia no esta programado 3");
}
function boton4(){
  alert("todavia no esta programado 4");
}
function Nabvar() {
  return <BarraNav>{BasicButtons()}</BarraNav>;
}


export default Nabvar;
