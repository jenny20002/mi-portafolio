import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AiOutlineUser } from "react-icons/ai"; // Ícono de usuario

const ReferencesCard = ({ reference }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: "20px auto", padding: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6">
          <AiOutlineUser /> {reference.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Relación: {reference.relationship}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, fontStyle: "italic" }}>
          "{reference.testimonial}"
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReferencesCard;