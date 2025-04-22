import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, MenuItem, Box, Typography, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const niveles = ["Básico", "Intermedio", "Avanzado", "Nativo"];

const LanguagesForm = () => {
  const { control, handleSubmit, reset, setValue } = useForm();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [languageToEdit, setLanguageToEdit] = useState(null);

  const [languages, setLanguages] = useState([]); // lista local

  useEffect(() => {
    const savedLanguages = localStorage.getItem("languages");
    if (savedLanguages) {
      setLanguages(JSON.parse(savedLanguages)); // Cargar los idiomas guardados
    }
  }, []);

  useEffect(() => {
    if (languages.length > 0) {
      localStorage.setItem("languages", JSON.stringify(languages)); // Guardar en localStorage
    }
  }, [languages]);

  useEffect(() => {
    if (languageToEdit) {
      setValue("idioma", languageToEdit.idioma);
      setValue("nivel", languageToEdit.nivel);
      setIsEditing(true);
    }
  }, [languageToEdit, setValue]);

  const onSubmit = (data) => {
    const newLanguage = {
      ...data,
      id: isEditing ? languageToEdit.id : Date.now(),
    };

    if (isEditing) {
      setLanguages((prev) =>
        prev.map((lang) => (lang.id === newLanguage.id ? newLanguage : lang))
      );
    } else {
      setLanguages((prev) => [...prev, newLanguage]);
    }

    reset();
    setIsEditing(false);
    setLanguageToEdit(null);
  };

  const handleEdit = (lang) => {
    setLanguageToEdit(lang);
  };

  const handleDelete = (id) => {
    const updatedLanguages = languages.filter((lang) => lang.id !== id);
    setLanguages(updatedLanguages); 
  };

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
    <Box
      sx={{
        maxWidth: "600px",
        mx: "auto",
        p: 4,
        boxShadow: 3,
        borderRadius: 3,
        backgroundColor: "white",
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Typography variant="h4" textAlign="center" sx={{ fontFamily: 'Times New Roman' }}>
        {isEditing ? "Editar Idioma" : "Agregar Idioma"}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Controller
          name="idioma"
          control={control}
          defaultValue=""
          rules={{ required: "El idioma es obligatorio" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Idioma"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="nivel"
          control={control}
          defaultValue=""
          rules={{ required: "El nivel es obligatorio" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              select
              label="Nivel"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            >
              {niveles.map((nivel) => (
                <MenuItem key={nivel} value={nivel}>
                  {nivel}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isEditing ? "Guardar Cambios" : "Añadir Idioma"}
        </Button>
      </Box>

      {/* Lista de idiomas agregados */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Times New Roman' }}>
          Idiomas Agregados
        </Typography>
        {languages.length === 0 && (
          <Typography color="text.secondary">Aún no hay idiomas.</Typography>
        )}
        {languages.map((lang) => (
          <Card key={lang.id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">{lang.idioma}</Typography>
              <Typography variant="body2">Nivel: {lang.nivel}</Typography>
              <Box sx={{ mt: 1 }}>
                <Button
                  size="small"
                  onClick={() => handleEdit(lang)}
                  sx={{ mr: 1 }}
                >
                  Editar
                </Button>
                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDelete(lang.id)}
                >
                  Eliminar
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button
          variant="contained"
          onClick={() => navigate("/habilidades")}
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            "&:hover": { backgroundColor: "#333" },
          }}
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Regresar
        </Button>

        <Button
          variant="contained"
          onClick={() => navigate("/referencias")}
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            "&:hover": { backgroundColor: "#333" },
          }}
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Siguiente →
        </Button>
      </Box>
    </Box>
    </motion.div>
  );
};

export default LanguagesForm;
