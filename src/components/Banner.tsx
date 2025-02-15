import React from "react";
import { Box, Container, Grid, Typography, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Banner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 8, md: 15 }, backgroundColor: "#FDFAFA" }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            background: "linear-gradient(145deg, #FFFFFF 0%, #FDF6F7 100%)",
            overflow: "hidden",
            border: "1px solid rgba(232, 180, 188, 0.2)",
            position: "relative",
          }}
        >
          <Grid container spacing={0}>
            {/* Texto del Banner */}
            <Grid item xs={12} md={6} sx={{ p: { xs: 4, md: 8 } }}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  maxWidth: "480px",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "secondary.main",
                    letterSpacing: "0.2em",
                    mb: 2,
                    display: "block",
                  }}
                >
                  Edición Limitada
                </Typography>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    fontWeight: 300,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    mb: 4,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -16,
                      left: 0,
                      width: "40px",
                      height: "1px",
                      background: "linear-gradient(90deg, #B8860B, #E8B4BC)",
                    },
                  }}
                >
                  Nueva Colección
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 4,
                    lineHeight: 1.8,
                    fontSize: "1.1rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  Descubre nuestra exclusiva colección de joyas con diamantes.
                  Cada pieza está meticulosamente elaborada para reflejar la
                  máxima elegancia y sofisticación.
                </Typography>
                <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "secondary.main",
                      fontWeight: 300,
                      letterSpacing: "0.1em",
                      fontSize: "1.2rem",
                    }}
                  >
                    20% de descuento
                  </Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => navigate("/products")}
                    sx={{
                      borderWidth: "1px",
                      "&:hover": {
                        borderWidth: "1px",
                      },
                    }}
                  >
                    Ver Colección
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Imagen Principal */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "400px", md: "600px" },
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="https://raw.githubusercontent.com/marisol001/joyas-lumea/main/public/images/hero-jewelry.jpg"
                  alt="Colección de Joyas Exclusivas"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    transform: "scale(1.02)",
                    transition: "transform 0.6s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background:
                      "linear-gradient(to top, rgba(232, 180, 188, 0.6), transparent)",
                    height: "50%",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: 4,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "white",
                      fontWeight: 300,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                    }}
                  >
                    Colección Diamantes
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Decorative Elements */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "200px",
              height: "200px",
              background:
                "radial-gradient(circle at center, rgba(232, 180, 188, 0.1) 0%, transparent 70%)",
              transform: "translate(30%, -30%)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "300px",
              height: "300px",
              background:
                "radial-gradient(circle at center, rgba(232, 180, 188, 0.1) 0%, transparent 70%)",
              transform: "translate(-30%, 30%)",
            }}
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default Banner;
