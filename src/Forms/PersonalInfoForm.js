import React, { useEffect, useState } from "react";
<<<<<<< HEAD
=======
import { useTranslation } from "react-i18next";
>>>>>>> 0f8099d (Implementacion de traduccion)
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

const ciudadesHonduras = [
  "La Ceiba", "Trujillo", "Comayagua", "Santa Rosa de Copán", "San Pedro Sula",
  "Choluteca", "Yuscarán", "Tegucigalpa", "Puerto Lempira", "La Esperanza",
  "Roatán", "La Paz", "Gracias", "Nueva Ocotepeque", "Juticalpa", "Santa Bárbara",
  "Nacaome", "Yoro"
];

const schema = yup.object().shape({
  primerNombre: yup.string().required("Ingrese al menos un nombre"),
  segundoNombre: yup.string(),
  primerApellido: yup.string().required("Ingrese al menos un apellido"),
  segundoApellido: yup.string(),
  ocupacion: yup.string().required("Este campo es obligatorio"),
  email: yup.string().email("Ingrese un email válido")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Formato de email inválido")
    .required("Ingrese un email válido"),
  telefono: yup.string().matches(/^\d{8}$/, "Debe ser un número de 8 dígitos").required("Este campo es obligatorio"),
  ubicacion: yup.string().oneOf(ciudadesHonduras, "Ingrese una ciudad válida de Honduras").required("Este campo es obligatorio"),
});

const PersonalInfoForm = ({ onFormSubmit, formData, setFormData, setPersonalInfo }) => {
<<<<<<< HEAD
=======
  const { t } = useTranslation();
>>>>>>> 0f8099d (Implementacion de traduccion)
  const navigate = useNavigate();
  const [showNextButton, setShowNextButton] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    // Eliminar cualquier dato previo si se vuelve a esta página
    localStorage.removeItem("personalInfo");
    reset();
  }, [reset]);

  const onSubmit = (data) => {
    localStorage.setItem("personalInfo", JSON.stringify(data));
    alert("Perfil guardado con éxito!");
    setShowNextButton(true);

    if (setFormData) setFormData({});
    if (setPersonalInfo) setPersonalInfo(data);
    if (onFormSubmit) onFormSubmit();
  };

  const handleNext = () => {
    // Borra los datos antes de avanzar a evitar carga al volver
    localStorage.removeItem("personalInfo");
    navigate("/crea-portafolio");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
          width: "90%",
          margin: "auto",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#fff",
          '@media (max-width: 600px)': { maxWidth: "100%" }
        }}
      >
<<<<<<< HEAD
        <TextField label="Primer Nombre" {...register("primerNombre")} variant="outlined" fullWidth error={!!errors.primerNombre} helperText={errors.primerNombre?.message} />
        <TextField label="Segundo Nombre" {...register("segundoNombre")} variant="outlined" fullWidth />
        <TextField label="Primer Apellido" {...register("primerApellido")} variant="outlined" fullWidth error={!!errors.primerApellido} helperText={errors.primerApellido?.message} />
        <TextField label="Segundo Apellido" {...register("segundoApellido")} variant="outlined" fullWidth />
        <TextField label="Ocupación/Profesión" {...register("ocupacion")} variant="outlined" fullWidth error={!!errors.ocupacion} helperText={errors.ocupacion?.message} />
        <TextField label="Email" type="email" {...register("email")} variant="outlined" fullWidth error={!!errors.email} helperText={errors.email?.message} />
        <TextField label="Teléfono" type="tel" {...register("telefono")} variant="outlined" fullWidth error={!!errors.telefono} helperText={errors.telefono?.message} />
        <TextField label="Ubicación" {...register("ubicacion")} variant="outlined" fullWidth error={!!errors.ubicacion} helperText={errors.ubicacion?.message} />

        <Button type="submit" variant="contained" color="primary" sx={{ padding: 1, fontSize: "1rem", fontWeight: "bold" }}>
          Guardar
=======
        <TextField label={t("Primer Nombre")} {...register("primerNombre")} variant="outlined" fullWidth error={!!errors.primerNombre} helperText={errors.primerNombre?.message} />
        <TextField label={t("Segundo Nombre")} {...register("segundoNombre")} variant="outlined" fullWidth />
        <TextField label={t("Primer Apellido")} {...register("primerApellido")} variant="outlined" fullWidth error={!!errors.primerApellido} helperText={errors.primerApellido?.message} />
        <TextField label={t("Segundo Apellido")} {...register("segundoApellido")} variant="outlined" fullWidth />
        <TextField label={t("Ocupación/Profesión")} {...register("ocupacion")} variant="outlined" fullWidth error={!!errors.ocupacion} helperText={errors.ocupacion?.message} />
        <TextField label={t("Email")} type="email" {...register("email")} variant="outlined" fullWidth error={!!errors.email} helperText={errors.email?.message} />
        <TextField label={t("Teléfono")}  type="tel" {...register("telefono")} variant="outlined" fullWidth error={!!errors.telefono} helperText={errors.telefono?.message} />
        <TextField label={t("Ubicación")} {...register("ubicacion")} variant="outlined" fullWidth error={!!errors.ubicacion} helperText={errors.ubicacion?.message} />

        <Button type="submit" variant="contained" color="primary" sx={{ padding: 1, fontSize: "1rem", fontWeight: "bold" }}>
          {t('Guardar')}
>>>>>>> 0f8099d (Implementacion de traduccion)
        </Button>

        {showNextButton && (
          <Button variant="contained" color="secondary" sx={{ padding: 1, fontSize: "1rem", fontWeight: "bold" }} onClick={handleNext}>
<<<<<<< HEAD
            Siguiente
=======
            {t('Siguiente')}
>>>>>>> 0f8099d (Implementacion de traduccion)
          </Button>
        )}
      </Box>
    </motion.div>
  );
};

export default PersonalInfoForm;

