import styled from "styled-components";
import React from "react";
import Footer from "./Footer.js";
import Nabvar from "./Nabvar.js";
import Contact from "./Contact.js";
import Home from "./Home.js";
//// error de body a div mejor
var BodyStyled = styled.div`
  background: -webkit-linear-gradient(
    top right,
    rgb(98, 88, 145),
    rgb(0, 7, 89)
  );
  width: 100%;
  height: 100vh;
   overflow: auto;
`;
//          Para que no se confundan  el BodyStyled es todo e cuerpo de la pagina
// Desde app.js solo llamamos la (landingPage) y como usamos componentes podemos llamar lo que necesitemos
function LandingPage() {
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
