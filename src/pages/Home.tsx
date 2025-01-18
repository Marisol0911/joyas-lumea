import React from "react";
import { Container, Typography, Box, Button, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background:
            'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/hero-jewelry.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#8B4513",
          height: "70vh",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            component="h1"
            sx={{ mb: 3, fontFamily: "Playfair Display" }}
          >
            Discover Timeless Elegance
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Handcrafted jewelry that tells your unique story
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate("/products")}
          >
            Explore Collection
          </Button>
        </Container>
      </Box>

      {/* Featured Categories */}
      <Container sx={{ my: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{ mb: 6, textAlign: "center", fontFamily: "Playfair Display" }}
        >
          Featured Collections
        </Typography>
        <Grid container spacing={4}>
          {["Necklaces", "Rings", "Earrings", "Bracelets"].map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  textAlign: "center",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
                onClick={() => navigate("/products")}
              >
                <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                  {category}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Explore our {category.toLowerCase()} collection
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
