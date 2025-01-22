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
import SearchBar from "./SearchBar";
import Cart from "./Cart";

const Navbar: React.FC = () => {
  const { toggleCart, totalItems } = useCart();

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
                src="/images/logo.png"
                alt="LUMÉA Jewelry"
                sx={{
                  height: "40px",
                  width: "auto",
                }}
              />
            </RouterLink>

            {/* Search Bar */}
            <SearchBar />

            {/* Navigation Links */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Inicio
              </Button>
              <Button
                component={RouterLink}
                to="/products"
                color="inherit"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Productos
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/about"
                sx={{
                  mx: 1,
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
                  mx: 1,
                  "&:hover": {
                    color: "primary.main",
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
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
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
                      backgroundColor: "primary.main",
                      borderRadius: "50%",
                      width: 20,
                      height: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
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
