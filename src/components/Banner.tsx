import React from "react";

const Banner: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFF8DC", // Light yellow background
        color: "#333", // Darker text color
        border: "1px solid #CCC", // Thin border
        padding: "10px 20px", // Padding for spacing
        margin: "20px 0", // Margin to separate from other elements
        textAlign: "center", // Center the text
        fontWeight: "bold", // Bold text
        borderRadius: "5px", // Slightly rounded corners
        maxWidth: "800px", // Max width for responsiveness
        marginLeft: "auto", // Center horizontally
        marginRight: "auto", // Center horizontally
      }}
    >
      ¡Oferta! 20% de descuento en accesorios seleccionados y envío gratis por
      compras superiores a $100.000
    </div>
  );
};

export default Banner;
