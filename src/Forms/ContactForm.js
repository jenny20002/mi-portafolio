import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { SiGmail, SiIcloud } from "react-icons/si";
import { FaYahoo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../componentes/Contact/ContactForm.styles.css";
import { SavedLinksContext } from "../context/SavedLinksContext";
import { motion } from "framer-motion";


const ContactForm = () => {
  const navigate = useNavigate();
  const { savedLinks, setSavedLinks } = useContext(SavedLinksContext);

  const initialValues = {
    linkedin: "",
    github: "",
    twitter: "",
    email: "",
  };

  const validationSchema = Yup.object({
    linkedin: Yup.string()
      .url("URL inválida. Debe ser del tipo https://linkedin.com/in/usuario")
      .notRequired(),
    github: Yup.string()
      .url("URL inválida. Debe ser del tipo https://github.com/usuario")
      .notRequired(),
    twitter: Yup.string()
      .url("URL inválida. Debe ser del tipo https://twitter.com/usuario")
      .notRequired(),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Formato de correo inválido. Ejemplo: correo@dominio.com"
      )
      .notRequired(),
  });

  const handleSubmit = (values, { resetForm }) => {
    setSavedLinks((prevLinks) => [...prevLinks, values]);
    resetForm({
      values: {
        linkedin: "",
        github: "",
        twitter: "",
        email: "",
      },
    });
  };

  const handleDelete = (index, field) => {
    setSavedLinks((prevLinks) =>
      prevLinks.map((link, i) =>
        i === index ? { ...link, [field]: "" } : link
      )
    );
  };

  const getEmailIcon = (email) => {
    if (email.includes("gmail.com")) {
      return <SiGmail className="icon email" />;
    } else if (email.includes("yahoo.com")) {
      return <FaYahoo className="icon email" />;
    } else if (email.includes("icloud.com")) {
      return <SiIcloud className="icon email" />;
    }
    return <FaEnvelope className="icon email" />;
  };

  return (

    <motion.div
    className="contact-container"
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
      <h2>Contacto</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="contact-form">
          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn:</label>
            <Field
              type="text"
              name="linkedin"
              placeholder="https://linkedin.com/in/usuario"
            />
            <ErrorMessage
              name="linkedin"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="github">GitHub:</label>
            <Field
              type="text"
              name="github"
              placeholder="https://github.com/usuario"
            />
            <ErrorMessage
              name="github"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="twitter">Twitter:</label>
            <Field
              type="text"
              name="twitter"
              placeholder="https://twitter.com/usuario"
            />
            <ErrorMessage
              name="twitter"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <Field
              type="text"
              name="email"
              placeholder="correo@dominio.com"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>
          <motion.button
         className="motion-button"
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         >
          Guardar
          </motion.button>
        </Form>
      </Formik>

      {savedLinks.length > 0 && (
        <div className="social-links">
          <h3>Redes Sociales Guardadas</h3>
          {savedLinks.map((links, index) => (
            <div key={index} className="social-link-item">
              {links.linkedin && (
                <div className="social-entry">
                  <button
                    onClick={() => handleDelete(index, "linkedin")}
                    className="delete-button"
                  >
                    Eliminar
                  </button>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="icon linkedin" />
                    <span>{links.linkedin}</span>
                  </a>
                </div>
              )}
              {links.github && (
                <div className="social-entry">
                  <button
                    onClick={() => handleDelete(index, "github")}
                    className="delete-button"
                  >
                    Eliminar
                  </button>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="icon github" />
                    <span>{links.github}</span>
                  </a>
                </div>
              )}
              {links.twitter && (
                <div className="social-entry">
                  <button
                    onClick={() => handleDelete(index, "twitter")}
                    className="delete-button"
                  >
                    Eliminar
                  </button>
                  <a
                    href={links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="icon twitter" />
                    <span>{links.twitter}</span>
                  </a>
                </div>
              )}
              {links.email && (
                <div className="social-entry">
                  <button
                    onClick={() => handleDelete(index, "email")}
                    className="delete-button"
                  >
                    Eliminar
                  </button>
                  <a
                    href={`mailto:${links.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getEmailIcon(links.email)}
                    <span>{links.email}</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="navigation-buttons">
      <button
  onClick={() => navigate("/referencias")}
  style={{ backgroundColor: "#6a1b9a", color: "white" }}
>
  ← Regresar
</button>
<button
  onClick={() => navigate("/vista-previa")}
  style={{ backgroundColor: "#2196f3", color: "white" }}
>
  Siguiente →
</button>
      </div>
    
    </motion.div>
  );
};

export default ContactForm;