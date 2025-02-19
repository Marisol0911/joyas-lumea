import React, { useState } from "react";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Divider,
  CircularProgress,
} from "@mui/material";
import {
  MERCADO_PAGO_PUBLIC_KEY,
  mercadoPagoConfig,
} from "../config/mercadopago";

// Inicializa Mercado Pago con la clave pública
initMercadoPago(MERCADO_PAGO_PUBLIC_KEY);

interface CheckoutFormProps {
  amount: number;
  description: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ amount, description }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initialization = {
    amount,
    description,
    ...mercadoPagoConfig,
  };

  const onSubmit = async (formData: any) => {
    setLoading(true);
    setError(null);
    try {
      // Aquí se procesará el pago con el backend
      console.log("Datos del formulario:", formData);
      // TODO: Implementar la llamada al backend para procesar el pago
    } catch (err) {
      setError(
        "Hubo un error al procesar el pago. Por favor, intenta nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const onError = (error: any) => {
    setError(error.message);
  };

  const onReady = () => {
    setLoading(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Finalizar Compra
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Detalles del Pago
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Total a pagar: ${amount.toLocaleString("es-CO")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </Box>

            {loading && (
              <Box display="flex" justifyContent="center" my={3}>
                <CircularProgress />
              </Box>
            )}

            {error && (
              <Typography color="error" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}

            <CardPayment
              initialization={initialization}
              onSubmit={onSubmit}
              onReady={onReady}
              onError={onError}
            />
          </Grid>

          <Grid item xs={12} md={5}>
            <Box sx={{ bgcolor: "grey.50", p: 2, borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom>
                Métodos de Pago Aceptados
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    • Visa
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • Mastercard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • American Express
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • PSE
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • Diners Club
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Box
              sx={{
                mt: 3,
                p: 2,
                bgcolor: "primary.light",
                color: "white",
                borderRadius: 1,
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                Pago Seguro
              </Typography>
              <Typography variant="body2">
                Todas las transacciones son procesadas de forma segura por
                Mercado Pago
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CheckoutForm;
