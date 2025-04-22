import styled from "styled-components";
import * as React from "react";
import PersonalInfoForm from "../../Forms/PersonalInfoForm";
import curriculumImage from './Imagenes/curriculum-vitae350x495.jpg'; // Ruta de la imagen
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
  font-size: 28px;
  color: #333;
  margin-top: 20px;
  font-weight: bold;
  margin-left: 50px;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`;

const LeftSection = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageStyled = styled.img`
  width: 350px;
  height: auto;
  border-radius: 10px;
`;

function Home() {
  const [showForm, setShowForm] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const formRef = React.useRef(null);

  // Recupera los datos del localStorage (si existen)
  const storedData = JSON.parse(localStorage.getItem("personalInfo"));

  // Función para alternar la visibilidad del formulario
  const toggleFormVisibility = () => {
    setShowForm(prevState => !prevState);
    if (formRef.current && !showForm) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Limpiar los datos después de haber sido enviados (Esto se hace en tu formulario)
  const clearForm = () => {
    setFormData({}); // Limpiar el formulario, pero no borrar los datos en localStorage
    setShowForm(false); // Ocultar el formulario después de enviar
  };

  return (
    <MainContainer>
      <LeftSection>
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
          <Subtitulo onClick={toggleFormVisibility}>
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
      </LeftSection>

      <RightSection>
        <ImageStyled src={curriculumImage} alt="Currículum Vitae" />
      </RightSection>
    </MainContainer>
  );
}

// Icono de check
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


