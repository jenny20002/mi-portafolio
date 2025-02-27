import styled from "styled-components";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled as muiStyled } from "@mui/system";
import HomeC from "./HomeC.css";










const SpanStyled = styled.span`
  color: white;
  position: relative; /* Asegúrate de que el contenedor padre tenga posición relativa */
  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 3px;
    left: 0;
    bottom: 0; /* Añade esta línea para posicionar el pseudo-elemento al fondo */
    background: rgb(
      211,
      165,
      0
    ); /* Color de fondo para que el pseudo-elemento sea visible */
    transition: width 0.3s; /* Añade una transición para suavizar la animación */
  }
  &:hover::after {
    width: 100%;
  }
`;

function Home() {
  return (
 
    <div class="mainClass">
      <div class="sectionIzquierdoClass"> 
      <div class="divContenedor1"><h1 class="divContenedorhijo1">Comienza a crear</h1></div>
      <div class="divContenedor2"><p class="divContenedorhijo2"> {IconoCheck()}<SpanStyled> Crea tu propio portafolios</SpanStyled></p></div>
            <div class="divContenedor3"><p class="divContenedorHijo3">{IconoCheck()}<SpanStyled>Selecciona una Plantilla.</SpanStyled></p></div>
            <div class="divContenedor4"><p class="divContenedorHijo4">{IconoCheck()}<SpanStyled>Rellena con tus datos personales.</SpanStyled></p></div>
            <div class="divContenedor5"><p class="divContenedorHijo5">{IconoCheck()}<SpanStyled>Descarga tu curriculum Vitae.</SpanStyled></p></div>
            <div class="divContenedor6"><p class="divContenedorHijo6"><SpanStyled>Crear tu curriculum nunca habia sido tan facil.</SpanStyled></p></div>
      </div>
      <div class="asideDerechoClass"><div class="contenedorImagen1"><div class="contenedorImagen2"></div></div></div>
    </div>
    
  );
}

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
const StyleDiv = styled.div`
  margin-top: 10px;
  margin-left: 90%;
`;
function BasicButtons() {
  return (
    <StyleDiv>
      <Stack spacing={2} direction="row">
        <BotonMod1 variant="outlined">Sing in</BotonMod1>
      </Stack>
    </StyleDiv>
  );
}

function IconoCheck() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="#19c1bc"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m5 12l5 5L20 7"
      />
    </svg>
  );
}

export default Home;
