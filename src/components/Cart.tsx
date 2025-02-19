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

const Cart: React.FC = () => {
  const {
    cart,
    isOpen,
    toggleCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    total,
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    toggleCart();
    navigate("/checkout");
  };

  const formattedTotal = `COP ${total.toLocaleString("es-CO")}`;

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={toggleCart}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 400 },
          backgroundColor: "background.paper",
        },
      }}
    >
      <Box
        sx={{ p: 2, height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">
            Carrito de Compras ({totalItems})
          </Typography>
          <IconButton onClick={toggleCart} color="primary">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2 }} />

        {cart.length === 0 ? (
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="body1" sx={{ mb: 2 }}>
              Tu carrito está vacío
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={toggleCart}
              sx={{ minWidth: 200 }}
            >
              Continuar Comprando
            </Button>
          </Box>
        ) : (
          <>
            <List sx={{ flex: 1, overflow: "auto" }}>
              {cart.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{
                    mb: 2,
                    bgcolor: "background.default",
                    borderRadius: 1,
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      src={item.image}
                      sx={{ width: 60, height: 60 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={`COP ${item.price.toLocaleString("es-CO")}`}
                    sx={{ mx: 2 }}
                  />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography component="span">{item.quantity}</Typography>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <AddIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => removeFromCart(item.id)}
                      color="error"
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Box>
                </ListItem>
              ))}
            </List>

            <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: "divider" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
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
                sx={{
                  py: 1.5,
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
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
