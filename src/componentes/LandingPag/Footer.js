import styled from "styled-components";
import React from "react";
import "./FooterC.css";

// Estilos del contenedor principal
var ContenedorPadre = styled.div`
  background: -webkit-linear-gradient(
    top right,
     rgb(98, 88, 145),
  rgb(4, 112, 253)
  );
  width: 100%;
  height: 60vh;
  overflow: auto;
`;


// Estilos para el contenedor 1 (Sección de beneficios)
var Contenedor1 = styled.div`
  background-color: white;
  width: 100%;
  height: 45vh;
  overflow: auto;
`;

// Estilos para el contenedor 2 (Sección de pie de página)
var Contenedor2 = styled.div`
  background-color: white;
  width: 100%;
  height: 15vh;
  overflow: auto;
`;

// Definiciones de los componentes de beneficios
const BeneficiosSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  padding: 20px;
  rgb(98, 88, 145),
  rgb(4, 112, 253)
  flex-wrap: wrap; /* Ajuste de elementos en pantallas pequeñas */
`;

const BeneficioCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 12px;
  width: 180px;
  text-align: center;
  margin: 8px;
`;

const BeneficioIcon = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
`;

const BeneficioTitle = styled.h3`
  margin: 0;
  color: #333;
  font-size: 20px;
`;

const BeneficioDescription = styled.p`
  color: #777;
  font-size: 16px;
`;

// Componente Footer
function Footer() {
  return (
    <ContenedorPadre>
      <Contenedor1>
        {/* Sección de beneficios */}
        <div className="espacioBlanco">
          <BeneficiosSection>
            <BeneficioCard>
              <BeneficioIcon>💻</BeneficioIcon>
              <BeneficioTitle>Fácil de usar</BeneficioTitle>
              <BeneficioDescription>
                La plataforma es intuitiva, no necesitas experiencia previa para empezar.
              </BeneficioDescription>
            </BeneficioCard>

            <BeneficioCard>
              <BeneficioIcon>🔒</BeneficioIcon>
              <BeneficioTitle>Seguridad Garantizada</BeneficioTitle>
              <BeneficioDescription>
                Tus datos están completamente protegidos con nuestras políticas de seguridad.
              </BeneficioDescription>
            </BeneficioCard>

            <BeneficioCard>
              <BeneficioIcon>🎨</BeneficioIcon>
              <BeneficioTitle>Plantillas Personalizables</BeneficioTitle>
              <BeneficioDescription>
                Elige una plantilla y personalízala para que tu curriculum se ajuste a tu estilo.
              </BeneficioDescription>
            </BeneficioCard>
          </BeneficiosSection>
        </div>
        </Contenedor1>
        
      <Contenedor2>
      {/* Pie de página */}
      <footer className="footerClass">
        <p>© {new Date().getFullYear()} Hello I'm! Todos los derechos reservados.</p>
        <p>Convierte tus ideas en un portafolio profesional.</p>
      </footer>
    </Contenedor2>
  </ContenedorPadre>
       
  );
}

export default Footer;
