import React, { useState, useEffect } from 'react';
import LanguagesForm from './LanguagesForm';
import LanguagesCard from './LanguagesCard';
import { Grid, Container, Typography } from '@mui/material';

const LanguagesList = () => {
  const [languages, setLanguages] = useState(() => {
    const storedLanguages = JSON.parse(localStorage.getItem('languages')) || [];
    return storedLanguages;
  });
  const [languageToEdit, setLanguageToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('languages', JSON.stringify(languages));
  }, [languages]);

  const addLanguage = (newLanguage) => setLanguages(prev => [...prev, newLanguage]);

  const editLanguage = (updatedLanguage) => {
    setLanguages(prev => prev.map(lang => lang.id === updatedLanguage.id ? updatedLanguage : lang));
    setLanguageToEdit(null);
  };

  const removeLanguage = (id) => setLanguages(prev => prev.filter(lang => lang.id !== id));

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Mis Idiomas</Typography>
      <LanguagesForm addLanguage={addLanguage} editLanguage={editLanguage} languageToEdit={languageToEdit} />
      <Grid container spacing={2} mt={2}>
        {languages.map((language) => (
          <Grid item key={language.id} xs={12} sm={6} md={4}>
            <LanguagesCard language={language} removeLanguage={removeLanguage} setLanguageToEdit={setLanguageToEdit} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LanguagesList;