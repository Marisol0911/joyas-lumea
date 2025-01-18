import React from "react";
import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useStyles } from "../styles/CheckoutSuccess.styles";

const CheckoutSuccess: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Container className={classes.container}>
      <Paper elevation={0} className={classes.paper}>
        <CheckCircleOutlineIcon className={classes.icon} />
        <Typography variant="h3" component="h1" className={classes.title}>
          ¡Gracias por tu Compra!
        </Typography>
        <Typography variant="body1" className={classes.message}>
          Tu pedido ha sido confirmado y será procesado pronto. Te enviaremos un
          correo electrónico con los detalles de tu compra y el número de
          seguimiento.
        </Typography>
        <Box className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/products")}
            className={classes.primaryButton}
          >
            Seguir Comprando
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/")}
            className={classes.secondaryButton}
          >
            Volver al Inicio
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CheckoutSuccess;
