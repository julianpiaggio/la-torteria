import { useContext } from "react";
import { CartContext } from "../contexts/CartContextComp";
import { Link } from "react-router-dom";
import { Text, Flex, Button } from "@chakra-ui/react";

const Brief = () => {
    const orderId  = useContext(CartContext);
    console.log(orderId)
    return (
    <>
    <Flex justify="center" direction="column" alignItems="center" m="5">
        <Text fontSize="xx-large" m="3">
        Gracias por relizar su compra
        </Text>
        <Text fontSize="x-large" m="3">
        Su pedido se realizo con éxito
        </Text>
        <Text fontSize="large" m="3">
        Número de órden: { orderId[2]}
        </Text>
        <br />
        <br />
        <Link to={'/'}>
        <Button as={Button} colorScheme="teal" size="md" mx="2">
            Volver al inicio
        </Button>
        </Link>
    </Flex>
    </>
);
};

export default Brief