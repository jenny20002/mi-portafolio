import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
  email: yup.string().email("Ingrese un email válido").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Formato de email inválido").required("Ingrese un email válido"),
  telefono: yup.string().matches(/^\d{8}$/, "Debe ser un número de 8 dígitos").required("Este campo es obligatorio"),
  ubicacion: yup
    .string()
    .oneOf(ciudadesHonduras, "Ingrese una ciudad válida de Honduras")
    .required("Este campo es obligatorio"),
});

const PersonalInfoForm = ({ onFormSubmit, formData, setFormData, setPersonalInfo }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Cargar los datos del localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("personalInfo");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.keys(parsedData).forEach((key) => setValue(key, parsedData[key]));
    }
  }, [setValue]);

  // Guardar datos en localStorage y actualizar el estado global
  const onSubmit = (data) => {
    localStorage.setItem("personalInfo", JSON.stringify(data)); // Guardar todos los datos en localStorage
    alert("Perfil guardado con éxito!");

    if (setFormData) {
      setFormData({});
    }

    if (setPersonalInfo) {
      setPersonalInfo(data); // Actualizar el estado global con los datos del formulario
    }

    if (onFormSubmit) {
      onFormSubmit(); // Llamar a la función de envío si está definida
    }
  };

  return (
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
      <TextField
        label="Primer Nombre"
        {...register("primerNombre")}
        variant="outlined"
        fullWidth
        error={!!errors.primerNombre}
        helperText={errors.primerNombre?.message}
      />
      <TextField label="Segundo Nombre" {...register("segundoNombre")} variant="outlined" fullWidth />
      <TextField
        label="Primer Apellido"
        {...register("primerApellido")}
        variant="outlined"
        fullWidth
        error={!!errors.primerApellido}
        helperText={errors.primerApellido?.message}
      />
      <TextField label="Segundo Apellido" {...register("segundoApellido")} variant="outlined" fullWidth />
      <TextField
        label="Ocupación/Profesión"
        {...register("ocupacion")}
        variant="outlined"
        fullWidth
        error={!!errors.ocupacion}
        helperText={errors.ocupacion?.message}
      />
      <TextField
        label="Email"
        type="email"
        {...register("email")}
        variant="outlined"
        fullWidth
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Teléfono"
        type="tel"
        {...register("telefono")}
        variant="outlined"
        fullWidth
        error={!!errors.telefono}
        helperText={errors.telefono?.message}
      />
      <TextField
        label="Ubicación"
        {...register("ubicacion")}
        variant="outlined"
        fullWidth
        error={!!errors.ubicacion}
        helperText={errors.ubicacion?.message}
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary"
        sx={{ padding: 1, fontSize: "1rem", fontWeight: "bold" }}
      >
        Guardar
      </Button>
    </Box>
  );
};

export default PersonalInfoForm;