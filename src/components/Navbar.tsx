import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  IconButton,
  Badge,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";

const Navbar: React.FC = () => {
  const { toggleCart, totalItems } = useCart();

  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                height: "60px",
              }}
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
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                color="inherit"
                component={RouterLink}
                to="/"
                sx={{
                  mx: 1,
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
                  mx: 1,
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
                onClick={toggleCart}
                sx={{
                  ml: 2,
                  color: "text.primary",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                <Badge
                  badgeContent={totalItems}
                  color="primary"
                  sx={{
                    "& .MuiBadge-badge": {
                      bgcolor: "primary.main",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  <ShoppingBagOutlinedIcon />
                </Badge>
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
