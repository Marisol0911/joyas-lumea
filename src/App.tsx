import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E12D79", // Magenta for main interactive elements
      light: "#E65691",
      dark: "#B02460",
    },
    secondary: {
      main: "#F4B400", // Gold for luxury accents
      light: "#F6C333",
      dark: "#C29000",
    },
    text: {
      primary: "#000000", // Black for main text
      secondary: "#666666", // Softer black for secondary text
    },
    background: {
      default: "#FFFFFF", // White background
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "'Playfair Display', 'Roboto', 'Arial', sans-serif",
    h1: {
      color: "#000000",
    },
    h2: {
      color: "#000000",
    },
    h3: {
      color: "#000000",
    },
    h4: {
      color: "#000000",
    },
    h5: {
      color: "#000000",
    },
    h6: {
      color: "#000000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Square buttons for elegance
          textTransform: "none", // Preserve original text case
        },
        contained: {
          boxShadow: "none", // Remove default shadow
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Square corners for elegance
          boxShadow: "none", // Remove default shadow
          border: `1px solid #F4B400`, // Gold border
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#000000",
          boxShadow: "none",
          borderBottom: `1px solid #F4B400`,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
