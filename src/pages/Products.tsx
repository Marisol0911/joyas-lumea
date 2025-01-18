import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Skeleton,
} from "@mui/material";

// Mock data for products
const products = [
  {
    id: 1,
    name: "Diamond Necklace",
    price: "$999.99",
    image: "/images/diamond-necklace.jpg",
    category: "Necklaces",
  },
  {
    id: 2,
    name: "Gold Ring",
    price: "$599.99",
    image: "/images/gold-ring.jpg",
    category: "Rings",
  },
  {
    id: 3,
    name: "Pearl Earrings",
    price: "$299.99",
    image: "/images/pearl-earrings.jpg",
    category: "Earrings",
  },
  {
    id: 4,
    name: "Silver Bracelet",
    price: "$199.99",
    image: "/images/silver-bracelet.jpg",
    category: "Bracelets",
  },
  {
    id: 5,
    name: "Sapphire Ring",
    price: "$799.99",
    image: "/images/sapphire-ring.jpg",
    category: "Rings",
  },
  {
    id: 6,
    name: "Gold Bracelet",
    price: "$399.99",
    image: "/images/gold-bracelet.jpg",
    category: "Bracelets",
  },
  // Add more products as needed
];

const Products: React.FC = () => {
  const [loading, setLoading] = useState<{ [key: number]: boolean }>({});

  const handleImageLoad = (productId: number) => {
    setLoading((prev) => ({
      ...prev,
      [productId]: true,
    }));
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{ mb: 6, textAlign: "center", fontFamily: "Playfair Display" }}
      >
        Our Collection
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-5px)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              {!loading[product.id] && (
                <Skeleton
                  variant="rectangular"
                  height={260}
                  animation="wave"
                  sx={{ bgcolor: "grey.100" }}
                />
              )}
              <CardMedia
                component="img"
                sx={{
                  height: 260,
                  objectFit: "cover",
                  display: loading[product.id] ? "block" : "none",
                }}
                image={product.image}
                alt={product.name}
                onLoad={() => handleImageLoad(product.id)}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {product.category}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View Details
                </Button>
                <Button size="small" color="secondary">
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
