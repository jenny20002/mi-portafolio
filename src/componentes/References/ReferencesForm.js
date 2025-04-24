import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Avatar,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
<<<<<<< HEAD
=======
import { useTranslation } from "react-i18next";
>>>>>>> 0f8099d (Implementacion de traduccion)
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const relaciones = ["Amig@", "Colega", "Cliente"];

const ReferencesForm = () => {
<<<<<<< HEAD
=======
  const { t } = useTranslation(); 
>>>>>>> 0f8099d (Implementacion de traduccion)
  const { control, handleSubmit, reset, setValue } = useForm();
  const [references, setReferences] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingRef, setEditingRef] = useState(null);
  const [fotoPreview, setFotoPreview] = useState(null);
  const navigate = useNavigate();

  // Cargar desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem("references");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setReferences(parsed);
      } catch (e) {
        console.error("Error al cargar referencias:", e);
      }
    }
  }, []);

  const onSubmit = (data) => {
    const nuevaReferencia = {
      id: isEditing ? editingRef.id : Date.now(),
      ...data,
      foto: fotoPreview || null,
    };

    if (!isEditing) {
      const yaExiste = references.some(
        (ref) =>
          ref.nombre.trim().toLowerCase() === data.nombre.trim().toLowerCase() &&
          ref.relacion === data.relacion &&
          ref.testimonio.trim() === data.testimonio.trim()
      );
      if (yaExiste) {
        alert("Esta referencia ya ha sido agregada.");
        return;
      }
    }

    const updated = isEditing
      ? references.map((ref) =>
          ref.id === editingRef.id ? nuevaReferencia : ref
        )
      : [...references, nuevaReferencia]; // Combina referencias sin duplicación
    setReferences(updated); // Actualiza el estado con la variable 'updated'
    localStorage.setItem("references", JSON.stringify(updated)); // Guarda 'updated' en localStorage
    
    reset();
    setFotoPreview(null);
    setIsEditing(false);
    setEditingRef(null);
  };

  const handleEdit = (ref) => {
    setEditingRef(ref);
    setIsEditing(true);
    setValue("nombre", ref.nombre);
    setValue("relacion", ref.relacion);
    setValue("testimonio", ref.testimonio);
    setFotoPreview(ref.foto || null);
  };

  const handleDelete = (id) => {
    const filtered = references.filter((ref) => ref.id !== id);
    setReferences(filtered);
    localStorage.setItem("references", JSON.stringify(filtered));
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 4,
        boxShadow: 4,
        borderRadius: 3,
        backgroundColor: "white",
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mb: 3, fontFamily: "Times New Roman" }}
      >
<<<<<<< HEAD
        {isEditing ? "Editar Referencia" : "Agregar Referencia"}
=======
        {isEditing ? t("Editar Referencia") : t("Agregar Referencia")}
>>>>>>> 0f8099d (Implementacion de traduccion)
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="nombre"
          control={control}
          defaultValue=""
