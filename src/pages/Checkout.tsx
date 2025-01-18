import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const totalPrice = items.reduce(
    (sum, item) =>
      sum + parseInt(item.price.replace(/[^0-9]/g, "")) * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically process the payment and create the order
    setTimeout(() => {
      clearCart();
      navigate("/checkout/success");
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <Container sx={{ py: 8 }}>
        <Alert severity="info" sx={{ mb: 2 }}>
          Tu carrito está vacío. Por favor, agrega algunos productos antes de
          proceder al pago.
        </Alert>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/products")}
        >
          Ver Productos
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          mb: 6,
          textAlign: "center",
          fontFamily: "Playfair Display",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -16,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60px",
            height: "2px",
            background: "linear-gradient(90deg, #E12D79, #F4B400)",
          },
        }}
      >
        Finalizar Compra
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 4 }}>
          Procesando tu pedido...
        </Alert>
      )}

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper elevation={0} sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <Typography
                variant="h6"
                sx={{ mb: 3, fontFamily: "Playfair Display" }}
              >
                Información Personal
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Nombre"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Apellido"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Teléfono"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              <Typography
                variant="h6"
                sx={{ mb: 3, mt: 4, fontFamily: "Playfair Display" }}
              >
                Dirección de Envío
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Dirección"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Ciudad"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Departamento</InputLabel>
                    <Select
                      name="state"
                      value={formData.state}
                      label="Departamento"
                      onChange={(e) => handleChange(e as any)}
                    >
                      <MenuItem value="Bogotá D.C.">Bogotá D.C.</MenuItem>
                      <MenuItem value="Antioquia">Antioquia</MenuItem>
                      <MenuItem value="Valle del Cauca">
                        Valle del Cauca
                      </MenuItem>
                      <MenuItem value="Cundinamarca">Cundinamarca</MenuItem>
                      {/* Add more departments as needed */}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Código Postal"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              <Typography
                variant="h6"
                sx={{ mb: 3, mt: 4, fontFamily: "Playfair Display" }}
              >
                Información de Pago
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Número de Tarjeta"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Nombre en la Tarjeta"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Fecha de Expiración (MM/AA)"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="CVV"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 4, position: "sticky", top: 20 }}>
            <Typography
              variant="h6"
              sx={{ mb: 3, fontFamily: "Playfair Display" }}
            >
              Resumen del Pedido
            </Typography>
            <List sx={{ mb: 3 }}>
              {items.map((item) => (
                <ListItem key={item.id} sx={{ px: 0, py: 2 }}>
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      src={item.image}
                      sx={{ width: 60, height: 60, borderRadius: 1 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <Typography variant="body2" color="text.secondary">
                        Cantidad: {item.quantity}
                      </Typography>
                    }
                  />
                  <Typography variant="body1" color="primary.main">
                    {item.price}
                  </Typography>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ borderColor: "rgba(244, 180, 0, 0.1)", my: 2 }} />
            <Box sx={{ mb: 4 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography>Subtotal:</Typography>
                <Typography>
                  COP {totalPrice.toLocaleString("es-CO")}
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography>Envío:</Typography>
                <Typography>Gratis</Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6" color="primary.main">
                  COP {totalPrice.toLocaleString("es-CO")}
                </Typography>
              </Box>
            </Box>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
              disabled={submitted}
              sx={{
                py: 1.5,
                bgcolor: "primary.main",
                color: "#FFFFFF",
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              Confirmar Pedido
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
