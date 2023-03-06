import CartWidget from './CartWidget';
import { Container, Flex, Spacer, Box, Heading,Menu,MenuButton,MenuList,MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <>
    <Container maxW='100rem' bg='#FADBD8' color='#262626'>
        <Flex alignContent='center' gap='2'>
            <Box p='2' color='brown'>
                <Link to={'/'}>
                    <Heading size='2xl'>La Torteria</Heading>
                </Link>
            </Box>
            <Spacer />
            <Menu>
                <Link to={'/catalogo'}>
                <Button className='buttonNavbar' as={Button}>
                    Catalogo
                </Button>
                </Link>
                <MenuButton className='buttonNavbar' as={Button} rightIcon={<ChevronDownIcon />}>
                    Categorias
                </MenuButton>
                <MenuList>
                    <Link to={`/category/${"torta"}`}>
                    <MenuItem>Torta</MenuItem>
                    </Link>
                    <Link to={`/category/${"postre"}`}>
                    <MenuItem>Postre</MenuItem>
                    </Link>
                    <Link to={`/category/${"golosina"}`}>
                    <MenuItem>Golosina</MenuItem>
                    </Link>
                    <Link to={`/category/${"paletas"}`}>
                    <MenuItem>Paletas</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
            <Spacer />
            <Box p='2' color='white'>
                <Link to={"/cart"}>
                    <CartWidget />
                </Link>
            </Box>
        </Flex>
    </Container>
    </>
);
}

export default NavBar
