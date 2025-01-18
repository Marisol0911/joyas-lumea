import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: "none",
              color: "text.primary",
              fontFamily: "Playfair Display",
              fontWeight: 600,
              letterSpacing: 1,
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            LUMÉA
          </Typography>
          <div>
            <Button
              color="inherit"
              component={RouterLink}
              to="/"
              sx={{
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Inicio
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/products"
              sx={{
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Productos
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/about"
              sx={{
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Nosotros
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/contact"
              sx={{
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Contacto
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
