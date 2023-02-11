import imagen from '../assets/torta.jpg'
import {
    Center,
    Card,
    CardBody,
    Image,
    Heading,
    Text,
    Divider,
    Stack,
    CardFooter,
    Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, name, stock, category, image }) => {
    return (
    <div>
    <div key={id}>
        <Center p="1rem">
        <Card className="card">
            <CardBody>
            <Image w='300px' h='180px' borderRadius="lg" src={image} />
            <Stack mt="6" spacing="3">
                <Heading size="md">{name}</Heading>

                <Text color="blue.800" fontSize="l">
                category: {category}
                </Text>
                <Text color="red.600" fontSize="xl">
                stock: {stock}
                </Text>
            </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
            <Center className="btn-center">
                <Button variant="solid" colorScheme="blue">
                <Link to={`/item/${id}`}>Details</Link>
                </Button>
            </Center>
            </CardFooter>
        </Card>
        </Center>
    </div>
    </div>
    );
};

export default Item