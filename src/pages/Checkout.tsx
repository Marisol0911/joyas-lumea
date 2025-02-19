import React from "react";
import { useCart } from "../context/CartContext";
import CheckoutForm from "../components/CheckoutForm";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Checkout: React.FC = () => {
  const { cart, total } = useCart();
  const navigate = useNavigate();

  // Redirigir si el carrito está vacío
  React.useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  if (cart.length === 0) {
    return null;
  }

  const description = `Compra en Joyas Lumea - ${cart.length} ${
    cart.length === 1 ? "artículo" : "artículos"
  }`;

  return (
    <Box sx={{ minHeight: "100vh", py: 8, bgcolor: "background.default" }}>
      <Container>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          color="primary"
          sx={{ mb: 4 }}
        >
          Checkout
        </Typography>
        <CheckoutForm amount={total} description={description} />
      </Container>
    </Box>
  );
};

export default Checkout;
