import { createContext, useState, useContext, ReactNode } from 'react';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const incrementQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
