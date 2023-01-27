import CartWidget from './CartWidget';
import { Container, Flex, Spacer, Box, Heading,   Menu, MenuButton,MenuList,MenuItem, MenuItemOption, MenuGroup,MenuOptionGroup,MenuDivider, Button, ButtonGroup } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const NavBar = () => {
    return (
    <>
    <Container maxW='100rem' bg='#FADBD8' color='#262626'>
        <Flex alignContent='center' gap='2'>
            <Box p='2' color='brown'>
        <Heading size='md'>E-commerce</Heading>
            </Box>
            <Spacer />
            <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Categorias
            </MenuButton>
            <MenuList>
                <MenuItem>Categoria1</MenuItem>
                <MenuItem><a href=''>Categoria2</a></MenuItem>
                <MenuItem><a href=''>Categoria3</a></MenuItem>
                <MenuItem><a href=''>Categoria4</a></MenuItem>
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