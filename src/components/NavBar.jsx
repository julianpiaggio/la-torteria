import CartWidget from './CartWidget';
import { Container, Flex, Spacer, Box, Heading,   Menu, MenuButton,MenuList,MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <>
    <Container maxW='100rem' bg='#FADBD8' color='#262626'>
        <Flex alignContent='center' gap='2'>
            <Box p='2' color='brown'>
                <Link to={'/'}>
                    <Heading size='md'>La Torteria</Heading>
                </Link>
            </Box>
            <Spacer />
            <Menu>
                <Link to={'/catalogo'}>
                    <Button as={Button}>
                        Catalogo
                    </Button>
                </Link>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Categorias
                </MenuButton>
                <MenuList>
                    <Link to={`/category/${"Torta"}`}>
                        <MenuItem>Torta</MenuItem>
                    </Link>
                    <Link to={`/category/${"Postre"}`}>
                        <MenuItem>Postre</MenuItem>
                    </Link>
                    <Link to={`/category/${"Golosina"}`}>
                        <MenuItem>Golosina</MenuItem>
                    </Link>
                    <Link to={`/category/${"Paletas"}`}>
                        <MenuItem>Paletas</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
            <Spacer />
            <Box p='2' color='white'>
        <CartWidget />
            </Box>
        </Flex>
    </Container>
    </>
);
}

export default NavBar