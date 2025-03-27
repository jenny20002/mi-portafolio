import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { TextField, Button, MenuItem, Box, Rating, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const predefinedSkills = {
  Frontend: ["React", "Vue", "Angular", "CSS", "JavaScript"],
  Backend: ["Node.js", "Django", "Flask", "Spring Boot", "PHP"],
  "Soft Skills": ["Comunicación", "Trabajo en equipo", "Resolución de problemas", "Adaptabilidad", "Liderazgo"]
};

const SkillsForm = ({ addSkill, editSkill, skillToEdit }) => {
  const { register, handleSubmit, reset, setValue, watch } = useForm();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (skillToEdit) {
      setValue("name", skillToEdit.name);
      setValue("category", skillToEdit.category);
      setValue("level", skillToEdit.level);
      setSelectedCategory(skillToEdit.category);
      setIsEditing(true);
    }
  }, [skillToEdit, setValue]);

  const onSubmit = (data) => {
    const skillName = watch("name") === "custom" ? watch("customSkill") : data.name; // Usamos customSkill si seleccionamos "custom"
    const newSkill = {
      ...data,
      id: isEditing ? skillToEdit.id : Date.now(),
      level: parseFloat(watch("level")) || 3,
      name: skillName,  // Guardamos el nombre correcto
      category: data.category || selectedCategory
    };

    if (isEditing) {
      editSkill(newSkill);
    } else {
      addSkill(newSkill);
    }

    reset();
    setSelectedCategory("");
    setIsEditing(false);
  };

  return (
    <Box sx={{ maxWidth: "600px", mx: "auto", padding: 4, boxShadow: 3, borderRadius: 3, backgroundColor: "white" }}>
      <Typography variant="h4" textAlign="center">{isEditing ? "Editar Habilidad" : "Agregar Habilidad"}</Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Selección de Categoría */}
        <TextField select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} label="Categoría" fullWidth>
          {Object.keys(predefinedSkills).map((category) => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </TextField>

        {/* Selección de habilidad predefinida en función de la categoría seleccionada */}
        {selectedCategory && (
          <TextField select {...register("name", { required: true })} label="Habilidad" fullWidth>
            {predefinedSkills[selectedCategory].map((skill) => (
              <MenuItem key={skill} value={skill}>{skill}</MenuItem>
            ))}
            {/* Opción para seleccionar 'Otras habilidades' */}
            <MenuItem value="custom">Otra habilidad</MenuItem>
          </TextField>
        )}

        {/* Si se selecciona 'Otra habilidad', mostrar campo de texto para ingresar la habilidad personalizada */}
        {watch("name") === "custom" && (
          <TextField 
            {...register("customSkill", { required: true })} // Registra el campo para habilidad personalizada
            label="Nombre de la habilidad" 
            fullWidth 
          />
        )}

        {/* Calificación con estrellas */}
        <Box display="flex" alignItems="center" gap={2}>
          <Rating value={parseFloat(watch("level")) || 3} precision={0.5} onChange={(_, newValue) => setValue("level", newValue)} />
          <span>{watch("level") || 3} / 5</span>
        </Box>

        <Button type="submit" variant="contained" color="primary">{isEditing ? "Guardar Cambios" : "Añadir Habilidad"}</Button>
      </Box>

      <Button variant="contained" onClick={() => navigate("/proyectos")} sx={{ mt: 2, backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#333" }}}>
        ← Regresar a Proyectos
      </Button>
    </Box>
  );
};

SkillsForm.propTypes = {
  addSkill: PropTypes.func.isRequired,
  editSkill: PropTypes.func.isRequired,
  skillToEdit: PropTypes.object
};

export default SkillsForm;