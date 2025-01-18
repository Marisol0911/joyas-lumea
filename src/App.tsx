import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { CartProvider } from "./context/CartContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E12D79",
      light: "#E65691",
      dark: "#B02460",
    },
    secondary: {
      main: "#F4B400",
      light: "#F6C333",
      dark: "#C29000",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
    background: {
      default: "#FAFAFA", // Slightly off-white background
      paper: "#FFFFFF",
    },
    divider: "rgba(244, 180, 0, 0.1)", // Subtle gold for dividers
  },
  typography: {
    fontFamily: "'Playfair Display', 'Roboto', 'Arial', sans-serif",
    h1: {
      color: "#000000",
      letterSpacing: "0.05em",
    },
    h2: {
      color: "#000000",
      letterSpacing: "0.05em",
    },
    h3: {
      color: "#000000",
      letterSpacing: "0.05em",
    },
    h4: {
      color: "#000000",
      letterSpacing: "0.05em",
    },
    h5: {
      color: "#000000",
      letterSpacing: "0.05em",
    },
    h6: {
      color: "#000000",
      letterSpacing: "0.05em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            "linear-gradient(to right, #FAFAFA, #FFFFFF, #FAFAFA)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "none",
          letterSpacing: "0.05em",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
          backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)",
          border: "1px solid rgba(244, 180, 0, 0.1)",
          "&:hover": {
            borderColor: "rgba(244, 180, 0, 0.3)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(8px)",
          color: "#000000",
          boxShadow: "none",
          borderBottom: "1px solid rgba(244, 180, 0, 0.1)",
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
              "radial-gradient(circle at 50% 50%, rgba(244, 180, 0, 0.03) 0%, transparent 70%)",
            pointerEvents: "none",
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
          </Routes>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
