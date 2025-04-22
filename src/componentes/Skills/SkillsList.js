import React, { useState, useEffect } from "react";
import SkillsForm from "./SkillsForm";
import SkillsCard from "./SkillsCard";
import { Grid, Container, Typography } from "@mui/material";

const SkillsList = () => {
  const [skills, setSkills] = useState(() => {
    const storedSkills = JSON.parse(localStorage.getItem("skills")) || [];
    return storedSkills.map(skill => ({ ...skill, level: parseFloat(skill.level) }));
  });
  const [skillToEdit, setSkillToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  const addSkill = (newSkill) => setSkills(prevSkills => [...prevSkills, newSkill]);

  const editSkill = (updatedSkill) => {
    setSkills(prevSkills => prevSkills.map(skill => skill.id === updatedSkill.id ? updatedSkill : skill));
    setSkillToEdit(null);
  };

  const removeSkill = (id) => setSkills(prevSkills => prevSkills.filter(skill => skill.id !== id));

  return (
    <Container>
      <SkillsForm addSkill={addSkill} editSkill={editSkill} skillToEdit={skillToEdit} />

      <Grid container spacing={2} mt={2}>
        {skills.map((skill) => (
          <Grid item key={skill.id} xs={12} sm={6} md={4}>
            <SkillsCard skill={skill} removeSkill={removeSkill} setSkillToEdit={setSkillToEdit} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SkillsList;