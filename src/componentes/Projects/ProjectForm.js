import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import {motion} from "framer-motion";

const ProjectForm = ({ projects, setProjects }) => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const [imagePreview, setImagePreview] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const formRef = useRef(null);

  // Inicializar proyectos desde localStorage al cargar el componente
  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, [setProjects]);

  // Guardar proyectos en localStorage cada vez que cambien
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  }, [projects]);

  // Convertir imagen a Base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Guardar la imagen en Base64
      };
      reader.readAsDataURL(file); // Convertir la imagen a Base64
    }
  };

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      id: selectedProject ? selectedProject.id : Date.now(),
      image: imagePreview || selectedProject?.image || null, // Guardar la imagen en Base64
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

    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const removeImage = () => {
    setImagePreview(null);
  };

  return (

    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "800px", mx: "auto", padding: 4, boxShadow: 3, borderRadius: 3, backgroundColor: "white" }}>
      <Typography variant="h4" ref={formRef} sx={{ fontFamily: 'Times New Roman' }}>
        {selectedProject ? "Editar Proyecto" : "Agregar Proyecto"}
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
        <TextField
          {...register("name", { required: "El nombre es obligatorio" })}
          label="Nombre del Proyecto"
          fullWidth
          error={!!errors.name}
          helperText={errors.name?.message}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          {...register("description", { required: "La descripción es obligatoria" })}
          label="Descripción"
          multiline
          rows={4}
          fullWidth
          error={!!errors.description}
          helperText={errors.description?.message}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          {...register("technologies", { required: "Las tecnologías son obligatorias" })}
          label="Tecnologías"
          fullWidth
          error={!!errors.technologies}
          helperText={errors.technologies?.message}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          {...register("link")}
          label="Enlace (opcional)"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />

        <Button variant="contained" component="label" startIcon={<CloudUploadIcon />}>
          Subir Imagen
          <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
        </Button>

        {imagePreview && (
          <>
            <img src={imagePreview} alt="Vista previa" style={{ width: "100%", maxHeight: "200px", objectFit: "cover", marginTop: 10, borderRadius: 10 }} />
            <Button variant="outlined" color="error" sx={{ marginTop: 2 }} onClick={removeImage}>
              Eliminar Imagen
            </Button>
          </>
        )}

        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
          {selectedProject ? "Guardar Cambios" : "Agregar Proyecto"}
        </Button>
      </Box>

      <Typography variant="h5" sx={{ mt: 3, fontFamily: 'Times New Roman' }}>Proyectos Agregados</Typography>
      <Grid container spacing={2}>
        {projects.length > 0 ? (
          projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <ProjectCard
                project={project}
                editProject={editProject}
                removeProject={removeProject}
              />
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ textAlign: "center", width: "100%", mt:2 }}>No hay proyectos agregados aún.</Typography>
        )}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2, width: "100%" }}>
        <Button variant="contained" color="secondary" onClick={() => navigate("/crea-portafolio")}>← Regresar</Button>
        <Button variant="contained" color="success" onClick={() => navigate("/habilidades")} disabled={projects.length === 0}>Siguiente →</Button>
      </Box>
    </Box>
    </motion.div>
  );
};

export default ProjectForm;
