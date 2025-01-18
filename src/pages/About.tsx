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
          About Lumea Jewelry
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Crafting Timeless Elegance Since 2010
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          At Lumea Jewelry, we believe that every piece of jewelry tells a
          unique story. Our passion for craftsmanship and attention to detail
          has made us a trusted name in fine jewelry for over a decade.
        </Typography>
      </Box>

      {/* Values Section */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 4, height: "100%", textAlign: "center" }}>
            <DiamondIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              Quality
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We use only the finest materials and maintain the highest
              standards of craftsmanship in every piece we create.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 4, height: "100%", textAlign: "center" }}>
            <StarIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              Design
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Our designs blend timeless elegance with contemporary style,
              creating pieces that are both modern and enduring.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 4, height: "100%", textAlign: "center" }}>
            <HandshakeIcon
              sx={{ fontSize: 40, color: "primary.main", mb: 2 }}
            />
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              Service
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We pride ourselves on providing exceptional customer service and
              ensuring complete satisfaction with every purchase.
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
          Our Story
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Founded in 2010, Lumea Jewelry began as a small family-owned boutique
          with a vision to create beautiful, high-quality jewelry that would
          become cherished family heirlooms.
        </Typography>
        <Typography variant="body1">
          Today, we continue to uphold these values while embracing modern
          technology and contemporary design trends. Each piece in our
          collection is carefully crafted to meet our exacting standards of
          quality and beauty.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
