import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./componentes/LandingPag/LandingPage";
import { Index2 } from "./componentes/CreaCV/CreaPortafolio";
import ProjectForm from './componentes/Projects/ProjectForm';
import PersonalInfoForm from './Forms/PersonalInfoForm';// Ajusta la ruta según la ubicación real  
<<<<<<< HEAD
import SkillsList from "./componentes/Skills/SkillsList" ;

=======
>>>>>>> ac319fb83c5fac11611f4a6a959c8217bc31cbcd
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/crea-portafolio" element={<Index2 />} />
        <Route path="/perfil" element={<PersonalInfoForm />} />   
        <Route path="/proyectos" element={<ProjectForm />} />  {/* Ruta para el formulario de proyectos */}
<<<<<<< HEAD
        <Route path="/habilidades" element={<SkillsList />} />
=======
>>>>>>> ac319fb83c5fac11611f4a6a959c8217bc31cbcd
      </Routes>
    </Router>
  );
}

export default App;
