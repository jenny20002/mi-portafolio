import styled from "styled-components";
import React from "react";
import Footer from "./Footer.js";
import Nabvar from "./Nabvar.js";
import Contact from "./Contact.js";
import Home from "./Home.js";


<<<<<<< HEAD
=======

>>>>>>> 0f8099d (Implementacion de traduccion)
//// error de body a div mejor
var BodyStyled = styled.div`
   background: -webkit-linear-gradient(
    top right,
    rgb(98, 88, 145),
    rgb(4, 112, 253)
  );
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;

  width: 100%;
  height: 100vh;
  overflow: auto;

  /* Definir la animación */
  @keyframes gradientAnimation {
    0% {
      background: -webkit-linear-gradient(
        top right,
        rgb(98, 88, 145),
        rgb(4, 112, 253)
      );
    }
    50% {
      background: -webkit-linear-gradient(
        top left,
        rgb(218, 93, 155),
        rgb(85, 52, 175)
      );
    }
    100% {
      background: -webkit-linear-gradient(
        top right,
        rgb(98, 88, 145),
        rgb(4, 112, 253)
      );
    }
  }
   
`;
//          Para que no se confundan  el BodyStyled es todo e cuerpo de la pagina
// Desde app.js solo llamamos la (landingPage) y como usamos componentes podemos llamar lo que necesitemos

function LandingPage() {
<<<<<<< HEAD
=======



>>>>>>> 0f8099d (Implementacion de traduccion)
  return (
    <BodyStyled> 
    <Contact />
     <Nabvar />
    <Home/> 
    <Footer /> 


  </BodyStyled>
   
  );
} 

export default LandingPage;