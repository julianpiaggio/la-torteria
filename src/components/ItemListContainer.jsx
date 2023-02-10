import { Text } from '@chakra-ui/react'
import Data from '../data.json'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
const { category } = useParams();
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