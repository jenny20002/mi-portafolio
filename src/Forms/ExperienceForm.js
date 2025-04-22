import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom"; // Importar hooks de navegación
import {motion} from "framer-motion";

export const ExperienceForm = ({ experiences, setExperiences }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Obtener el estado de navegación
  const fromPreview = location.state?.fromPreview || false; // Verificar si viene de la vista previa

  const [form, setForm] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  // Cargar datos desde localStorage al iniciar
  useEffect(() => {
    const storedExperiences = localStorage.getItem("experiences");
    if (storedExperiences) {
      setExperiences(JSON.parse(storedExperiences));
    }
  }, [setExperiences]);

  // Guardar datos en localStorage cada vez que cambien
  useEffect(() => {
    if (experiences.length > 0) {
      localStorage.setItem("experiences", JSON.stringify(experiences));
    }
  }, [experiences]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addExperience = () => {
    if (!form.company.trim()) return;

    if (editIndex !== null) {
      const updatedExperiences = [...experiences];
      updatedExperiences[editIndex] = form;
      setExperiences(updatedExperiences);
      setEditIndex(null);
    } else {
      setExperiences([...experiences, form]);
    }

    setForm({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
    });
  };

  const removeExperience = (index) => {
    setExperiences((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(experiences[index]);
  };

  return (
    <motion.div
    className="experience-card"
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}

  >
    <Box className="experience-card">
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Experiencia Laboral
      </Typography>
      <Grid container spacing={2}>
        {/* Formulario */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Empresa *"
            name="company"
            value={form.company}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Cargo *"
            name="position"
            value={form.position}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Fecha de Inicio *"
            name="startDate"
            type="date"
            value={form.startDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Fecha de Finalización"
            name="endDate"
            type="date"
            value={form.endDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Responsabilidades"
            name="responsibilities"
            value={form.responsibilities}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={addExperience}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ backgroundColor: editIndex !== null ? "#673AB7" : "#2196F3" }}
          >
            {editIndex !== null ? "Guardar Cambios" : "Añadir"}
          </Button>
        </Grid>
      </Grid>
      <List sx={{ marginTop: 4 }}>
        {experiences.map((exp, index) => (
          <ListItem key={index} sx={{ borderBottom: "1px solid #ddd" }}>
            <ListItemText
              primary={`${exp.company} - ${exp.position}`}
              secondary={`Desde: ${exp.startDate} Hasta: ${exp.endDate || "Presente"}`}
            />
            <IconButton onClick={() => handleEdit(index)} color="primary">
              <Edit />
            </IconButton>
            <IconButton onClick={() => removeExperience(index)} color="error">
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>

      {/* Botón de regresar */}
      {fromPreview && (
        <Box sx={{ textAlign: "center", marginTop: 4 }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate(-1)} // Regresar a la página anterior
          >
            Regresar
          </Button>
        </Box>
      )}
      
      </Box>
    </motion.div>

  );
};

export default ExperienceForm;