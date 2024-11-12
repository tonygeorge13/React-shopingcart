import React, { createContext, useState, useContext, useEffect } from "react";
import data from "components/data";
import ShoppingCart from "components/ShoppingCart";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);

  const [cartItem, setCartItem] = useState(() => {
    const savedCart = localStorage.getItem("cartItem");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  const openleCart = () => setisOpen(true);

  const closeCart = () => setisOpen(false);

  const cartquantity = cartItem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemsQuantity = (id) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseQuantity = (id) => {
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  };

  const removeitem = (id) => {
    setCartItem((currItems) => currItems.filter((item) => item.id !== id));
  };

  const decreaseQuantity = (id) => {
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  const getCartTotal = () => {
    return cartItem.reduce((total, cartItem) => {
      const item = data.find((item) => item.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItem,
        setCartItem,
        increaseQuantity,
        getItemsQuantity,
        removeitem,
        decreaseQuantity,
        openleCart,
        closeCart,
        cartquantity,
        getCartTotal,
      }}
    >
      {children}

      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
