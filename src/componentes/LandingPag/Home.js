import styled from "styled-components";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled as muiStyled } from "@mui/system";
import HomeC from "./HomeC.css";

const SpanStyled = styled.span`
  color: white;
  position: relative;
  font-family: "Poppins", sans-serif; /* Cambia la fuente */
  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 3px;
    left: 0;
    bottom: 0;
   background:  rgb(4, 112, 253);
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
  }
`;

const TituloGrande = styled.h1`
  font-size: 45px; /* Aumentar el tamaño del texto */
  color: black;
  font-family: "Goblin One", serif; /* Cambia la fuente */
  font-weight: bold; /* Negrita opcional */
  margin-bottom: 25px; /* Separar el título del siguiente contenido */
  margin-left: 50px; /* Mueve el texto a la derecha */
  margin-top: 30px; /* Mueve el texto hacia abajo */
`;

const Subtitulo = styled.p`
  font-size: 24px; /* Aumentar el tamaño del texto */
  color: #333;
  margin-bottom: 15px; /* Separar los subtítulos de los siguientes elementos */
  margin-left: 50px; /* Mueve el texto a la derecha */
  line-height: 1; /* Ajusta el espacio entre renglones */
`;

const TextoFinal = styled.p`
  font-size: 28px; /* Aumentar el tamaño del texto */
  color: #333;
  margin-top: 20px;
  font-weight: bold; /* Negrita opcional */
  margin-left: 50px; /* Mueve el texto a la derecha */
 
`;

function Home() {
  return (
    <div className="mainClass">
      <div className="sectionIzquierdoClass">
        <div className="divContenedor1">
          <TituloGrande>HELLO I'M !</TituloGrande>
        </div>
        <div className="divContenedor2">
          <Subtitulo>
            {IconoCheck()}
            <SpanStyled> Crea tu propio portafolio</SpanStyled>
          </Subtitulo>
        </div>
        <div className="divContenedor3">
          <Subtitulo>
            {IconoCheck()} <SpanStyled>Selecciona una Plantilla.</SpanStyled>
          </Subtitulo>
        </div>
        <div className="divContenedor4">
          <Subtitulo>
            {IconoCheck()} <SpanStyled>Rellena con tus datos personales.</SpanStyled>
          </Subtitulo>
        </div>
        <div className="divContenedor5">
          <Subtitulo>
            {IconoCheck()} <SpanStyled>Descarga tu currículum Vitae.</SpanStyled>
          </Subtitulo>
        </div>
        <div className="divContenedor6">
          <TextoFinal>
            <SpanStyled>Crear tu currículum nunca había sido tan fácil.</SpanStyled>
          </TextoFinal>
        </div>
      </div>
      <div class="asideDerechoClass"><div class="contenedorImagen1"><div class="contenedorImagen2"></div></div></div>
    </div>
  );
}

const BotonMod1 = muiStyled(Button)`
  && {
    font-size: 12px !important;
  }
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 160px;
  height: 30px;
  color: rgb(251, 253, 253);
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
        <BotonMod1 variant="contained">Sign in</BotonMod1>
      </Stack>
    </StyleDiv>
  );
}

function IconoCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="#19c1bc"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m5 12l5 5L20 7"
      />
    </svg>
  );
}

export default Home;
