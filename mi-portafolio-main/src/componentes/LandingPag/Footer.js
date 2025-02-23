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
const StyleDiv = styled.div`
  margin-top: 10px;
  margin-left: 100px;
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
function Footer() {
  return ( <div>{BasicButtons()}</div>);
}
export default Footer;
