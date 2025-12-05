import React, { useCallback, createContext, useContext, useReducer } from 'react';
import { Product } from '../data/products';
export type CartItem = {
  product: Product;
  quantity: number;
  size?: string;
};
type CartState = {
  items: CartItem[];
};
type CartAction = {
  type: 'ADD_TO_CART';
  payload: {
    product: Product;
    quantity: number;
    size?: string;
  };
} | {
  type: 'REMOVE_FROM_CART';
  payload: {
    productId: string;
  };
} | {
  type: 'UPDATE_QUANTITY';
  payload: {
    productId: string;
    quantity: number;
  };
} | {
  type: 'CLEAR_CART';
};
type CartContextType = {
  items: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (product: Product, quantity: number, size?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};
const CartContext = createContext<CartContextType | undefined>(undefined);
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_CART':
      {
        const {
          product,
          quantity,
          size
        } = action.payload;
        const existingIndex = state.items.findIndex(item => item.product.id === product.id && item.size === size);
        if (existingIndex >= 0) {
          const newItems = [...state.items];
          newItems[existingIndex] = {
            ...newItems[existingIndex],
            quantity: newItems[existingIndex].quantity + quantity
          };
          return {
            items: newItems
          };
        }
        return {
          items: [...state.items, {
            product,
            quantity,
            size
          }]
        };
      }
    case 'REMOVE_FROM_CART':
      {
        return {
          items: state.items.filter(item => item.product.id !== action.payload.productId)
        };
      }
    case 'UPDATE_QUANTITY':
      {
        const {
          productId,
          quantity
        } = action.payload;
        if (quantity <= 0) {
          return {
            items: state.items.filter(item => item.product.id !== productId)
          };
        }
        return {
          items: state.items.map(item => item.product.id === productId ? {
            ...item,
            quantity
          } : item)
        };
      }
    case 'CLEAR_CART':
      {
        return {
          items: []
        };
      }
    default:
      return state;
  }
}
export function CartProvider({
  children
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: []
  });
  const addToCart = useCallback((product: Product, quantity: number, size?: string) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product,
        quantity,
        size
      }
    });
  }, []);
  const removeFromCart = useCallback((productId: string) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        productId
      }
    });
  }, []);
  const updateQuantity = useCallback((productId: string, quantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        productId,
        quantity
      }
    });
  }, []);
  const clearCart = useCallback(() => {
    dispatch({
      type: 'CLEAR_CART'
    });
  }, []);
  const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  return <CartContext.Provider value={{
    items: state.items,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }}>
      {children}
    </CartContext.Provider>;
}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}