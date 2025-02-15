import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/hero-jewelry.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            filter: "brightness(0.95)",
            transition: "transform 0.5s ease-in-out",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            color: "#FFFFFF",
          }}
        >
          <Box
            sx={{
              maxWidth: "600px",
              ml: { xs: "auto", md: 0 },
              mr: { xs: "auto", md: 0 },
              textAlign: { xs: "center", md: "left" },
              px: 3,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "4.5rem" },
                mb: 4,
                fontWeight: 200,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                lineHeight: 1.2,
              }}
            >
              Joyería Lúmea
            </Typography>
            <Typography
              variant="h4"
              sx={{
                mb: 6,
                fontWeight: 300,
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.9)",
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: 1.6,
              }}
            >
              Luce tu éxito con el mismo brillo que tu esencia
            </Typography>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/products")}
              sx={{
                color: "#FFFFFF",
                borderColor: "#FFFFFF",
                borderWidth: "1px",
                padding: "16px 48px",
                minWidth: "200px",
                "&:hover": {
                  borderColor: "#FFFFFF",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Descubrir Colección
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Categories Section */}
      <Box sx={{ py: { xs: 8, md: 15 }, backgroundColor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
            <Typography
              variant="overline"
              sx={{
                color: "secondary.main",
                letterSpacing: "0.2em",
                mb: 2,
                display: "block",
              }}
            >
              Descubre
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 300,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                position: "relative",
                display: "inline-block",
                pb: 3,
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "1px",
                  bgcolor: "primary.main",
                },
              }}
            >
              Colecciones Exclusivas
            </Typography>
          </Box>

          <Grid container spacing={4} alignItems="stretch">
            {["Collares", "Anillos", "Aretes", "Pulseras"].map((category) => (
              <Grid item xs={12} sm={6} md={3} key={category}>
                <Paper
                  elevation={0}
                  sx={{
                    position: "relative",
                    height: "500px",
                    overflow: "hidden",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      "& .category-image": {
                        transform: "scale(1.05)",
                      },
                      "& .category-overlay": {
                        backgroundColor: "rgba(0,0,0,0.4)",
                      },
                      "& .category-content": {
                        transform: "translateY(-10px)",
                      },
                    },
                  }}
                  onClick={() => navigate("/products")}
                >
                  <Box
                    className="category-image"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `url(/images/${category.toLowerCase()}.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.8s ease-in-out",
                    }}
                  />
                  <Box
                    className="category-overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
                      transition: "all 0.3s ease-in-out",
                    }}
                  />
                  <Box
                    className="category-content"
                    sx={{
                      position: "relative",
                      mt: "auto",
                      p: 4,
                      transition: "transform 0.3s ease-in-out",
                      zIndex: 1,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#FFFFFF",
                        fontWeight: 300,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        mb: 2,
                      }}
                    >
                      {category}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255,255,255,0.9)",
                        fontWeight: 300,
                        letterSpacing: "0.05em",
                      }}
                    >
                      Descubre nuestra colección de {category.toLowerCase()}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Banner Section */}
      <Banner />

      {/* Footer Section */}
      <Box
        component="footer"
        sx={{
          bgcolor: "background.paper",
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 8 },
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8} justifyContent="space-between">
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 3, letterSpacing: "0.1em" }}>
                Joyería Lúmea
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, maxWidth: "300px" }}>
                Creamos piezas únicas que reflejan la elegancia y sofisticación
                de cada mujer.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 3, letterSpacing: "0.1em" }}>
                Contacto
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Email: info@joyerialumea.com
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Tel: +123 456 789
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 3, letterSpacing: "0.1em" }}>
                Síguenos
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {/* Aquí puedes agregar los íconos de redes sociales */}
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ my: 6 }} />
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "text.secondary" }}
          >
            © {new Date().getFullYear()} Joyería Lúmea. Todos los derechos
            reservados.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
