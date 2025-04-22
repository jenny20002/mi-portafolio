import React from "react";
import Slider from "react-slick";
import { Card, CardContent, Typography, Avatar, Box, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const ReferencesList = ({ references, onEdit, onDelete }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ArrowBackIos style={{ color: "black" }} />,
    nextArrow: <ArrowForwardIos style={{ color: "black" }} />,
  };

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mt: 4 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Referencias / Testimonios
      </Typography>
      <Slider {...settings}>
        {references.map((ref, index) => (
          <Card
            key={index}
            sx={{
              mx: 2,
              p: 3,
              borderRadius: 3,
              boxShadow: 5,
              backgroundColor: "#f9f9f9",
            }}
          >
            <CardContent>
              {ref.foto && (
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  <Avatar
                    src={ref.foto}
                    sx={{ width: 100, height: 100 }}
                  />
                </Box>
              )}
              <Typography variant="h6" textAlign="center">{ref.nombre}</Typography>
              <Typography color="text.secondary" textAlign="center">{ref.relacion}</Typography>
              <Typography sx={{ mt: 2, textAlign: "center" }}>{ref.testimonio}</Typography>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ mx: 1 }}
                  onClick={() => onEdit(ref)}
                >
                  Editar
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  sx={{ mx: 1 }}
                  onClick={() => onDelete(ref.id)}
                >
                  Eliminar
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default ReferencesList;
