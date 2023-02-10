import {useState} from 'react';
import { Button,Stack } from '@chakra-ui/react';

const ItemCount = () => {
    const [count,setCount] = useState (0);

  return (
    <>
    <h1>Contador</h1>
    <Stack spacing={4} direction='row' align='center'>
    <Button onClick={()=> setCount(count + 1)}>+</Button>
    <p>{count}</p>
    <br />
    <br />
    <Button className='resta' disabled={count<=0} onClick={() => setCount(count - 1)}>-</Button>
    <Button onClick={() => setCount(0)}>Reset</Button>
    </Stack>
    </>
  )
}

export default ItemCount