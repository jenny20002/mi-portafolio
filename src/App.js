import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./componentes/LandingPag/LandingPage";
import { Index2 } from "./componentes/CreaCV/CreaPortafolio";
import ProjectForm from './componentes/Projects/ProjectForm';
import PersonalInfoForm from './Forms/PersonalInfoForm';
import SkillsList from "./componentes/Skills/SkillsList" ;
import ContactForm from "./Forms/ContactForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/crea-portafolio" element={<Index2 />} />
        <Route path="/perfil" element={<PersonalInfoForm />} />   
        <Route path="/proyectos" element={<ProjectForm />} />  
        <Route path="/habilidades" element={<SkillsList />} />
        <Route path="/contactos" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
