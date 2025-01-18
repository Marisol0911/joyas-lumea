import React from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import StarIcon from "@mui/icons-material/Star";
import HandshakeIcon from "@mui/icons-material/Handshake";

const About: React.FC = () => {
  return (
    <Container sx={{ py: 8 }}>
      {/* Main About Section */}
      <Box sx={{ mb: 8, textAlign: "center" }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ mb: 4, fontFamily: "Playfair Display" }}
        >
          Sobre Lumea Jewelry
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Creando Elegancia Atemporal Desde 2010
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          En Lumea Jewelry, creemos que cada pieza de joyería cuenta una
          historia única. Nuestra pasión por la artesanía y atención al detalle
          nos ha convertido en un nombre de confianza en joyería fina por más de
          una década.
        </Typography>
      </Box>

      {/* Values Section */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 4, height: "100%", textAlign: "center" }}>
            <DiamondIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              Calidad
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Utilizamos solo los mejores materiales y mantenemos los más altos
              estándares de artesanía en cada pieza que creamos.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 4, height: "100%", textAlign: "center" }}>
            <StarIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              Diseño
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Nuestros diseños combinan la elegancia atemporal con el estilo
              contemporáneo, creando piezas que son modernas y duraderas.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 4, height: "100%", textAlign: "center" }}>
            <HandshakeIcon
              sx={{ fontSize: 40, color: "primary.main", mb: 2 }}
            />
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              Servicio
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Nos enorgullecemos de brindar un servicio al cliente excepcional y
              garantizar la satisfacción completa con cada compra.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Story Section */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 4, fontFamily: "Playfair Display" }}
        >
          Nuestra Historia
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Fundada en 2010, Lumea Jewelry comenzó como una pequeña boutique
          familiar con la visión de crear hermosas joyas de alta calidad que se
          convertirían en preciadas herencias familiares.
        </Typography>
        <Typography variant="body1">
          Hoy, continuamos manteniendo estos valores mientras abrazamos la
          tecnología moderna y las tendencias contemporáneas de diseño. Cada
          pieza en nuestra colección está cuidadosamente elaborada para cumplir
          con nuestros exigentes estándares de calidad y belleza.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
