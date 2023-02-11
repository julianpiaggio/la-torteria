import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
  } from "@chakra-ui/react";
  import imagen from '../assets/torta.jpg'
  import { useParams } from "react-router-dom";
  import ItemCount from "./ItemCount";
  
  const ItemDetail = ({ productos }) => {
    const { id } = useParams();
  
    const productoFilter = productos.filter((producto) => producto.id == id);
    return (
      <>
        {productoFilter.map((producto) => (
          <div key={producto.id}>
            <Center p="1rem">
              <Card className="card-main">
                <CardBody>
                  <Image  maxWidth='50%' borderRadius="lg" src={imagen} />
                  <Stack mt="6" spacing="3">
                    <Heading size="lg">{producto.name}</Heading>
                    <Text fontSize="l">
                      Description: {producto.description}
                    </Text>
                    <Text fontSize="l">
                      Category: {producto.category}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {producto.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Price: $ {producto.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                  <ItemCount />
                  <Center pl='10px' className="btn-center">
                    <Button  variant="solid" colorScheme="blue">
                      Buy
                    </Button>
                  </Center>
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;
  