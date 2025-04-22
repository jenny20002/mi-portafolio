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
import { motion } from "framer-motion";

const EducationForm = ({ educations, setEducations }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Obtener el estado de navegación
  const fromPreview = location.state?.fromPreview || false; // Verificar si viene de la vista previa

  const [form, setForm] = useState({
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  // Cargar datos desde localStorage al iniciar
  useEffect(() => {
    const storedEducations = localStorage.getItem("educations");
    if (storedEducations) {
      setEducations(JSON.parse(storedEducations));
    }
  }, [setEducations]);

  // Guardar datos en localStorage cada vez que cambien
  useEffect(() => {
    if (educations.length > 0) {
      localStorage.setItem("educations", JSON.stringify(educations));
    }
  }, [educations]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addEducation = () => {
    if (!form.institution.trim()) return;

    if (editIndex !== null) {
      const updatedEducations = [...educations];
      updatedEducations[editIndex] = form;
      setEducations(updatedEducations);
      setEditIndex(null);
    } else {
      setEducations([...educations, form]);
    }

    setForm({
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const removeEducation = (index) => {
    setEducations((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(educations[index]);
  };

  return (
    <motion.div
    className="education-card"
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}

  >
    <Box className="education-card">
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Formación Académica
      </Typography>
      <Grid container spacing={2}>
        {/* Formulario */}
        <Grid item xs={12}>
          <TextField
            label="Institución *"
            name="institution"
            value={form.institution}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Título/Grado *"
            name="degree"
            value={form.degree}
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
            label="Descripción"
            name="description"
            value={form.description}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={addEducation}
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
        {educations.map((edu, index) => (
          <ListItem key={index} sx={{ borderBottom: "1px solid #ddd" }}>
            <ListItemText
              primary={`${edu.institution} - ${edu.degree}`}
              secondary={`Desde: ${edu.startDate} Hasta: ${edu.endDate || "Presente"}`}
            />
            <IconButton onClick={() => handleEdit(index)} color="primary">
              <Edit />
            </IconButton>
            <IconButton onClick={() => removeEducation(index)} color="error">
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

export default EducationForm;