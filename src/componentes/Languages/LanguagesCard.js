import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardActions, Typography, IconButton, Box, Rating } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Flag from 'react-world-flags';

const LanguagesCard = ({ language, removeLanguage, setLanguageToEdit }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
      <CardContent>
        <Box display="flex" alignItems="center" gap={2}>
          <Flag code={language.countryCode} style={{ width: 40, height: 30 }} />
          <Typography variant="h6" component="div">
            {language.name}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <Typography variant="body2" color="text.secondary">
            Nivel:
          </Typography>
          <Rating name="read-only" value={language.level} readOnly precision={0.5} />
        </Box>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="editar"
          onClick={() => setLanguageToEdit(language)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="eliminar"
          onClick={() => removeLanguage(language.id)}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

LanguagesCard.propTypes = {
  language: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  }).isRequired,
  removeLanguage: PropTypes.func.isRequired,
  setLanguageToEdit: PropTypes.func.isRequired,
};

export default LanguagesCard;