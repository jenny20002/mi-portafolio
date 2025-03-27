import React from 'react';
import './Carta.css';
import './Forms.css';
import { EducationForm } from '../../Forms/EducationForm';
import { ExperienceForm } from '../../Forms/ExperienceForm';
import { Button } from '@mui/material'; // Importa el botón de MUI
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación

export function Index2() {
  const navigate = useNavigate(); // Usamos el hook useNavigate para manejar la navegación

  return (
    <div className="Base">
      <div className="card-body">
        <div className="form-container">
          <EducationForm />
          <ExperienceForm />
          {/* Botón para navegar al formulario de proyectos */}
          <Button 
  className="button"
  sx={{ 
    backgroundColor: "#fff", 
    color: "#007bff", 
    fontWeight: "bold", 
    border: "1px solid #007bff",
    "&:hover": { backgroundColor: "#e6f0ff" }
  }}
  onClick={() => navigate("/proyectos")}
>
  Proyectos
</Button>

        </div>
      </div>
    </div>
  );
}

