import {
  Button,
  Container,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Text,
  Image,
  Box
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContextComp";
import Checkout from "./Checkout";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
  }


  if(cart.length === 0) {
    return (
      <>
      <Heading className="headingCenter">'No hay productos seleccionados para la compra'</Heading>
      <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          width='100%'
          marginTop='20px'
      >
      <Link to={'/catalogo'}>
      <Button  as={Button}>
      Realizar compra
      </Button>
      </Link>
      </Box>
      </>
    );
  }
  return (
    <>
      <Center bg="#D6EAF8" h="50px" color="black">
        <Heading as="h2" size="2xl">
          Cart
        </Heading>
      </Center>
      {cart.map((item) => {
        return (
            <Container key={item.id} className="catalogo container">
              <Card maxW="sm">
                <CardHeader>
                  <Heading size="md">{item.name}</Heading>
                </CardHeader>
                <CardBody>
                  <Image w='300px' h='180px' marginBottom='10px' src={item.image}/>
                  <Text fontSize='2xl' as="b">Quantity: {item.quantity}</Text>
                  <Text fontSize='2xl'>Price: $ {item.price}</Text>
                </CardBody>
                <div className="buttonDeleteProduct">
                    <Button
                      colorScheme="red"
                      onClick={() => removeProduct(item.id)}
                      >
                      Delete from cart
                    </Button>
                </div>
              </Card>
              <Heading className="headingCenter" size='lg'>SubTotal: ${item.price * item.quantity}</Heading>
            </Container>

        );
      })}
            <Container className="totalPrice">
            <Heading>Total Compra:{totalPrice()}</Heading>
            </Container>
      <Checkout totalPrice={totalPrice} />
    </>
  );
};

export default Cart;
