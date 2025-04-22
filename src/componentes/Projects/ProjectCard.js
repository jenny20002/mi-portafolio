import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, Button, CardMedia, Box } from "@mui/material";
import { motion } from "framer-motion";

const ProjectCard = ({ project, openProject, editProject, removeProject }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card sx={{ maxWidth: 345 }}>
        {project.image && <CardMedia component="img" height="200" image={project.image} alt={project.name} />}
        <CardContent>
          <Typography variant="h6">{project.name}</Typography>
          <Typography variant="body2">{project.description}</Typography>
          <Typography variant="caption">Tecnologías: {project.technologies}</Typography>
          <Box mt={1}>
            <Button color="secondary" onClick={() => editProject(project)}>Editar</Button>
            <Button color="error" onClick={() => removeProject(project.id)}>Eliminar</Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  openProject: PropTypes.func.isRequired,
  editProject: PropTypes.func.isRequired,
  removeProject: PropTypes.func.isRequired,
};

export default ProjectCard;