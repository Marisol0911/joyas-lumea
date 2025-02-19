import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Link,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí irá la lógica de autenticación
    console.log("Login attempt:", { email, password });
  };

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 8, md: 12 } }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 6 },
          background: "linear-gradient(145deg, #FFFFFF 0%, #FDF6F7 100%)",
          border: "1px solid rgba(232, 180, 188, 0.2)",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 4,
            textAlign: "center",
            fontWeight: 300,
            letterSpacing: "0.1em",
          }}
        >
          Iniciar Sesión
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ mb: 2 }}
          />

          <Box sx={{ textAlign: "right", mb: 3 }}>
            <Link
              component={RouterLink}
              to="/forgot-password"
              sx={{
                color: "text.secondary",
                textDecoration: "none",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              color: "white",
              mb: 3,
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            Iniciar Sesión
          </Button>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: "text.secondary", px: 2 }}>
              o
            </Typography>
          </Divider>

          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              ¿Eres nuevo?{" "}
              <Link
                component={RouterLink}
                to="/register"
                sx={{
                  color: "primary.main",
                  textDecoration: "none",
                  fontWeight: 500,
                  "&:hover": {
                    color: "primary.dark",
                  },
                }}
              >
                Crea tu cuenta
              </Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
