import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextComp = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [ocultarCartWidget, setOcultarCartWidget] = useState(false);

  return (
    <CartContext.Provider value={[cart, setCart,orderId,setOrderId,ocultarCartWidget,setOcultarCartWidget]}>
      {children}
    </CartContext.Provider>
  );
};
