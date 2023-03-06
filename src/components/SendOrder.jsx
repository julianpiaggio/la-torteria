import {
  Container,
  Heading,
  Input,
  Button,
  Text,
  Center,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { CartContext } from "../contexts/CartContextComp";
import { useState, useContext } from "react";
import Brief from "./Brief";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const SendOrder = ({ totalPrice }) => {
  const [
    cart, setCart,orderId, setOrderId,ocultarCartWidget,setOcultarCartWidget
  ] = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("No pueden existir campos vacios");
    } else {
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    }
    setName("");
    setEmail("");
  };

  const handleClick = () => {
    setOcultarCartWidget(true);
  }

  const db = getFirestore();
  const ordersCollection = collection(db, "orden");

  const order = {
    buyer: {
      name: name,
      email: email
    },
    items: cart.map(product => ({id: product.id, price: product.price, quantity: product.quantity, subtotal: product.quantity * product.price})),
    total: totalPrice(),
  };

  // const handleConfirmClick = () => {
  //   setCart(0);
  // };

  return (
    <div>
      <Center>
        <Heading>Sending orders</Heading>
      </Center>

      <Container>
        <FormControl>
          <form onSubmit={handleSubmit}>
            <FormLabel>NAME</FormLabel>
            <Input size="lg" onChange={(e) => setName(e.target.value)} />
            <FormLabel>EMAIL</FormLabel>
            <Input size="lg" onChange={(e) => setEmail(e.target.value)} />
            <Button colorScheme="blue" type="submit" m={5}>
              Send Infomation
            </Button>
            <Link to={'/brief'}>
            <Button onClick={handleClick}  colorScheme="blue" type="submit" m={5}>
              Confirmar
            </Button>
            </Link>
          </form>
        </FormControl>
      </Container>
      <Center>
        <Text as="b" m={3} fontSize="xl">
          Order ID:{" "}
        </Text>
        <Text as="mark" fontSize="2xl">
          {orderId}
        </Text>
      </Center>
    </div>
  );
};

export default SendOrder;
