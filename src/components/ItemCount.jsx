import {useState} from 'react';
import { Button,Stack, Text } from '@chakra-ui/react';

const ItemCount = () => {
    const [count,setCount] = useState (0);

  return (
    <>
    <Stack spacing={4} direction='row' align='center'>
    {/* <Text fontsize='xl' pr='10px'>Contador</Text> */}
    <Button onClick={()=> setCount(count + 1)}>+</Button>
    <p>{count}</p>

    <Button disabled={count<=0} onClick={() => setCount(count - 1)}>-</Button>
    <Button  onClick={() => setCount(0)}>Reset</Button>
    </Stack>
    </>
  )
}

export default ItemCount