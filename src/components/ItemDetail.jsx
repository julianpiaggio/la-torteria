import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const productoID = doc(db, "productos", `${id}`);

    getDoc(productoID).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);

  const productoFilter = productos.filter((producto) => producto.id == id);

  return (
    <>
      {productoFilter.map((producto) => (
        <div key={producto.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image w='300px' h='180px' src={producto.image} />
                <Stack w='350px' mt="6" spacing="3">
                  <Heading size="md">{producto.name}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Description: {producto.description}
                  </Text>
                  <Text color="blue.800" fontSize="l">
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
                <ItemCount
                  stock={producto.stock}
                  id={producto.id}
                  price={producto.price}
                  name={producto.name}
                  image={producto.image}
                />
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
