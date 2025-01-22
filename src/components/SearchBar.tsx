import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Autocomplete,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

// Define categories and subcategories with IDs for better handling
const categories = [
  {
    id: "anillos",
    name: "Anillos",
    subcategories: [],
  },
  {
    id: "aretes",
    name: "Aretes",
    subcategories: [
      { id: "earcuff", name: "Earcuff" },
      { id: "candongas", name: "Candongas" },
      { id: "topos", name: "Topos" },
      { id: "huggies", name: "Huggies" },
      { id: "maxiaretes", name: "Maxiaretes" },
    ],
  },
  {
    id: "collares",
    name: "Collares",
    subcategories: [
      { id: "cadenas", name: "Cadenas" },
      { id: "chockers", name: "Chockers" },
      { id: "juegos", name: "Juegos" },
      { id: "gargantillas", name: "Gargantillas" },
      { id: "body-chain", name: "Body chain" },
    ],
  },
  {
    id: "pulseras",
    name: "Pulseras",
    subcategories: [
      { id: "brazaletes", name: "Brazaletes" },
      { id: "tejidos", name: "Tejidos" },
    ],
  },
  {
    id: "complementos",
    name: "Complementos",
    subcategories: [
      { id: "porta-gafas", name: "Porta gafas" },
      { id: "tobilleras", name: "Tobilleras" },
      { id: "joyeros", name: "Joyeros" },
      { id: "hair-clips", name: "Hair Clips" },
      { id: "pony-cuff", name: "Pony Cuff" },
    ],
  },
];

// Generate search options for autocomplete
const searchOptions = categories.reduce(
  (
    options: Array<{ id: string; name: string; category: string }>,
    category
  ) => {
    // Add main category
    options.push({
      id: category.id,
      name: category.name,
      category: category.name,
    });

    // Add subcategories
    category.subcategories.forEach((sub) => {
      options.push({ id: sub.id, name: sub.name, category: category.name });
    });

    return options;
  },
  []
);

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState<{
    id: string;
    name: string;
    category: string;
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle category menu
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle search
  const handleSearch = () => {
    if (selectedOption) {
      // Navigate to products page with search params
      navigate(
        `/products?category=${selectedOption.category.toLowerCase()}&subcategory=${
          selectedOption.id
        }`
      );
    } else if (searchTerm) {
      // Navigate with search term
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
    }
    handleMenuClose();
  };

  // Handle selection from autocomplete
  const handleOptionSelect = (
    option: { id: string; name: string; category: string } | null
  ) => {
    setSelectedOption(option);
    if (option) {
      setSearchTerm(option.name);
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent",
        borderRadius: "4px",
        padding: "0 8px",
        width: { xs: "100%", sm: "300px" },
        margin: "0 16px",
      }}
    >
      <Autocomplete
        freeSolo
        options={searchOptions}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.name
        }
        inputValue={searchTerm}
        onChange={(event, newValue) => {
          handleOptionSelect(newValue as any);
        }}
        onInputChange={(event, newValue) => {
          setSearchTerm(newValue);
        }}
        size="small"
        renderOption={(props, option) => (
          <MenuItem {...props}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "0.8rem" }}
            >
              {option.category} {">"}
            </Typography>
            <Typography sx={{ ml: 1 }}>{option.name}</Typography>
          </MenuItem>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Buscar productos..."
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "4px",
                color: "inherit",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.3)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: "rgba(255, 255, 255, 0.7)",
              },
            }}
          />
        )}
      />
      <IconButton
        onClick={handleSearch}
        sx={{
          color: "inherit",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <SearchIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            mt: 1,
            maxHeight: "400px",
          },
        }}
      >
        {categories.map((category) => (
          <MenuItem
            key={category.id}
            onClick={() => {
              handleOptionSelect({
                id: category.id,
                name: category.name,
                category: category.name,
              });
            }}
            sx={{
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {category.name}
            </Typography>
            {category.subcategories.length > 0 && (
              <Box sx={{ pl: 2, width: "100%" }}>
                {category.subcategories.map((sub) => (
                  <MenuItem
                    key={sub.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOptionSelect({
                        id: sub.id,
                        name: sub.name,
                        category: category.name,
                      });
                    }}
                  >
                    {sub.name}
                  </MenuItem>
                ))}
              </Box>
            )}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default SearchBar;
