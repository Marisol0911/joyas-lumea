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
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../context/CartContext";

const Cart: React.FC = () => {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, totalItems } =
    useCart();

  const totalPrice = items.reduce(
    (sum, item) =>
      sum + parseInt(item.price.replace(/[^0-9]/g, "")) * item.quantity,
    0
  );

  const formattedTotal = `COP ${totalPrice.toLocaleString("es-CO")}`;

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={toggleCart}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 400 },
          bgcolor: "#FFFFFF",
          borderLeft: "1px solid rgba(244, 180, 0, 0.1)",
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
          <Typography
            variant="h6"
            sx={{ fontFamily: "Playfair Display", letterSpacing: 1 }}
          >
            Carrito de Compras ({totalItems})
          </Typography>
          <IconButton onClick={toggleCart} sx={{ color: "text.primary" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: "rgba(244, 180, 0, 0.1)" }} />

        {items.length === 0 ? (
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 2,
              color: "text.secondary",
            }}
          >
            <Typography variant="body1">Tu carrito está vacío</Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={toggleCart}
              sx={{ borderColor: "primary.main" }}
            >
              Continuar Comprando
            </Button>
          </Box>
        ) : (
          <>
            <List sx={{ flex: 1, overflowY: "auto" }}>
              {items.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{
                    mb: 2,
                    bgcolor: "background.paper",
                    border: "1px solid rgba(244, 180, 0, 0.1)",
                    position: "relative",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      src={item.image}
                      sx={{ width: 60, height: 60, borderRadius: 1 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                        {item.name}
                      </Typography>
                    }
                    secondary={
                      <Stack spacing={1}>
                        <Typography variant="body2" color="primary.main">
                          {item.price}
                        </Typography>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <IconButton
                            size="small"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            sx={{ color: "text.secondary" }}
                          >
                            <RemoveIcon fontSize="small" />
                          </IconButton>
                          <Typography>{item.quantity}</Typography>
                          <IconButton
                            size="small"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            sx={{ color: "text.secondary" }}
                          >
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Stack>
                    }
                  />
                  <IconButton
                    onClick={() => removeItem(item.id)}
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      color: "text.secondary",
                    }}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
            <Box
              sx={{
                mt: 2,
                pt: 2,
                borderTop: "1px solid rgba(244, 180, 0, 0.1)",
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6" color="primary.main">
                  {formattedTotal}
                </Typography>
              </Box>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  py: 1.5,
                  bgcolor: "primary.main",
                  color: "#FFFFFF",
                  "&:hover": {
                    bgcolor: "primary.dark",
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
