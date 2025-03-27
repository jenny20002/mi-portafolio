import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./componentes/LandingPag/LandingPage";
import { Index2 } from "./componentes/CreaCV/CreaPortafolio";
import ProjectForm from './componentes/Projects/ProjectForm';
import PersonalInfoForm from './Forms/PersonalInfoForm';// Ajusta la ruta según la ubicación real  
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/crea-portafolio" element={<Index2 />} />
        <Route path="/perfil" element={<PersonalInfoForm />} />   
        <Route path="/proyectos" element={<ProjectForm />} />  {/* Ruta para el formulario de proyectos */}
      </Routes>
    </Router>
  );
}

export default App;
