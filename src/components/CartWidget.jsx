import { Container, Flex, Spacer, Box, Heading } from '@chakra-ui/react'
import image from '../assets/carrito.png'

const CartWidget = () => {
  return (
    <>
    <Container>
      <Flex>
      <div>
        <img src={image} width='30px'/>
      </div>
      <span>0</span>
      </Flex>
    </Container>
    </>

  )
}

export default CartWidget