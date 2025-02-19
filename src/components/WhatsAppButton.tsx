import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton: React.FC = () => {
  // URL to open WhatsApp chat with a predefined message
  const whatsappUrl =
    "https://wa.me/573108492912?text=💎✨ Brilla con elegancia ✨💎%0A%0ADescubre nuestras joyas únicas, perfectas para realzar tu belleza o sorprender a alguien especial 💖🎁.%0A%0A📲 ¡Escríbenos y encuentra la tuya! 💍✨";

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
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(37, 211, 102, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
      }}
    >
      <WhatsAppIcon style={{ fontSize: "30px" }} />
    </a>
  );
};

export default WhatsAppButton;
