import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Skeleton,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Grid as Grid2,
  Chip,
  Stack,
} from "@mui/material";
import { useCart } from "../context/CartContext";

// Categories for filtering
const categories = ["ARETES", "COLLARES", "PULSERAS", "ANILLOS"];

// Mock data for products
const products = [
  {
    id: 1,
    name: "Collar de Diamantes",
    price: "COP 4.500.000",
    image: "/images/diamond-necklace.jpg",
    category: "COLLARES",
  },
  {
    id: 2,
    name: "Anillo de Oro",
    price: "COP 2.800.000",
    image: "/images/gold-ring.jpg",
    category: "ANILLOS",
  },
  {
    id: 3,
    name: "Aretes de Perlas",
    price: "COP 1.200.000",
    image: "/images/pearl-earrings.jpg",
    category: "ARETES",
  },
  {
    id: 4,
    name: "Pulsera de Plata",
    price: "COP 850.000",
    image: "/images/silver-bracelet.jpg",
    category: "PULSERAS",
  },
  {
    id: 5,
    name: "Anillo de Zafiro",
    price: "COP 3.200.000",
    image: "/images/sapphire-ring.jpg",
    category: "ANILLOS",
  },
  {
    id: 6,
    name: "Pulsera de Oro",
    price: "COP 1.800.000",
    image: "/images/gold-bracelet.jpg",
    category: "PULSERAS",
  },
  // Add more products as needed
];

const Products: React.FC = () => {
  const [loading, setLoading] = useState<{ [key: number]: boolean }>({});
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { addToCart } = useCart();

  const handleImageLoad = (productId: number) => {
    setLoading((prev) => ({
      ...prev,
      [productId]: true,
    }));
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter(
    (product) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category)
  );

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
            mb: 4,
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

        {/* Offer Banner */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mb: 8,
            mt: 6,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              py: 4,
              px: { xs: 3, md: 6 },
              width: "100%",
              maxWidth: "800px",
              mx: 2,
              textAlign: "center",
              background: "linear-gradient(135deg, #B8860B 0%, #D4AF37 100%)",
              color: "white",
              borderRadius: 2,
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(184, 134, 11, 0.2)",
              animation: "pulse 2s infinite",
              "@keyframes pulse": {
                "0%": {
                  transform: "scale(1)",
                  boxShadow: "0 4px 20px rgba(184, 134, 11, 0.2)",
                },
                "50%": {
                  transform: "scale(1.02)",
                  boxShadow: "0 4px 30px rgba(184, 134, 11, 0.4)",
                },
                "100%": {
                  transform: "scale(1)",
                  boxShadow: "0 4px 20px rgba(184, 134, 11, 0.2)",
                },
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)",
                animation: "shine 3s infinite",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: "-50%",
                left: "-50%",
                right: "-50%",
                bottom: "-50%",
                background:
                  "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                transform: "rotate(45deg)",
                animation: "shine 3s infinite",
              },
              "@keyframes shine": {
                "0%": {
                  opacity: 0.5,
                },
                "50%": {
                  opacity: 1,
                },
                "100%": {
                  opacity: 0.5,
                },
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: 500,
                letterSpacing: "0.1em",
                mb: 2,
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              }}
            >
              ¡OFERTA ESPECIAL!
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: 700,
                letterSpacing: "0.15em",
                mb: 3,
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              20% DE DESCUENTO
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Cormorant Garamond",
                letterSpacing: "0.1em",
                opacity: 0.9,
                fontWeight: 400,
                fontSize: { xs: "1rem", sm: "1.25rem" },
              }}
            >
              En toda nuestra colección de joyas
            </Typography>
            <Button
              variant="outlined"
              sx={{
                mt: 3,
                color: "white",
                borderColor: "white",
                borderWidth: 2,
                px: 4,
                py: 1,
                "&:hover": {
                  borderWidth: 2,
                  borderColor: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Ver Ofertas
            </Button>
          </Paper>
        </Box>

        {/* Filter Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              textAlign: "center",
              fontFamily: "Playfair Display",
            }}
          >
            Filtrar por Categoría
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
            sx={{ gap: 2 }}
          >
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => handleCategoryToggle(category)}
                color={
                  selectedCategories.includes(category) ? "primary" : "default"
                }
                sx={{
                  borderRadius: "16px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Products Grid */}
        <Grid2 container spacing={4}>
          {filteredProducts.map((product) => (
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
