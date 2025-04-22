import React, { useState } from "react";
import "./Carta.css";
import "./Forms.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EducationForm from "../../Forms/EducationForm";
import ExperienceForm from "../../Forms/ExperienceForm";

export function EducationyExperience() {
  const navigate = useNavigate();
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  return (
    <div className="Base">
      <div className="form-container">
        {/* Formulario de Educación */}
        <div className="form-left">
          <EducationForm
            educations={educations}
            setEducations={setEducations}
          />
        </div>

        {/* Formulario de Experiencia */}
        <div className="form-right">
          <ExperienceForm
            experiences={experiences}
            setExperiences={setExperiences}
          />
        </div>
      </div>

      {/* Botón centrado debajo de los formularios */}
      <div className="button-center">
        <Button
          className="floating-button"
          sx={{
            backgroundColor: "#007bff",
            color: "#fff",
            fontWeight: "bold",
            marginLeft: "30px", // Agrega margen superior para separar el botón del formulario
            "&:hover": { backgroundColor: "#0056b3" },
          }}
          onClick={() => navigate("/proyectos")}
        >
          Proyectos
        </Button>
      </div>
    </div>
  );
}
