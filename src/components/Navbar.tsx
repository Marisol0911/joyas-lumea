import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";
import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
  const { toggleCart, totalItems } = useCart();

  const handleSearch = (searchTerm: string) => {
    // Aquí puedes implementar la lógica de búsqueda
    console.log("Buscando:", searchTerm);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        sx={{ backdropFilter: "blur(8px)" }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", padding: "8px 0" }}>
            {/* Logo */}
            <RouterLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                component="img"
                src="/images/logo.svg"
                alt="LUMÉA Jewelry"
                sx={{
                  height: { xs: "50px", sm: "60px", md: "70px" },
                  width: "auto",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)",
                    filter: "brightness(1.03)",
                  },
                  objectFit: "contain",
                  my: { xs: 1, md: 1.5 },
                  mx: { xs: 1, md: 2 },
                  display: "block",
                  maxWidth: "200px",
                }}
              />
            </RouterLink>

            {/* Search Bar */}
            <Box sx={{ flex: 1, mx: { xs: 2, md: 4 }, maxWidth: "500px" }}>
              <SearchBar onSearch={handleSearch} />
            </Box>

            {/* Navigation Links */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, md: 2 },
              }}
            >
              <Button
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{
                  display: { xs: "none", md: "block" },
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                Inicio
              </Button>
              <Button
                component={RouterLink}
                to="/products"
                color="inherit"
                sx={{
                  display: { xs: "none", md: "block" },
                  "&:hover": {
                    color: "secondary.main",
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
                  display: { xs: "none", sm: "block" },
                  "&:hover": {
                    color: "secondary.main",
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
                  display: { xs: "none", sm: "block" },
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                Contacto
              </Button>
              <IconButton
                color="inherit"
                onClick={toggleCart}
                sx={{
                  position: "relative",
                  "&:hover": {
                    backgroundColor: "rgba(232, 180, 188, 0.1)",
                  },
                }}
              >
                <ShoppingBagOutlinedIcon />
                {totalItems > 0 && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: -8,
                      right: -8,
                      backgroundColor: "secondary.main",
                      borderRadius: "50%",
                      width: 20,
                      height: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      color: "white",
                    }}
                  >
                    {totalItems}
                  </Box>
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Cart />
    </>
  );
};

export default Navbar;
