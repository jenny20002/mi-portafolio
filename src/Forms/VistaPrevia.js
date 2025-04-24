import React, { useState, useContext, useRef } from "react";
<<<<<<< HEAD
=======
import { useTranslation } from "react-i18next";
>>>>>>> 0f8099d (Implementacion de traduccion)
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import { FaEdit, FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import html2pdf from "html2pdf.js";

import "./VistaPrevia.css";
import { SavedLinksContext } from "../context/SavedLinksContext";
import {motion } from "framer-motion";
<<<<<<< HEAD
export function VistaPrevia() {
=======

export function VistaPrevia() {
  const { t } = useTranslation(); 
>>>>>>> 0f8099d (Implementacion de traduccion)
  const navigate = useNavigate();
  const { savedLinks: contacts } = useContext(SavedLinksContext);
  const previewRef = useRef(null);

  const [personalInfo] = useState(() => JSON.parse(localStorage.getItem("personalInfo") || "{}"));
  const [educations] = useState(() => JSON.parse(localStorage.getItem("educations") || "[]"));
  const [experiences] = useState(() => JSON.parse(localStorage.getItem("experiences") || "[]"));
  const [projects] = useState(() => JSON.parse(localStorage.getItem("projects") || "[]"));
  const [skills] = useState(() => JSON.parse(localStorage.getItem("skills") || "[]"));
  const [languages] = useState(() => JSON.parse(localStorage.getItem("languages") || "[]"));
  const [references] = useState(() => JSON.parse(localStorage.getItem("references") || "[]"));
  const [userPhoto] = useState(() => JSON.parse(localStorage.getItem("userPhoto") || "null"));

  const getEmailIcon = (email) => {
    const domain = email?.split("@")[1] || "default";
    return <FaEnvelope className={'icon ${domain}'} />;
  };

  const handleExportPDF = () => {
    const element = previewRef.current;
    const opt = {
      margin: 0,
      filename: "portafolio.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true
      },
      jsPDF: {
        unit: "pt",
        format: "a3",
        orientation: "portrait"
      },
      pagebreak: {
        mode: ["avoid-all", "css", "legacy"]
      }
    };
  
    // AÑADE clase temporal para PDF antes de exportar
    element.classList.add("pdf-export");
  
    html2pdf()
      .from(element)
      .set(opt)
      .save()
      .then(() => {
        // QUITA la clase después de generar el PDF
        element.classList.remove("pdf-export");
      });
  };
  

  return (
    <motion.div
    className="vistaPrevia"
    initial={{ opacity: 0, y: 30, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
      <div className="export-container">
        <button className="export-button" onClick={handleExportPDF}>
<<<<<<< HEAD
          Exportar a PDF
=======
          {t("Exportar a PDF")}
>>>>>>> 0f8099d (Implementacion de traduccion)
        </button>
      </div>

      <div id="vista-previa-pdf" ref={previewRef} className="container">
        <section className="fotoUsuario">
          <h3>
<<<<<<< HEAD
            Foto del Usuario
            <FaEdit className="edit-icon" onClick={() => navigate("/edit/photo")} />
          </h3>
          {userPhoto ? (
            <img src={userPhoto} alt="Foto de Usuario" className="fotoUsuario-img" />
          ) : (
            <p>No hay imagen cargada</p>
=======
            {t("Foto del Usuario")}
            <FaEdit className="edit-icon" onClick={() => navigate("/edit/photo")} />
          </h3>
          {userPhoto ? (
            <img src={userPhoto} alt="Foto de Usuario"className="fotoUsuario-img" />
          ) : (
            <p>{t('No hay imagen cargada')}</p>
>>>>>>> 0f8099d (Implementacion de traduccion)
          )}
        </section>

        <section className="informacionPersonal">
          <h3>
<<<<<<< HEAD
            Información Personal
            <FaEdit className="edit-icon" onClick={() => navigate("/edit/personal-info")} />
          </h3>
          <p><strong>Nombre:</strong> {personalInfo.primerNombre} {personalInfo.primerApellido}</p>
          <p><strong>Profesión:</strong> {personalInfo.ocupacion}</p>
          <p><strong>Correo:</strong> {personalInfo.email}</p>
          <p><strong>Teléfono:</strong> {personalInfo.telefono}</p>
          <p><strong>Ubicación:</strong> {personalInfo.ubicacion}</p>
=======
            {t('Información Personal')}
            <FaEdit className="edit-icon" onClick={() => navigate("/edit/personal-info")} />
          </h3>
          <p><strong>{t('Nombre:')}</strong> {personalInfo.primerNombre} {personalInfo.primerApellido}</p>
          <p><strong>{t('Profesión:')}</strong> {personalInfo.ocupacion}</p>
          <p><strong>{t('Correo:')}</strong> {personalInfo.email}</p>
          <p><strong>{t('Teléfono:')}</strong> {personalInfo.telefono}</p>
          <p><strong>{t('Ubicación:')}</strong> {personalInfo.ubicacion}</p>
>>>>>>> 0f8099d (Implementacion de traduccion)
        </section>

        <section className="formacion">
          <h3>
<<<<<<< HEAD
            Formación Académica
=======
            {t('Formación Académica')}
>>>>>>> 0f8099d (Implementacion de traduccion)
            <FaEdit className="edit-icon" onClick={() => navigate("/edit/education")} />
          </h3>
          {educations.map((edu, i) => (
            <div key={i} className="formacion-item">
<<<<<<< HEAD
              <p><strong>Grado:</strong> {edu.degree}</p>
              <p><strong>Institución:</strong> {edu.institution}</p>
              <p><strong>Período:</strong> {edu.startDate} - {edu.endDate || "Presente"}</p>
              <p><strong>Descripción:</strong> {edu.description}</p>
=======
              <p><strong>{t('Grado:')}</strong> {edu.degree}</p>
              <p><strong>{t('Institución:')}</strong> {edu.institution}</p>
              <p><strong>{t('Período:')}</strong> {edu.startDate} - {edu.endDate || "Presente"}</p>
              <p><strong>{t('Descripción:')}</strong> {edu.description}</p>
>>>>>>> 0f8099d (Implementacion de traduccion)
            </div>
          ))}
        </section>

        <section className="experiencia">
          <h3>
<<<<<<< HEAD
            Experiencia Laboral
=======
            {t('Experiencia Laboral')}
>>>>>>> 0f8099d (Implementacion de traduccion)
            <FaEdit className="edit-icon" onClick={() => navigate("/edit/experience")} />
          </h3>
          {experiences.map((exp, i) => (
            <div key={i} className="experiencia-item">
<<<<<<< HEAD
              <p><strong>Empresa:</strong> {exp.company}</p>
              <p><strong>Puesto:</strong> {exp.position}</p>
              <p><strong>Responsabilidades:</strong> {exp.responsibilities}</p>
              <p><strong>Desde:</strong> {exp.startDate} - {exp.endDate || "Presente"}</p>
=======
              <p><strong>{t('Empresa:')}</strong> {exp.company}</p>
              <p><strong>{t('Puesto:')}</strong> {exp.position}</p>
              <p><strong>{t('Responsabilidades:')}</strong> {exp.responsibilities}</p>
              <p><strong>{t("Desde:")}</strong> {exp.startDate} - {exp.endDate || t("Presente")}</p>
>>>>>>> 0f8099d (Implementacion de traduccion)
            </div>
          ))}
        </section>

        <section className="proyectos">
          <h3>
<<<<<<< HEAD
            Proyectos
=======
            {t('Proyectos')}
>>>>>>> 0f8099d (Implementacion de traduccion)
            <FaEdit className="edit-icon" onClick={() => navigate("/edit/projects")} />
          </h3>
          <div className="proyectos-container">
            {projects.map((project, i) => (
              <div key={i} className="proyectos-item">
<<<<<<< HEAD
                <p><strong>Nombre:</strong> {project.name}</p>
                <p><strong>Descripción:</strong> {project.description}</p>
                <p><strong>Tecnologías:</strong> {project.technologies}</p>
                {project.link && (
                  <p><strong>Enlace:</strong> <a href={project.link}>{project.link}</a></p>
=======
                <p><strong>{t('Nombre')}:</strong> {project.name}</p>
                <p><strong>{t('Descripción:')}</strong> {project.description}</p>
                <p><strong>{t('Tecnologías:')}</strong> {project.technologies}</p>
                {project.link && (
                  <p><strong>{t('Enlace:')}</strong> <a href={project.link}>{project.link}</a></p>
>>>>>>> 0f8099d (Implementacion de traduccion)
                )}
                {project.image && (
                  <img src={project.image} alt={project.name} className="proyectos-img" />
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="secciones">
          <section className="seccion habilidades">
<<<<<<< HEAD
            <h3>Habilidades
=======
            <h3>{t('Habilidades')}
>>>>>>> 0f8099d (Implementacion de traduccion)
            <FaEdit className="edit-icon" onClick={() => navigate("/edit/skills")} />
            </h3>
            {skills.map((skill, i) => (
              <div key={i} className="habilidades-item">
<<<<<<< HEAD
                <p><strong>Habilidad:</strong> {skill.name}</p>
                <p><strong>Categoría:</strong> {skill.category}</p>
=======
                <p><strong>{t('Habilidad:')}</strong> {skill.name}</p>
                <p><strong>{t('Categoría:')}</strong> {skill.category}</p>
>>>>>>> 0f8099d (Implementacion de traduccion)
                <Rating value={skill.level} readOnly />
              </div>
            ))}
          </section>

          <section className="seccion idiomas">
<<<<<<< HEAD
            <h3>Idiomas
=======
            <h3>{t('Idiomas')}
>>>>>>> 0f8099d (Implementacion de traduccion)
            <FaEdit className="edit-icon" onClick={() => navigate("/edit/languages")} /> 
            </h3>
            {languages.map((lang, i) => (
              <div key={i} className="idiomas-item">
<<<<<<< HEAD
                <p><strong>Idioma:</strong> {lang.idioma}</p>
                <p><strong>Nivel:</strong> {lang.nivel}</p>
=======
                <p><strong>{t('Idioma:')}</strong> {lang.idioma}</p>
                <p><strong>{t('Nivel:')}</strong> {lang.nivel}</p>
>>>>>>> 0f8099d (Implementacion de traduccion)
              </div>
            ))}
          </section>

          <section className="seccion contactos">
<<<<<<< HEAD
            <h3>Contactos
=======
            <h3>{t('Contactos')}
>>>>>>> 0f8099d (Implementacion de traduccion)
            <FaEdit className="edit-icon" onClick={() => navigate("/edit/contacts")} /> 
            </h3>
            {contacts.map((contact, i) => (
              <div key={i} className="contactos-item">
                {contact.linkedin && (
                  <div className="social-entry">
                    <FaLinkedin className="icon" />
                    <a href={contact.linkedin}>{contact.linkedin}</a>
                  </div>
                )}
                {contact.github && (
                  <div className="social-entry">
                    <FaGithub className="icon" />
                    <a href={contact.github}>{contact.github}</a>
                  </div>
                )}
                {contact.twitter && (
                  <div className="social-entry">
                    <FaTwitter className="icon" />
                    <a href={contact.twitter}>{contact.twitter}</a>
                  </div>
                )}
                {contact.email && (
                  <div className="social-entry">
                    {getEmailIcon(contact.email)}
                    <a href={'mailto:${contact.email}'}>{contact.email}</a>
                  </div>
                )}
              </div>
            ))}
          </section>

          <section className="referencias">
<<<<<<< HEAD
            <h3>Referencias
=======
            <h3>{t('Referencias')}
>>>>>>> 0f8099d (Implementacion de traduccion)
            <FaEdit className="edit-icon" onClick={() => navigate("/edit/references")} />
            </h3>
            {references.map((ref, i) => (
              <div key={i} className="referencias-item">
<<<<<<< HEAD
                <p><strong>Nombre:</strong> {ref.name}</p>
                <p><strong>Relación:</strong> {ref.relationship}</p>
                <p><strong>Teléfono:</strong> {ref.phone}</p>
                <p><strong>Email:</strong> {ref.email}</p>
=======
                <p><strong>{t('Nombre:')}</strong> {ref.name}</p>
                <p><strong>{t('Relación:')}</strong> {ref.relationship}</p>
                <p><strong>{t('Teléfono:')}</strong> {ref.phone}</p>
                <p><strong>{t('Email:')}</strong> {ref.email}</p>
>>>>>>> 0f8099d (Implementacion de traduccion)
              </div>
            ))}
          </section>
        </div>
      </div>
      </motion.div>
  );
}

export default VistaPrevia;