import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, Grid, Drawer } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const ProjectForm = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();

  // Cargar proyectos desde localStorage
  const [projects, setProjects] = useState(() => JSON.parse(localStorage.getItem("projects")) || []);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null); 
  const [drawerOpen, setDrawerOpen] = useState(false); 

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const onSubmit = (data) => {
    const newProject = { 
      ...data, 
      id: selectedProject ? selectedProject.id : Date.now(), 
      image: imagePreview === null ? null : imagePreview || selectedProject?.image // Si no hay imagen previa, la imagen debe ser null
    };

    if (selectedProject) {
      setProjects(projects.map((proj) => (proj.id === selectedProject.id ? newProject : proj)));
      setSelectedProject(null);
    } else {
      setProjects([...projects, newProject]);
    }

    reset();
    setImagePreview(null);
  };

  const removeProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const editProject = (project) => {
    setSelectedProject(project);
    setValue("name", project.name);
    setValue("description", project.description);
    setValue("technologies", project.technologies);
    setValue("link", project.link);
    setImagePreview(project.image);
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setDrawerOpen(true);
  };

  // Función para eliminar la imagen
  const removeImage = () => {
    setImagePreview(null); // Eliminar la imagen del estado
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "800px", mx: "auto", padding: 4, boxShadow: 3, borderRadius: 3, backgroundColor: "white" }}>
      {/* Encabezado con cambio dinámico */}
      <Typography variant="h4">{selectedProject ? "Editar Proyecto" : "Agregar Proyecto"}</Typography>

      {/* FORMULARIO */}
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
        <TextField
          {...register("name", { required: "El nombre es obligatorio" })}
          label="Nombre del Proyecto"
          fullWidth
          error={!!errors.name}
          helperText={errors.name?.message}
          InputLabelProps={{
            shrink: true, // Asegura que la etiqueta flote arriba cuando el campo está lleno
          }}
          sx={{ marginBottom: 2 }} // Espacio adicional
        />
        <TextField
          {...register("description", { required: "La descripción es obligatoria" })}
          label="Descripción"
          multiline
          rows={4}
          fullWidth
          error={!!errors.description}
          helperText={errors.description?.message}
          InputLabelProps={{
            shrink: true, // Asegura que la etiqueta flote arriba cuando el campo está lleno
          }}
          sx={{ marginBottom: 2 }} // Espacio adicional
        />
        <TextField
          {...register("technologies", { required: "Las tecnologías son obligatorias" })}
          label="Tecnologías"
          fullWidth
          error={!!errors.technologies}
          helperText={errors.technologies?.message}
          InputLabelProps={{
            shrink: true, // Asegura que la etiqueta flote arriba cuando el campo está lleno
          }}
          sx={{ marginBottom: 2 }} // Espacio adicional
        />
        <TextField
          {...register("link")}
          label="Enlace (opcional)"
          fullWidth
          InputLabelProps={{
            shrink: true, // Asegura que la etiqueta flote arriba cuando el campo está lleno
          }}
          sx={{ marginBottom: 2 }} // Espacio adicional
        />

        <Button variant="contained" component="label" startIcon={<CloudUploadIcon />}>
          Subir Imagen
          <input type="file" hidden accept="image/*" onChange={(e) => setImagePreview(URL.createObjectURL(e.target.files[0]))} />
        </Button>

        {imagePreview && (
          <>
            <img src={imagePreview} alt="Vista previa" style={{ width: "100%", maxHeight: "200px", objectFit: "cover", marginTop: 10, borderRadius: 10 }} />
            {/* Botón para eliminar la imagen */}
            <Button variant="outlined" color="error" sx={{ marginTop: 2 }} onClick={removeImage}>
              Eliminar Imagen
            </Button>
          </>
        )}

        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
          {selectedProject ? "Guardar Cambios" : "Agregar Proyecto"}
        </Button>
      </Box>

      {/* LISTA DE PROYECTOS */}
      <Typography variant="h5" sx={{ mt: 3 }}>Proyectos Agregados</Typography>
      <Grid container spacing={2}>
        {projects.length > 0 ? (
          projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <ProjectCard project={project} openProject={openProject} editProject={editProject} removeProject={removeProject} />
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ textAlign: "center", width: "100%" }}>No hay proyectos agregados aún.</Typography>
        )}
      </Grid>

      {/* BOTONES DE NAVEGACIÓN */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2, width: "100%" }}>
        <Button variant="contained" color="secondary" onClick={() => navigate("/crea-portafolio")}>← Regresar</Button>
        <Button variant="contained" color="success" onClick={() => navigate("/habilidades")} disabled={projects.length === 0}>Siguiente → Habilidades</Button>
      </Box>

      {/* DRAWER DE VISUALIZACIÓN */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {selectedProject && (
          <Box sx={{ width: 400, padding: 3 }}>
            <Typography variant="h5">{selectedProject.name}</Typography>
            {selectedProject.image && <img src={selectedProject.image} alt={selectedProject.name} style={{ width: "100%", borderRadius: 10, marginTop: 10 }} />}
            <Typography variant="body1" sx={{ mt: 2 }}>{selectedProject.description}</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Tecnologías: {selectedProject.technologies}</Typography>
            {selectedProject.link && <Button href={selectedProject.link} target="_blank" sx={{ mt: 2 }}>Ver Proyecto</Button>}
            <Button sx={{ mt: 2 }} onClick={() => setDrawerOpen(false)}>Cerrar</Button>
          </Box>
        )}
      </Drawer>
    </Box>
  );
};

export default ProjectForm;