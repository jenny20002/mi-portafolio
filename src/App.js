import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./componentes/LandingPag/LandingPage";
import { Index2 } from "./componentes/CreaCV/CreaPortafolio";
import ProjectForm from './componentes/Projects/ProjectForm';
import PersonalInfoForm from './Forms/PersonalInfoForm';
import SkillsList from "./componentes/Skills/SkillsList" ;
<<<<<<< HEAD
import ContactForm from "./Forms/ContactForm";

=======
>>>>>>> 11b431636f32bd7c21459895bfed87cbf52b788a
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/crea-portafolio" element={<Index2 />} />
        <Route path="/perfil" element={<PersonalInfoForm />} />   
        <Route path="/proyectos" element={<ProjectForm />} />  
        <Route path="/habilidades" element={<SkillsList />} />
<<<<<<< HEAD
        <Route path="/contactos" element={<ContactForm />} />
=======
>>>>>>> 11b431636f32bd7c21459895bfed87cbf52b788a
      </Routes>
    </Router>
  );
}

export default App;
