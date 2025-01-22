import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton: React.FC = () => {
  // URL to open WhatsApp chat with a predefined message
  const whatsappUrl =
    "https://wa.me/?text=Hola,%20estoy%20interesado%20en%20sus%20joyas";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed", // Make the button fixed to the viewport
        bottom: "20px", // Position it 20px from the bottom
        right: "20px", // Position it 20px from the right
        backgroundColor: "#25D366", // WhatsApp green color
        color: "#FFFFFF", // White icon color
        borderRadius: "50%", // Make the button round
        width: "60px", // Set width
        height: "60px", // Set height
        display: "flex", // Use flexbox for centering
        alignItems: "center", // Center icon vertically
        justifyContent: "center", // Center icon horizontally
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
        zIndex: 1000, // Ensure it is above other elements
        textDecoration: "none", // Remove underline from link
      }}
    >
      <WhatsAppIcon style={{ fontSize: "30px" }} />
    </a>
  );
};

export default WhatsAppButton;