<<<<<<< HEAD
          rules={{ required: "Nombre requerido" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Nombre"
=======
          rules={{ required: t("Nombre requerido") }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label={t("Nombre")}
>>>>>>> 0f8099d (Implementacion de traduccion)
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              sx={{ mb: 2 }}
              InputLabelProps={{ style: { fontFamily: "Times New Roman" } }}
              InputProps={{ style: { fontFamily: "Times New Roman" } }}
            />
          )}
        />

        <Controller
          name="relacion"
          control={control}
          defaultValue=""
<<<<<<< HEAD
          rules={{ required: "Relación requerida" }}
=======
          rules={{ required: t("Relación requerida") }}
>>>>>>> 0f8099d (Implementacion de traduccion)
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              select
<<<<<<< HEAD
              label="Relación"
=======
              label={t("Relación")}
>>>>>>> 0f8099d (Implementacion de traduccion)
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              sx={{ mb: 2 }}
              InputLabelProps={{ style: { fontFamily: "Times New Roman" } }}
              InputProps={{ style: { fontFamily: "Times New Roman" } }}
            >
              {relaciones.map((rel) => (
                <MenuItem
                  key={rel}
                  value={rel}
                  style={{ fontFamily: "Times New Roman" }}
                >
                  {rel}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <Controller
          name="testimonio"
          control={control}
          defaultValue=""
<<<<<<< HEAD
          rules={{ required: "Testimonio requerido" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Testimonio"
=======
          rules={{ required: t("Testimonio requerido") }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label={t("Testimonio")}
>>>>>>> 0f8099d (Implementacion de traduccion)
              fullWidth
              multiline
              rows={4}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              sx={{ mb: 2 }}
              InputLabelProps={{ style: { fontFamily: "Times New Roman" } }}
              InputProps={{ style: { fontFamily: "Times New Roman" } }}
            />
          )}
        />

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Button
            variant="contained"
            component="label"
            sx={{ fontFamily: "Times New Roman" }}
          >
<<<<<<< HEAD
            Subir Foto
=======
            {t('Subir Foto')}
>>>>>>> 0f8099d (Implementacion de traduccion)
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleFotoChange}
            />
          </Button>
          <Avatar
            src={fotoPreview || undefined}
            sx={{ width: 56, height: 56, ml: 2 }}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ fontFamily: "Times New Roman", mb: 2 }}
        >
<<<<<<< HEAD
          {isEditing ? "Guardar Cambios" : "Agregar Referencia"}
=======
          {isEditing ? t("Guardar Cambios") : t("Agregar Referencia")}
>>>>>>> 0f8099d (Implementacion de traduccion)
        </Button>
      </form>

      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Times New Roman", mb: 2 }}
        >
<<<<<<< HEAD
          Referencias Agregadas
=======
          {t('Referencias Agregadas')}
>>>>>>> 0f8099d (Implementacion de traduccion)
        </Typography>

        {references.length === 0 ? (
          <Typography sx={{ fontFamily: "Times New Roman" }}>
<<<<<<< HEAD
            Aún no hay referencias.
=======
            {t('Aún no hay referencias.')}
>>>>>>> 0f8099d (Implementacion de traduccion)
            </Typography>
) : references.length === 1 ? (
  <Card>
    <CardContent>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Avatar
          src={references[0].foto || undefined}
          sx={{ width: 56, height: 56, mr: 2 }}
        />
        <Box>
          <Typography variant="h6" sx={{ fontFamily: "Times New Roman" }}>
            {references[0].nombre}
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "Times New Roman" }}>
<<<<<<< HEAD
            Relación: {references[0].relacion}
=======
            {t('Relación:')} {references[0].relacion}
>>>>>>> 0f8099d (Implementacion de traduccion)
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ fontFamily: "Times New Roman", mt: 1 }}>
        "{references[0].testimonio}"
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        onClick={() => handleEdit(references[0])}
        sx={{ fontFamily: "Times New Roman" }}
      >
<<<<<<< HEAD
        Editar
=======
        {t('Editar')}
>>>>>>> 0f8099d (Implementacion de traduccion)
      </Button>
      <Button
        size="small"
        color="error"
        onClick={() => handleDelete(references[0].id)}
        sx={{ fontFamily: "Times New Roman" }}
      >
<<<<<<< HEAD
        Eliminar
=======
        {t('Eliminar')}
>>>>>>> 0f8099d (Implementacion de traduccion)
      </Button>
    </CardActions>
  </Card>
) : (
  <Slider {...settings}>
    {references.map((ref) => (
      <div key={ref.id}>
        <Card sx={{ mx: 2 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Avatar
                src={ref.foto || undefined}
                sx={{ width: 56, height: 56, mr: 2 }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontFamily: "Times New Roman" }}>
                  {ref.nombre}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "Times New Roman" }}>
<<<<<<< HEAD
                  Relación: {ref.relacion}
=======
                  {t('Relación:')} {ref.relacion}
>>>>>>> 0f8099d (Implementacion de traduccion)
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ fontFamily: "Times New Roman", mt: 1 }}>
              "{ref.testimonio}"
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => handleEdit(ref)}
              sx={{ fontFamily: "Times New Roman" }}
            >
<<<<<<< HEAD
              Editar
=======
             {t('Editar')}
>>>>>>> 0f8099d (Implementacion de traduccion)
            </Button>
            <Button
              size="small"
              color="error"
              onClick={() => handleDelete(ref.id)}
              sx={{ fontFamily: "Times New Roman" }}
            >
<<<<<<< HEAD
              Eliminar
=======
              {t('Eliminar')}
>>>>>>> 0f8099d (Implementacion de traduccion)
            </Button>
          </CardActions>
        </Card>
      </div>
    ))}
  </Slider>
        )}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button
          onClick={() => navigate("/idiomas")}
          variant="contained"
          sx={{ backgroundColor: "#000", color: "#fff" }}
        >
<<<<<<< HEAD
          ← Regresar
=======
          {t('← Regresar')}
>>>>>>> 0f8099d (Implementacion de traduccion)
        </Button>
        <Button
          onClick={() => navigate("/contactos")}
          variant="contained"
          sx={{ backgroundColor: "#000", color: "#fff" }}
        >
<<<<<<< HEAD
          Siguiente →
=======
          {t('Siguiente →')}
>>>>>>> 0f8099d (Implementacion de traduccion)
        </Button>
      </Box>
    </Box>
  );
};

export default ReferencesForm;




