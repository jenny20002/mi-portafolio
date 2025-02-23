import styled from "styled-components";
const DivStyled = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 30px;
  padding-left: 60px;
  margin-bottom: 50px;
  color: white;
`;
const H1styled = styled.h1`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding-left: 100px;
  font-size: 60px;
  font-weight: bold;
  color: white;
`;
const H3styled = styled.h3`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding-left: 80px;
  padding-top:  30px;
  font-size: 45px;
  font-weight: bold;
  color: white;
`;
const Main = styled.main``;

const SpanStyled = styled.span`
  color: white;
  position: relative; /* Asegúrate de que el contenedor padre tenga posición relativa */

  &::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 3px;
    left: 0;
    bottom: 0; /* Añade esta línea para posicionar el pseudo-elemento al fondo */
    background:  rgb(211, 165, 0); /* Color de fondo para que el pseudo-elemento sea visible */
    transition: width 0.3s; /* Añade una transición para suavizar la animación */
  }

  &:hover::after {
    width: 100%;
  }
`
function Home() {
  return (
    <Main>
      <H1styled>Hello I'm!</H1styled>
      <DivStyled>{IconoCheck()}<SpanStyled>Crea tu propio portafolios.</SpanStyled></DivStyled>
      <DivStyled>{IconoCheck()}<SpanStyled>Selecciona una Plantilla.</SpanStyled></DivStyled>
      <DivStyled>{IconoCheck()}<SpanStyled>Rellena con tus datos personales.</SpanStyled></DivStyled>
      <DivStyled>{IconoCheck()}<SpanStyled>Descarga tu curriculum Vitae.</SpanStyled></DivStyled>
      <H3styled>
        Crear tu curriculum nunca habia sido tan facil.
      </H3styled>
    </Main>
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
