import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../styles/Cart.styles";

const Cart: React.FC = () => {
  const classes = useStyles();
  const { items, isOpen, toggleCart, removeItem, updateQuantity, totalItems } =
    useCart();
  const navigate = useNavigate();

  const totalPrice = items.reduce(
    (sum, item) =>
      sum + parseInt(item.price.replace(/[^0-9]/g, "")) * item.quantity,
    0
  );

  const handleCheckout = () => {
    toggleCart();
    navigate("/checkout");
  };

  const formattedTotal = `COP ${totalPrice.toLocaleString("es-CO")}`;

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={toggleCart}
      PaperProps={{
        className: classes.drawer,
      }}
    >
      <Box className={classes.container}>
        <Box className={classes.header}>
          <Typography variant="h6" className={classes.title}>
            Carrito de Compras ({totalItems})
          </Typography>
          <IconButton onClick={toggleCart} color="primary">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider className={classes.divider} />

        {items.length === 0 ? (
          <Box className={classes.emptyCart}>
            <Typography variant="body1">Tu carrito está vacío</Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={toggleCart}
              className={classes.continueButton}
            >
              Continuar Comprando
            </Button>
          </Box>
        ) : (
          <>
            <List className={classes.itemsList}>
              {items.map((item) => (
                <ListItem key={item.id} className={classes.listItem}>
                  <ListItemAvatar>
                    <Avatar variant="square" src={item.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={`Cantidad: ${item.quantity}`}
                  />
                  <Box>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography component="span" sx={{ mx: 1 }}>
                      {item.quantity}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <AddIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => removeItem(item.id)}
                      color="error"
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Box>
                </ListItem>
              ))}
            </List>

            <Box className={classes.totalSection}>
              <Box className={classes.totalRow}>
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6" color="primary">
                  {formattedTotal}
                </Typography>
              </Box>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={handleCheckout}
                className={classes.checkoutButton}
              >
                Proceder al Pago
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default Cart;
