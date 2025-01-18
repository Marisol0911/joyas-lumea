import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  Alert,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{ mb: 6, textAlign: "center", fontFamily: "Playfair Display" }}
      >
        Contáctanos
      </Typography>

      <Grid container spacing={6}>
        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 4 }}>
            <Paper sx={{ p: 3, height: "100%" }}>
              <Box sx={{ mb: 4 }}>
                <LocationOnIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Visítanos
                </Typography>
                <Typography color="text.secondary">
                  Calle 123 #45-67
                  <br />
                  Bogotá, Colombia
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <PhoneIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Llámanos
                </Typography>
                <Typography color="text.secondary">
                  +57 (601) 123-4567
                </Typography>
              </Box>

              <Box>
                <EmailIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Escríbenos
                </Typography>
                <Typography color="text.secondary">
                  info@lumeajewelry.com
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4 }}>
            {submitted && (
              <Alert severity="success" sx={{ mb: 3 }}>
                ¡Gracias por tu mensaje! Te contactaremos pronto.
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Correo Electrónico"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Asunto"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={4}
                    label="Mensaje"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2 }}
                  >
                    Enviar Mensaje
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
