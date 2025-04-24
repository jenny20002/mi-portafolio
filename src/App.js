import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
=======
import { useTranslation } from 'react-i18next';
import LanguageSelector from "./LanguageSelector";
>>>>>>> 0f8099d (Implementacion de traduccion)
import LandingPage from "./componentes/LandingPag/LandingPage";
import { EducationyExperience } from "./componentes/CreaCV/CreaPortafolio";
import ProjectForm from "./componentes/Projects/ProjectForm";
import PersonalInfoForm from "./Forms/PersonalInfoForm";
import SkillsList from "./componentes/Skills/SkillsList";
import LanguagesForm from "./componentes/Languages/LanguagesForm";
import ContactForm from "./Forms/ContactForm";
import VistaPrevia from "./Forms/VistaPrevia";
import EducationForm from "./Forms/EducationForm";
import ExperienceForm from "./Forms/ExperienceForm";
import { SavedLinksProvider } from "./context/SavedLinksContext"; // Importamos el contexto
import ReferencesForm from "./componentes/References/ReferencesForm";  // Importa tu formulario de referencias
import ReferencesList from "./componentes/References/ReferencesList";  // Importa la lista de referencias

<<<<<<< HEAD
function App() {
=======

function App() {

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

>>>>>>> 0f8099d (Implementacion de traduccion)
  // Estados centralizados
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    profession: "",
    email: "",
    phone: "",
    location: "",
  });

  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]); // Estado global para proyectos
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [references, setReferences] = useState([]);
  const [userPhoto, setUserPhoto] = useState(null);

  return (
    <SavedLinksProvider>
      {" "}
      {/* Envolvemos la aplicación con el proveedor del contexto */}
      <Router>
<<<<<<< HEAD
=======
      <LanguageSelector />
>>>>>>> 0f8099d (Implementacion de traduccion)
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<LandingPage />} />

          <Route
            path="/crea-tu-portafolio"
            element={
            <PersonalInfoForm personalInfo={personalInfo} 
            setPersonalInfo={setPersonalInfo} 
            />
            }
            />

          {/* Rutas para los formularios */}
          <Route
            path="/crea-portafolio"
            element={
              <EducationyExperience
                educations={educations}
                setEducations={setEducations}
                experiences={experiences}
                setExperiences={setExperiences}
              />
            }
          />
          <Route
            path="/perfil"
            element={
              <PersonalInfoForm
                personalInfo={personalInfo}
                setPersonalInfo={setPersonalInfo}
              />
            }
          />
          <Route
            path="/proyectos"
            element={
              <ProjectForm projects={projects} setProjects={setProjects} />
            }
          />
          <Route
            path="/habilidades"
            element={<SkillsList skills={skills} setSkills={setSkills} />}
          />
          <Route
            path="/idiomas"
            element={
              <LanguagesForm
                languages={languages}
                setLanguages={setLanguages}
              />
            }
            />
               {/* Rutas de Referencias */}
          <Route
          path="/referencias"
          element={<ReferencesForm references={references} setReferences={setReferences} />}
        />
        <Route
          path="/referencias-lista"
          element={<ReferencesList references={references} />}
        />
          
          {/* Formulario de contacto */}
          <Route path="/contactos" element={<ContactForm />} />

          {/* Vista previa */}
          <Route
            path="/vista-previa"
            element={
              <VistaPrevia
                personalInfo={personalInfo}
                educations={educations}
                experiences={experiences}
                projects={projects}
                skills={skills}
                languages={languages}
                references={references}
                userPhoto={userPhoto}
              />
            }
          />

          {/* Rutas de edición */}
          <Route
            path="/edit/education"
            element={
              <EducationForm
                educations={educations}
                setEducations={setEducations}
              />
            }
          />
          <Route
            path="/edit/experience"
            element={
              <ExperienceForm
                experiences={experiences}
                setExperiences={setExperiences}
              />
            }
          />
          <Route
            path="/edit/personal-info"
            element={
              <PersonalInfoForm
                personalInfo={personalInfo}
                setPersonalInfo={setPersonalInfo}
                onFormSubmit={() => console.log("Formulario enviado")} // Pasa una función aquí
              />
            }
          />
          <Route
            path="/edit/projects"
            element={
              <ProjectForm projects={projects} setProjects={setProjects} />
            }
          />
          <Route
            path="/edit/skills"
            element={<SkillsList skills={skills} setSkills={setSkills} />}
          />
          <Route
            path="/edit/languages"
            element={
              <LanguagesForm
                languages={languages}
                setLanguages={setLanguages}
              />
            }
          />
          <Route path="/edit/contacts" element={<ContactForm />} />
        </Routes>
      </Router>
    </SavedLinksProvider>
  );
}

export default App;
