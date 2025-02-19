import React, { createContext, useContext, useState, useEffect } from "react";

interface CartItem {
  id: string | number;
  name: string;
  price: string | number;
  image: string;
  quantity: number;
  category?: string;
}

interface CartContextType {
  cart: CartItem[];
  total: number;
  totalItems: number;
  isOpen: boolean;
  toggleCart: () => void;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (itemId: string | number) => void;
  clearCart: () => void;
  updateQuantity: (itemId: string | number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    // Calcular el total cada vez que el carrito cambie
    const newTotal = cart.reduce((sum, item) => {
      const price =
        typeof item.price === "string"
          ? parseInt(item.price.replace(/[^0-9]/g, ""))
          : item.price;
      return sum + price * item.quantity;
    }, 0);
    setTotal(newTotal);

    // Calcular el total de items
    const newTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(newTotalItems);
  }, [cart]);

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setIsOpen(true); // Abrir el carrito cuando se agrega un item
  };

  const removeFromCart = (itemId: string | number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string | number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setIsOpen(false);
  };

  const value = {
    cart,
    total,
    totalItems,
    isOpen,
    toggleCart,
    addToCart,
    removeFromCart,
    clearCart,
    updateQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartContext;
