import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Drawer,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FaEdit, FaTrash } from "react-icons/fa";

export const ExperienceForm = () => {
  const [experiences, setExperiences] = useState([]);
  const [form, setForm] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addExperience = () => {
    // Validar que el campo "company" no esté vacío
    if (!form.company.trim()) {
      return; // No hacer nada si está vacío
    }

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
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(experiences[index]);
    setOpenDrawer(false);
  };

  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 2 }}>
      <details
        style={{
          border: "1px solid #ccc",
          borderRadius: 5,
          padding: 12,
          backgroundColor: "#f9f9f9",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        open
      >
        <summary
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#007bff",
            cursor: "pointer",
          }}
        >
          Experiencia Laboral
        </summary>
        <Typography variant="h5" sx={{ marginBottom: 2, marginTop: 2 }}>
          Formulario de Experiencia
        </Typography>
        <Grid container spacing={2} component="form">
          <Grid item xs={12} sm={6}>
            <TextField
              label="Empresa"
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
              label="Cargo"
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
              label="Fecha de Inicio"
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
          {/* Se asegura que ambos botones sean consistentes en tamaño */}
          <Grid item xs={12} sm={6}>
            <Button
              onClick={addExperience}
              variant="contained"
              color="primary"
              sx={{
                height: "50px", // Tamaño fijo para asegurar uniformidad
                width: "100%",
              }}
            >
              {editIndex !== null ? "Guardar Cambios" : "Añadir"}
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => toggleDrawer(true)}
              sx={{
                height: "50px", // Mismo tamaño que el otro botón
                width: "100%",
              }}
            >
              Vista Previa
            </Button>
          </Grid>
        </Grid>
      </details>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
      >
        <Box sx={{ width: 400, padding: 2 }}>
          <AppBar
            position="static"
            sx={{ backgroundColor: "white", boxShadow: "none" }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => toggleDrawer(false)}
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" sx={{ flexGrow: 1, color: "purple" }}>
                Sección Experiencia
              </Typography>
            </Toolbar>
          </AppBar>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Vista Previa
          </Typography>
          <Box sx={{ marginTop: 2 }}>
            {experiences.length === 0 ? (
              <Typography variant="body1" color="textSecondary">
                No hay datos para mostrar.
              </Typography>
            ) : (
              experiences.map((exp, index) => (
                <Box
                  key={index}
                  sx={{
                    marginBottom: 2,
                    padding: 2,
                    backgroundColor: "#f5f5f5",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body1">
                    <strong>Empresa:</strong> {exp.company}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Cargo:</strong> {exp.position}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Período:</strong> {exp.startDate} -{" "}
                    {exp.endDate || "Presente"}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Responsabilidades:</strong> {exp.responsibilities}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
                    <Button
                      onClick={() => handleEdit(index)}
                      variant="outlined"
                      color="primary"
                      size="small"
                    >
                      <FaEdit /> Editar
                    </Button>
                    <Button
                      onClick={() => removeExperience(index)}
                      variant="contained"
                      color="error"
                      size="small"
                    >
                      <FaTrash /> Eliminar
                    </Button>
                  </Box>
                </Box>
              ))
            )}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
