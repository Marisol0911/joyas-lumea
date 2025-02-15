import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import { CartProvider } from "./context/CartContext";
import WhatsAppButton from "./components/WhatsAppButton";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B8860B", // Dorado oscuro elegante
      light: "#D4AF37", // Dorado claro
      dark: "#8B6914", // Dorado más oscuro
    },
    secondary: {
      main: "#E8B4BC", // Rosa suave elegante
      light: "#F4D0D6", // Rosa claro
      dark: "#D49AA2", // Rosa oscuro
    },
    text: {
      primary: "#1C1C1C",
      secondary: "#4A4A4A",
    },
    background: {
      default: "#FDFAFA", // Blanco con un toque rosado
      paper: "#FFFFFF",
    },
    divider: "rgba(232, 180, 188, 0.15)", // Rosa sutil para divisores
  },
  typography: {
    fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
    h1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      letterSpacing: "0.1em",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      letterSpacing: "0.08em",
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      letterSpacing: "0.08em",
    },
    h4: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      letterSpacing: "0.05em",
    },
    h5: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      letterSpacing: "0.05em",
    },
    h6: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      letterSpacing: "0.05em",
    },
    body1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "1.1rem",
      letterSpacing: "0.03em",
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "1rem",
      letterSpacing: "0.03em",
    },
    button: {
      fontFamily: "'Cormorant Garamond', serif",
      letterSpacing: "0.1em",
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            "linear-gradient(to right, #FDFAFA, #FFFFFF, #FDFAFA)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: "12px 32px",
          transition: "all 0.3s ease-in-out",
          textTransform: "none",
          letterSpacing: "0.1em",
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 6px 20px rgba(232, 180, 188, 0.25)",
          },
        },
        outlined: {
          borderWidth: "1px",
          "&:hover": {
            borderWidth: "1px",
            backgroundColor: "rgba(232, 180, 188, 0.05)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
          backgroundImage: "none",
          backgroundColor: "#FFFFFF",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 8px 24px rgba(232, 180, 188, 0.15)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(232, 180, 188, 0.2)",
          boxShadow: "none",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100vw",
            height: "100%",
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(232, 180, 188, 0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(232, 180, 188, 0.5)",
              },
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(232, 180, 188, 0.8)",
              borderWidth: "1px",
            },
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/success" element={<CheckoutSuccess />} />
          </Routes>
          <WhatsAppButton />
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
