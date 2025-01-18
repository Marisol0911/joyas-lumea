import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Skeleton,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid as Grid2,
} from "@mui/material";
import { useCart } from "../context/CartContext";

// Mock data for products
const products = [
  {
    id: 1,
    name: "Collar de Diamantes",
    price: "COP 4.500.000",
    image: "/images/diamond-necklace.jpg",
    category: "Collares",
  },
  {
    id: 2,
    name: "Anillo de Oro",
    price: "COP 2.800.000",
    image: "/images/gold-ring.jpg",
    category: "Anillos",
  },
  {
    id: 3,
    name: "Aretes de Perlas",
    price: "COP 1.200.000",
    image: "/images/pearl-earrings.jpg",
    category: "Aretes",
  },
  {
    id: 4,
    name: "Pulsera de Plata",
    price: "COP 850.000",
    image: "/images/silver-bracelet.jpg",
    category: "Pulseras",
  },
  {
    id: 5,
    name: "Anillo de Zafiro",
    price: "COP 3.200.000",
    image: "/images/sapphire-ring.jpg",
    category: "Anillos",
  },
  {
    id: 6,
    name: "Pulsera de Oro",
    price: "COP 1.800.000",
    image: "/images/gold-bracelet.jpg",
    category: "Pulseras",
  },
  // Add more products as needed
];

const Products: React.FC = () => {
  const [loading, setLoading] = useState<{ [key: number]: boolean }>({});
  const { addItem } = useCart();

  const handleImageLoad = (productId: number) => {
    setLoading((prev) => ({
      ...prev,
      [productId]: true,
    }));
  };

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 50%, #FAFAFA 100%)",
      }}
    >
      <Container sx={{ py: 12 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 8,
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
          Nuestra Colección
        </Typography>
        <Grid2 container spacing={4}>
          {products.map((product) => (
            <Grid2 key={product.id} xs={12} sm={6} md={4}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    "& .product-overlay": {
                      opacity: 1,
                    },
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(244, 180, 0, 0.2), transparent)",
                  },
                }}
              >
                {!loading[product.id] && (
                  <Skeleton
                    variant="rectangular"
                    height={300}
                    animation="wave"
                    sx={{ bgcolor: "rgba(244, 180, 0, 0.05)" }}
                  />
                )}
                <CardMedia
                  component="img"
                  sx={{
                    height: 300,
                    objectFit: "cover",
                    display: loading[product.id] ? "block" : "none",
                  }}
                  image={product.image}
                  alt={product.name}
                  onLoad={() => handleImageLoad(product.id)}
                />
                <Box
                  className="product-overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: "rgba(0, 0, 0, 0.3)",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#FFFFFF",
                      borderColor: "#FFFFFF",
                      "&:hover": {
                        borderColor: "#FFFFFF",
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    Ver Detalles
                  </Button>
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{
                      fontFamily: "Playfair Display",
                      textAlign: "center",
                      mb: 1,
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ textAlign: "center", mb: 2 }}
                  >
                    {product.category}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      color: "primary.main",
                      fontWeight: 500,
                    }}
                  >
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", pb: 3 }}>
                  <Button
                    size="small"
                    onClick={() => handleAddToCart(product)}
                    sx={{
                      color: "secondary.main",
                      borderBottom: "1px solid transparent",
                      "&:hover": {
                        borderBottom: "1px solid",
                        borderColor: "secondary.main",
                        bgcolor: "transparent",
                      },
                    }}
                  >
                    Agregar al Carrito
                  </Button>
                </CardActions>
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default Products;
