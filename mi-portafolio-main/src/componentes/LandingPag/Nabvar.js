import styled from "styled-components";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled as muiStyled } from "@mui/system";

const BotonMod1 = muiStyled(Button)`
  && {
    font-size: 12px !important; /* Asegúrate de que este estilo se aplique */
  } 
    font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 160px;
  height: 30px;
  color:rgb(231, 245, 249);
  border-radius: 30px;
  background-color: rgb(211, 165, 0);
  
`;
const BotonMod = muiStyled(Button)`
  && {
    font-size: 12px !important; /* Asegúrate de que este estilo se aplique */
  } 
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 160px;
  height: 30px;
  color:rgb(231, 245, 249);
  border-radius: 30px;
  
`;
const StyleDiv = styled.div`
  margin-top: 10px;
  margin-left: 100px;
`;

function BasicButtons() {
  return (
    <StyleDiv>
      <Stack spacing={2} direction="row">
        {/* <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>  estilos diferentes de botones*/}
        <BotonMod1 variant="outlined" >Login</BotonMod1>
        <BotonMod variant="outlined">Crea tu portafolio</BotonMod>
        <BotonMod variant="outlined">Plantillas</BotonMod>
        <BotonMod variant="outlined">Descargas</BotonMod>
      </Stack>
    </StyleDiv>
  );
}
const BarraNav = styled.nav`
  width: 100vw;
  height: 30px;
  text-align: left;
`;

function Nabvar() {
  return (
    <BarraNav>
      {/* <ElementosNav>Login</ElementosNav>
      <ElementosNav>Crea tu portafolio</ElementosNav>
      <ElementosNav>Plantillas</ElementosNav>
      <ElementosNav>Descargas</ElementosNav> */}
      {BasicButtons()}
    </BarraNav>
  );
}

export default Nabvar;
