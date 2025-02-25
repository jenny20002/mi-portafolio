import styled from "styled-components";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled as muiStyled } from "@mui/system";

const BarraNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
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

function BasicButtons() {
  return (
    <ContenedorBotones>
      <BotonMod1 variant="outlined">Login</BotonMod1>
      <BotonMod variant="outlined">Crea tu portafolio</BotonMod>
      <BotonMod variant="outlined">Plantillas</BotonMod>
      <BotonMod variant="outlined">Descargas</BotonMod>
    </ContenedorBotones>
  );
}

function Nabvar() {
  return <BarraNav>{BasicButtons()}</BarraNav>;
}

export default Nabvar;
