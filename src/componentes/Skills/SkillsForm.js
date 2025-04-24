import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
<<<<<<< HEAD
=======
import { useTranslation } from "react-i18next";
>>>>>>> 0f8099d (Implementacion de traduccion)
import { TextField, Button, MenuItem, Box, Rating, Typography, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";

const predefinedSkills = {
  Frontend: ["React", "Vue", "Angular", "CSS", "JavaScript"],
  Backend: ["Node.js", "Django", "Flask", "Spring Boot", "PHP"],
  "Soft Skills": ["Comunicación", "Trabajo en equipo", "Resolución de problemas", "Adaptabilidad", "Liderazgo"]
};

const SkillsForm = ({ addSkill, editSkill, skillToEdit }) => {
<<<<<<< HEAD
=======
  const { t } = useTranslation(); 
>>>>>>> 0f8099d (Implementacion de traduccion)
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
    const skillName = watch("name") === "custom" ? watch("customSkill") : data.name;
    const newSkill = {
      ...data,
      id: isEditing ? skillToEdit.id : Date.now(),
      level: parseFloat(watch("level")) || 3,
      name: skillName,
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
    <Container>
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Paper elevation={3} sx={{ maxWidth: "600px", mx: "auto", padding: 4, boxShadow: 3, borderRadius: 3, backgroundColor: "white" }}>
      <Typography variant="h4" textAlign="center"sx={{ fontFamily: 'Times New Roman' }}>
<<<<<<< HEAD
      {isEditing ? "Editar Habilidad" : "Agregar Habilidad"}
=======
      {isEditing ? t("Editar Habilidad") : t("Agregar Habilidad")}
>>>>>>> 0f8099d (Implementacion de traduccion)
      </Typography>


        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
<<<<<<< HEAD
          <TextField select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} label="Categoría" fullWidth>
=======
          <TextField select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} label= {t("Categoría")} fullWidth>
>>>>>>> 0f8099d (Implementacion de traduccion)
            {Object.keys(predefinedSkills).map((category) => (
              <MenuItem key={category} value={category}>{category}</MenuItem>
            ))}
          </TextField>

          {selectedCategory && (
<<<<<<< HEAD
            <TextField select {...register("name", { required: true })} label="Habilidad" fullWidth>
              {predefinedSkills[selectedCategory].map((skill) => (
                <MenuItem key={skill} value={skill}>{skill}</MenuItem>
              ))}
              <MenuItem value="custom">Otra habilidad</MenuItem>
=======
            <TextField select {...register("name", { required: true })} label={t("Habilidad")} fullWidth>
              {predefinedSkills[selectedCategory].map((skill) => (
                <MenuItem key={skill} value={skill}>{skill}</MenuItem>
              ))}
              <MenuItem value="custom">{t('Otra habilidad')}</MenuItem>
>>>>>>> 0f8099d (Implementacion de traduccion)
            </TextField>
          )}

          {watch("name") === "custom" && (
<<<<<<< HEAD
            <TextField {...register("customSkill", { required: true })} label="Nombre de la habilidad" fullWidth />
=======
            <TextField {...register("customSkill", { required: true })} label={t("Nombre de la habilidad")} fullWidth />
>>>>>>> 0f8099d (Implementacion de traduccion)
          )}

          <Box display="flex" alignItems="center" gap={2}>
            <Rating value={parseFloat(watch("level")) || 3} precision={0.5} onChange={(_, newValue) => setValue("level", newValue)} />
            <span>{watch("level") || 3} / 5</span>
          </Box>

<<<<<<< HEAD
          <Button type="submit" variant="contained" color="primary">{isEditing ? "Guardar Cambios" : "Añadir Habilidad"}</Button>
        </Box>
        <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
          <Button variant="contained" onClick={() => navigate("/proyectos")} sx={{ backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#333" }}}>
            ← Regresar
          </Button>
          <Button variant="contained" onClick={() => navigate("/idiomas")} sx={{ backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#333" }}}>
          Siguiente →
=======
          <Button type="submit" variant="contained" color="primary">{isEditing ? t("Guardar Cambios") : t("Añadir Habilidad")}</Button>
        </Box>
        <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
          <Button variant="contained" onClick={() => navigate("/proyectos")} sx={{ backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#333" }}}>
            {t('← Regresar')}
          </Button>
          <Button variant="contained" onClick={() => navigate("/idiomas")} sx={{ backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#333" }}}>
          {t('Siguiente →')}
>>>>>>> 0f8099d (Implementacion de traduccion)
          </Button>
        </Box>

      </Paper>
      </motion.div>
    </Container>
  );
};

SkillsForm.propTypes = {
  addSkill: PropTypes.func.isRequired,
  editSkill: PropTypes.func.isRequired,
  skillToEdit: PropTypes.object
};

export default SkillsForm;
