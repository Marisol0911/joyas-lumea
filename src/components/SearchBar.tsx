import React, { useState } from "react";
import {
  Box,
  InputBase,
  IconButton,
  Paper,
  Popper,
  Fade,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const recentSearches = [
  "Anillos de compromiso",
  "Collares de diamantes",
  "Aretes de perla",
  "Pulseras de oro",
];

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    setAnchorEl(null);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsInputFocused(true);
    setAnchorEl(event.currentTarget);
  };

  const handleBlur = () => {
    // Pequeño delay para permitir que se detecte el clic en las sugerencias
    setTimeout(() => {
      setIsInputFocused(false);
    }, 200);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    onSearch(suggestion);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl) && isInputFocused;

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: "44px",
          px: 2,
          backgroundColor: "transparent",
          border: "1px solid",
          borderColor: open ? "secondary.main" : "rgba(232, 180, 188, 0.3)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            borderColor: "secondary.light",
            backgroundColor: "rgba(232, 180, 188, 0.03)",
          },
        }}
      >
        <InputBase
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Buscar joyas..."
          sx={{
            ml: 1,
            flex: 1,
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
            color: "text.primary",
            "& input::placeholder": {
              color: "text.secondary",
              opacity: 0.7,
              fontStyle: "italic",
            },
          }}
        />
        <IconButton
          type="submit"
          sx={{
            color: open ? "secondary.main" : "text.secondary",
            p: "6px",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              color: "secondary.main",
              backgroundColor: "transparent",
            },
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        transition
        style={{ width: anchorEl?.clientWidth, zIndex: 1300 }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              elevation={0}
              sx={{
                mt: 1,
                border: "1px solid",
                borderColor: "rgba(232, 180, 188, 0.2)",
                backgroundColor: "background.paper",
                backdropFilter: "blur(8px)",
              }}
            >
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "text.secondary",
                    letterSpacing: "0.1em",
                    fontSize: "0.75rem",
                  }}
                >
                  Búsquedas recientes
                </Typography>
                <List sx={{ pt: 1 }}>
                  {recentSearches.map((search, index) => (
                    <React.Fragment key={search}>
                      <ListItem
                        button
                        onClick={() => handleSuggestionClick(search)}
                        sx={{
                          py: 1,
                          "&:hover": {
                            backgroundColor: "rgba(232, 180, 188, 0.05)",
                          },
                        }}
                      >
                        <ListItemText
                          primary={search}
                          sx={{
                            "& .MuiListItemText-primary": {
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "1rem",
                              letterSpacing: "0.05em",
                              color: "text.primary",
                            },
                          }}
                        />
                      </ListItem>
                      {index < recentSearches.length - 1 && (
                        <Divider
                          sx={{ borderColor: "rgba(232, 180, 188, 0.1)" }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </List>
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default SearchBar;
