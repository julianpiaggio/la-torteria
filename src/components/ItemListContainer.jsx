import { Text } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <>
    <h3>
        <Text fontSize='4xl' as='b'>
        {greeting}
        </Text>
    </h3>
    </>
  )
}

export default ItemListContainer