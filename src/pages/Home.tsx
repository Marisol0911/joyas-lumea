import React from "react";
import { Container, Typography, Box, Button, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          background:
            'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/hero-jewelry.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          color: "#FFFFFF",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #E12D79, #F4B400)",
          },
        }}
      >
        <Container>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 3,
              fontFamily: "Playfair Display",
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            LUMÉA
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: 300,
              letterSpacing: 1,
            }}
          >
            Joyas que cuentan tu historia
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/products")}
            sx={{
              bgcolor: "primary.main",
              color: "#FFFFFF",
              px: 4,
              py: 1.5,
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            Explorar Colección
          </Button>
        </Container>
      </Box>

      <Container sx={{ my: 12 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 8,
            textAlign: "center",
            fontFamily: "Playfair Display",
            color: "text.primary",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -16,
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "2px",
              bgcolor: "secondary.main",
            },
          }}
        >
          Colecciones Exclusivas
        </Typography>
        <Grid container spacing={4}>
          {[
            ["Collares", "collares"],
            ["Anillos", "anillos"],
            ["Aretes", "aretes"],
            ["Pulseras", "pulseras"],
          ].map(([category, url]) => (
            <Grid item xs={12} sm={6} md={3} key={category}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: "center",
                  height: "240px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    "& .category-title": {
                      color: "primary.main",
                    },
                    "& .category-text": {
                      color: "primary.main",
                    },
                  },
                }}
                onClick={() => navigate("/products")}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  className="category-title"
                  sx={{
                    mb: 2,
                    fontFamily: "Playfair Display",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  {category}
                </Typography>
                <Typography
                  variant="body1"
                  className="category-text"
                  sx={{
                    color: "text.secondary",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  Descubre nuestra colección de {category.toLowerCase()}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
