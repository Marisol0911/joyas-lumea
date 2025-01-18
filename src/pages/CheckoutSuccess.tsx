import React from "react";
import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const CheckoutSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        py: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 200px)",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 6,
          textAlign: "center",
          maxWidth: 600,
          mx: "auto",
        }}
      >
        <CheckCircleOutlineIcon
          sx={{
            fontSize: 80,
            color: "primary.main",
            mb: 3,
          }}
        />
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 3,
            fontFamily: "Playfair Display",
          }}
        >
          ¡Gracias por tu Compra!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Tu pedido ha sido confirmado y será procesado pronto. Te enviaremos un
          correo electrónico con los detalles de tu compra y el número de
          seguimiento.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/products")}
            sx={{
              px: 4,
              py: 1.5,
              bgcolor: "primary.main",
              color: "#FFFFFF",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            Seguir Comprando
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/")}
            sx={{
              px: 4,
              py: 1.5,
              borderColor: "secondary.main",
              color: "secondary.main",
              "&:hover": {
                borderColor: "secondary.dark",
                bgcolor: "transparent",
              },
            }}
          >
            Volver al Inicio
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CheckoutSuccess;
