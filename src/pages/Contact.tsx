import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  IconButton,
  SvgIcon,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Ícono personalizado para TikTok
const TikTokIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 00-1-.08A6.34 6.34 0 003 15.66a6.34 6.34 0 0010.86 4.44l.13-.19v-8.8a8.16 8.16 0 005.69 2.23l.01-3.62c-.01-.04-.09-.08-.1-.08" />
  </SvgIcon>
);

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes implementar la lógica para enviar el formulario
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Información de Contacto */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                fontWeight: 300,
                letterSpacing: "0.1em",
              }}
            >
              Contáctanos
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 6, color: "text.secondary", maxWidth: "500px" }}
            >
              Estamos aquí para ayudarte. Contáctanos para cualquier consulta
              sobre nuestras joyas o servicios personalizados.
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOnIcon sx={{ mr: 2, color: "secondary.main" }} />
                <Typography variant="body1">
                  Carrera 14 #12-30
                  <br />
                  Centro, Armenia, Quindío
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PhoneIcon sx={{ mr: 2, color: "secondary.main" }} />
                <Typography variant="body1">+57 310 8492912</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmailIcon sx={{ mr: 2, color: "secondary.main" }} />
                <Typography variant="body1">
                  joyeriainventario1@gmail.com
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <InstagramIcon sx={{ mr: 2, color: "secondary.main" }} />
                <Typography
                  variant="body1"
                  component="a"
                  href="https://www.instagram.com/joyeria_lumea?igsh=MWVkcGYwOWhrcmFpdw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      color: "secondary.main",
                    },
                  }}
                >
                  @joyeria_lumea
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <TikTokIcon sx={{ mr: 2, color: "secondary.main" }} />
                <Typography
                  variant="body1"
                  component="a"
                  href="https://www.tiktok.com/@joyeria.luma?_t=ZS-8u3SAG320pO&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      color: "secondary.main",
                    },
                  }}
                >
                  @joyeria.luma
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <YouTubeIcon sx={{ mr: 2, color: "secondary.main" }} />
                <Typography
                  variant="body1"
                  component="a"
                  href="https://www.youtube.com/@InventarioJoyeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      color: "secondary.main",
                    },
                  }}
                >
                  @InventarioJoyeria
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Formulario de Contacto */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 6 },
                background: "linear-gradient(145deg, #FFFFFF 0%, #FDF6F7 100%)",
                border: "1px solid rgba(232, 180, 188, 0.2)",
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nombre"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Apellido"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      type="email"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Teléfono" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensaje"
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      size="large"
                      fullWidth
                      sx={{
                        mt: 2,
                        color: "white",
                        "&:hover": {
                          transform: "translateY(-2px)",
                        },
                      }}
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
    </Box>
  );
};

export default Contact;
