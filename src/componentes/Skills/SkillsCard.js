import React from "react";
<<<<<<< HEAD
=======
import { useTranslation } from "react-i18next";
>>>>>>> 0f8099d (Implementacion de traduccion)
import PropTypes from "prop-types";
import { Card, CardContent, Typography, Button, Box, Rating } from "@mui/material";
import { motion } from "framer-motion";

const SkillsCard = ({ skill, removeSkill, setSkillToEdit }) => {
<<<<<<< HEAD
=======
   const { t } = useTranslation();
>>>>>>> 0f8099d (Implementacion de traduccion)
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h6">{skill.name}</Typography>
          <Typography variant="body2" color="textSecondary">{skill.category}</Typography>

          <Box display="flex" alignItems="center" mt={1}>
            <Rating value={parseFloat(skill.level)} precision={0.5} readOnly />
            <span>{skill.level} / 5</span>
          </Box>

<<<<<<< HEAD
          <Button color="primary" onClick={() => setSkillToEdit(skill)}>Editar</Button>
          <Button color="error" onClick={() => removeSkill(skill.id)}>Eliminar</Button>
=======
          <Button color="primary" onClick={() => setSkillToEdit(skill)}>{t('Editar')}</Button>
          <Button color="error" onClick={() => removeSkill(skill.id)}>{t('Eliminar')}</Button>
>>>>>>> 0f8099d (Implementacion de traduccion)
        </CardContent>
      </Card>
    </motion.div>
  );
};

SkillsCard.propTypes = {
  skill: PropTypes.object.isRequired,
  removeSkill: PropTypes.func.isRequired,
  setSkillToEdit: PropTypes.func.isRequired
};

export default SkillsCard;