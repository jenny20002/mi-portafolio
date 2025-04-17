import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import "./VistaPrevia.css"; // Importa el archivo CSS
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"; // Importa los íconos necesarios
import { useContext } from "react";
import { SavedLinksContext } from "../context/SavedLinksContext";
export function VistaPrevia() {
  const navigate = useNavigate();

  const { savedLinks: contacts } = useContext(SavedLinksContext);
  // Estados para cada sección, inicializados desde localStorage
  const [personalInfo, setPersonalInfo] = useState(() => {
    const storedData = localStorage.getItem("personalInfo");
    return storedData ? JSON.parse(storedData) : {};
  });

  const [educations, setEducations] = useState(() => {
    const storedData = localStorage.getItem("educations");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [experiences, setExperiences] = useState(() => {
    const storedData = localStorage.getItem("experiences");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [projects, setProjects] = useState(() => {
    const storedData = localStorage.getItem("projects");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [skills, setSkills] = useState(() => {
    const storedData = localStorage.getItem("skills");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [languages, setLanguages] = useState(() => {
    const storedData = localStorage.getItem("languages");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [references, setReferences] = useState(() => {
    const storedData = localStorage.getItem("references");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [userPhoto, setUserPhoto] = useState(() => {
    const storedData = localStorage.getItem("userPhoto");
    return storedData ? JSON.parse(storedData) : null;
  });

  // Función para obtener el ícono del correo electrónico según el dominio
  const getEmailIcon = (email) => {
    if (email.includes("gmail.com")) {
      return <FaEnvelope className="icon gmail" />;
    } else if (email.includes("yahoo.com")) {
      return <FaEnvelope className="icon yahoo" />;
    } else if (email.includes("icloud.com")) {
      return <FaEnvelope className="icon icloud" />;
    }
    return <FaEnvelope className="icon default" />;
  };
  return (
    <div className="vistaPrevia">
      <div className="container">
        {/* Foto del usuario */}
        <div className="fotoUsuario">
          <h3>
            Foto del Usuario
            <FaEdit
              className="edit-icon"
              onClick={() => navigate("/edit/photo")}
            />
          </h3>
          {userPhoto ? (
            <img
              src={userPhoto}
              alt="Foto de Usuario"
              className="fotoUsuario-img"
            />
          ) : (
            <p>No hay imagen cargada</p>
          )}
        </div>

        {/* Información personal */}
        <div className="informacionPersonal">
  <h3>
    Información Personal
    <FaEdit
      className="edit-icon"
      onClick={() => navigate("/edit/personal-info")}
    />
  </h3>
  <p>
    <strong>Nombre:</strong>{" "}
    {personalInfo?.primerNombre && personalInfo?.primerApellido
      ? `${personalInfo.primerNombre} ${personalInfo.primerApellido}`
      : "No proporcionado"}
  </p>
  <p>
    <strong>Profesión:</strong>{" "}
    {personalInfo?.ocupacion || "No proporcionado"}
  </p>
  <p>
    <strong>Correo electrónico:</strong>{" "}
    {personalInfo?.email || "No proporcionado"}
  </p>
  <p>
    <strong>Teléfono:</strong>{" "}
    {personalInfo?.telefono || "No proporcionado"}
  </p>
  <p>
    <strong>Ubicación:</strong>{" "}
    {personalInfo?.ubicacion || "No proporcionado"}
  </p>
</div>

        {/* Formación Académica */}
        <div className="formacion">
          <h3>
            Formación Académica
            <FaEdit
              className="edit-icon"
              onClick={() =>
                navigate("/edit/education", { state: { fromPreview: true } })
              }
            />
          </h3>
          {educations?.length > 0 ? (
            educations.map((edu, index) => (
              <div key={index} className="formacion-item">
                <p>
                  <strong>Grado:</strong> {edu.degree}
                </p>
                <p>
                  <strong>Institución:</strong> {edu.institution}
                </p>
                <p>
                  <strong>Período:</strong> {edu.startDate} -{" "}
                  {edu.endDate || "Presente"}
                </p>
                <p>
                  <strong>Descripción:</strong> {edu.description}
                </p>
              </div>
            ))
          ) : (
            <p>No hay formación para mostrar.</p>
          )}
        </div>

        {/* Experiencia laboral */}
        <div className="experiencia">
          <h3>
            Experiencia Laboral
            <FaEdit
              className="edit-icon"
              onClick={() =>
                navigate("/edit/experience", { state: { fromPreview: true } })
              }
            />
          </h3>
          {experiences?.length > 0 ? (
            experiences.map((exp, index) => (
              <div key={index} className="experiencia-item">
                <p>
                  <strong>Empresa:</strong> {exp.company}
                </p>
                <p>
                  <strong>Puesto:</strong> {exp.position}
                </p>
                <p>
                  <strong>Responsabilidades:</strong> {exp.responsibilities}
                </p>
                <p>
                  <strong>Desde:</strong> {exp.startDate} -{" "}
                  {exp.endDate || "Presente"}
                </p>
              </div>
            ))
          ) : (
            <p>No hay experiencias para mostrar.</p>
          )}
        </div>

        {/* Proyectos */}
        <div className="proyectos">
          <h3>
            Proyectos
            <FaEdit
              className="edit-icon"
              onClick={() => navigate("/edit/projects")}
            />
          </h3>
          {projects?.length > 0 ? (
            <div className="proyectos-container">
              {projects.map((project, index) => (
                <div key={index} className="proyectos-item">
                  <p>
                    <strong>Nombre:</strong> {project.name}
                  </p>
                  <p>
                    <strong>Descripción:</strong> {project.description}
                  </p>
                  <p>
                    <strong>Tecnologías:</strong> {project.technologies}
                  </p>
                  {project.link && (
                    <p>
                      <strong>Enlace:</strong>{" "}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.link}
                      </a>
                    </p>
                  )}
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="proyectos-img"
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>No hay proyectos para mostrar.</p>
          )}
        </div>

        {/* Habilidades */}
        <div className="secciones">
          <div className="seccion habilidades">
            <h3>
              Habilidades
              <FaEdit
                className="edit-icon"
                onClick={() => navigate("/edit/skills")}
              />
            </h3>
            {skills?.length > 0 ? (
              skills.map((skill, index) => (
                <div key={index} className="habilidades-item">
                  <p>
                    <strong>Habilidad:</strong> {skill.name}
                  </p>
                  <p>
                    <strong>Categoría:</strong> {skill.category}
                  </p>
                  <Rating value={skill.level} readOnly />
                </div>
              ))
            ) : (
              <p>No hay habilidades para mostrar.</p>
            )}
          </div>

          {/* Idiomas */}
          <div className="seccion idiomas">
            <h3>
              Idiomas
              <FaEdit
                className="edit-icon"
                onClick={() => navigate("/edit/languages")}
              />
            </h3>
            {languages?.length > 0 ? (
              languages.map((language, index) => (
                <div key={index} className="idiomas-item">
                  <p>
                    <strong>Idioma:</strong> {language.idioma}
                  </p>
                  <p>
                    <strong>Nivel:</strong> {language.nivel}
                  </p>
                </div>
              ))
            ) : (
              <p>No hay idiomas para mostrar.</p>
            )}
          </div>

          {/* Contactos */}
          <div className="seccion contactos">
            <h3>
              Contactos
              <FaEdit
                className="edit-icon"
                onClick={() => navigate("/edit/contacts")}
              />
            </h3>
            {contacts?.length > 0 ? (
              contacts.map((contact, index) => (
                <div key={index} className="contactos-item">
                  {contact.linkedin && (
                    <div className="social-entry">
                      <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="icon linkedin" />
                        <span>{contact.linkedin}</span>
                      </a>
                    </div>
                  )}
                  {contact.github && (
                    <div className="social-entry">
                      <a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="icon github" />
                        <span>{contact.github}</span>
                      </a>
                    </div>
                  )}
                  {contact.twitter && (
                    <div className="social-entry">
                      <a
                        href={contact.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter className="icon twitter" />
                        <span>{contact.twitter}</span>
                      </a>
                    </div>
                  )}
                  {contact.email && (
                    <div className="social-entry">
                      <a
                        href={`mailto:${contact.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {getEmailIcon(contact.email)}
                        <span>{contact.email}</span>
                      </a>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No hay contactos para mostrar.</p>
            )}
          </div>

          {/* Referencias */}
          <div className="referencias">
            <h3>
              Referencias
              <FaEdit
                className="edit-icon"
                onClick={() => navigate("/edit/references")}
              />
            </h3>
            {references?.length > 0 ? (
              references.map((reference, index) => (
                <div key={index} className="referencias-item">
                  <p>
                    <strong>Nombre:</strong> {reference.name}
                  </p>
                  <p>
                    <strong>Relación:</strong> {reference.relationship}
                  </p>
                  <p>
                    <strong>Teléfono:</strong> {reference.phone}
                  </p>
                  <p>
                    <strong>Email:</strong> {reference.email}
                  </p>
                </div>
              ))
            ) : (
              <p>No hay referencias para mostrar.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VistaPrevia;
