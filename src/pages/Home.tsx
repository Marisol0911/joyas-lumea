import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  Divider,
  IconButton,
  SvgIcon,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Banner from "../components/Banner";

// Ícono personalizado para TikTok
const TikTokIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 00-1-.08A6.34 6.34 0 003 15.66a6.34 6.34 0 0010.86 4.44l.13-.19v-8.8a8.16 8.16 0 005.69 2.23l.01-3.62c-.01-.04-.09-.08-.1-.08" />
  </SvgIcon>
);

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
                Email: joyeriainventario1@gmail.com
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Tel: +57 310 8492912
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Dirección: Carrera 14 #12-30
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Centro, Armenia, Quindío
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Typography variant="h6" sx={{ letterSpacing: "0.1em", mr: 2 }}>
                  Síguenos
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <IconButton
                    href="https://www.instagram.com/joyeria_lumea?igsh=MWVkcGYwOWhrcmFpdw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "secondary.main",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        color: "primary.main",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <InstagramIcon sx={{ fontSize: 28 }} />
                  </IconButton>
                  <IconButton
                    href="https://www.tiktok.com/@joyeria.luma?_t=ZS-8u3SAG320pO&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "secondary.main",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        color: "primary.main",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <TikTokIcon sx={{ fontSize: 28 }} />
                  </IconButton>
                  <IconButton
                    href="https://www.youtube.com/@InventarioJoyeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "secondary.main",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        color: "primary.main",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <YouTubeIcon sx={{ fontSize: 28 }} />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Payment Methods Section */}
          <Box sx={{ mt: 6, mb: 4 }}>
            <Typography
              variant="h6"
              align="center"
              sx={{ mb: 3, letterSpacing: "0.1em" }}
            >
              Medios de Pago
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 3,
                px: 2,
              }}
            >
              {/* Mercado Pago */}
              <Box
                component="img"
                src="/images/payment/mercadopago.png"
                alt="Mercado Pago"
                sx={{
                  height: 40,
                  filter: "grayscale(100%)",
                  opacity: 0.7,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    filter: "grayscale(0%)",
                    opacity: 1,
                    transform: "translateY(-2px)",
                  },
                }}
              />
              {/* PSE */}
              <Box
                component="img"
                src="/images/payment/pse.png"
                alt="PSE"
                sx={{
                  height: 40,
                  filter: "grayscale(100%)",
                  opacity: 0.7,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    filter: "grayscale(0%)",
                    opacity: 1,
                    transform: "translateY(-2px)",
                  },
                }}
              />
              {/* Visa */}
              <Box
                component="img"
                src="/images/payment/visa.png"
                alt="Visa"
                sx={{
                  height: 40,
                  filter: "grayscale(100%)",
                  opacity: 0.7,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    filter: "grayscale(0%)",
                    opacity: 1,
                    transform: "translateY(-2px)",
                  },
                }}
              />
              {/* Mastercard */}
              <Box
                component="img"
                src="/images/payment/mastercard.png"
                alt="Mastercard"
                sx={{
                  height: 40,
                  filter: "grayscale(100%)",
                  opacity: 0.7,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    filter: "grayscale(0%)",
                    opacity: 1,
                    transform: "translateY(-2px)",
                  },
                }}
              />
              {/* Addi */}
              <Box
                component="img"
                src="/images/payment/addi.png"
                alt="Addi"
                sx={{
                  height: 40,
                  filter: "grayscale(100%)",
                  opacity: 0.7,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    filter: "grayscale(0%)",
                    opacity: 1,
                    transform: "translateY(-2px)",
                  },
                }}
              />
              {/* Sistecredito */}
              <Box
                component="img"
                src="/images/payment/sistecredito.png"
                alt="Sistecredito"
                sx={{
                  height: 40,
                  filter: "grayscale(100%)",
                  opacity: 0.7,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    filter: "grayscale(0%)",
                    opacity: 1,
                    transform: "translateY(-2px)",
                  },
                }}
              />
            </Box>
          </Box>

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
