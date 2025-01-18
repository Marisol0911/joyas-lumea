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
import { useStyles } from "../styles/Checkout.styles";

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
  const classes = useStyles();
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
    setTimeout(() => {
      clearCart();
      navigate("/checkout/success");
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <Container className={classes.container}>
        <Alert severity="info" className={classes.alert}>
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
    <Container className={classes.container}>
      <Typography variant="h2" component="h1" className={classes.title}>
        Finalizar Compra
      </Typography>

      {submitted && (
        <Alert severity="success" className={classes.alert}>
          Procesando tu pedido...
        </Alert>
      )}

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper elevation={0} className={classes.paper}>
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" className={classes.sectionTitle}>
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
                className={`${classes.sectionTitle} ${classes.formSection}`}
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
                className={`${classes.sectionTitle} ${classes.formSection}`}
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
          <Paper elevation={0} className={classes.orderSummary}>
            <Typography variant="h6" className={classes.sectionTitle}>
              Resumen del Pedido
            </Typography>
            <List>
              {items.map((item) => (
                <ListItem key={item.id} className={classes.listItem}>
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      src={item.image}
                      className={classes.productImage}
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
                  <Typography variant="body1" color="primary">
                    {item.price}
                  </Typography>
                </ListItem>
              ))}
            </List>
            <Divider className={classes.divider} />
            <Box className={classes.totalSection}>
              <Box className={classes.totalRow}>
                <Typography>Subtotal:</Typography>
                <Typography>
                  COP {totalPrice.toLocaleString("es-CO")}
                </Typography>
              </Box>
              <Box className={classes.totalRow}>
                <Typography>Envío:</Typography>
                <Typography>Gratis</Typography>
              </Box>
              <Box className={classes.totalRow}>
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6" color="primary">
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
              className={classes.submitButton}
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
