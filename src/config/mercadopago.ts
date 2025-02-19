// Configuración de Mercado Pago
export const MERCADO_PAGO_PUBLIC_KEY =
  process.env.REACT_APP_MERCADO_PAGO_PUBLIC_KEY || "TU_CLAVE_PUBLICA_AQUI";

// Configuración de la integración
export const mercadoPagoConfig = {
  locale: "es-CO",
  advancedFraudPrevention: true,
  customization: {
    paymentMethods: {
      creditCard: ["visa", "mastercard", "amex", "diners"],
      bankTransfer: ["pse"],
    },
    visual: {
      style: {
        theme: "default",
        customVariables: {
          baseColor: "#B8860B",
          baseTextColor: "#1C1C1C",
        },
      },
    },
  },
};
