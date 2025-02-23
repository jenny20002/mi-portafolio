import styled from "styled-components";
import React from "react";
// import Footer from "./Footer.js";
import Nabvar from "./Nabvar.js";
import Contact from "./Contact.js";
import Home from "./Home.js";

const BodyStyled = styled.body`
  background: -webkit-linear-gradient(
    top right,
    rgb(98, 88, 145),
    rgb(0, 7, 89)
  );
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  border: 0;
`;
function LandingPage() {
  return (
    <BodyStyled>
      <Contact />
      <Nabvar />
      <Home/> 
      {/* <Footer />  */}
    </BodyStyled>
  );
} 

export default LandingPage;
