import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ProjectList = () => {
  const [projects, setProjects] = useState(() => JSON.parse(localStorage.getItem("projects")) || []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const removeProject = (id) => setProjects(projects.filter((p) => p.id !== id));

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Mis Proyectos</Typography>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ProjectCard project={project} removeProject={removeProject} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectList;