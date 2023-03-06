import { useContext, useState } from "react";
import {
  Button,
  Stack
} from "@chakra-ui/react";
import { CartContext } from "../contexts/CartContextComp";

const ItemCount = ({ stock, id, price, name, image }) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1)
  };
  const decrement = () => {
    setCount(count - 1)
  };


  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: count, price, name, image }];
      }
    });
  };

  return (
    <>
    <Stack spacing={4} direction='row' align='center'>
    <Button isDisabled={count>=stock} onClick={()=> increment()}>+</Button>
    <p>{count}</p>
    <br />
    <br />
    <Button className='resta' isDisabled={count<=0} onClick={()=> decrement()}>-</Button>
    <Button onClick={() => addToCart()} ml="20px" variant="solid" colorScheme="blue">
      Add to Cart {count}
    </Button>
    </Stack>
    </>
  );
};

export default ItemCount;
