import { Center, Heading, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import Data from "../data.json";
import ItemList from './ItemList'

const ItemListContainer = () => {
  const { category } = useParams();
  console.log(category);


  const getDatos = () => {
    return new Promise((resolve,reject) => {
      if(Data.length === 0) {
        reject(new Error('no hay datos'))
      }
      setTimeout(() => {
        resolve(Data);
      }, 2000)
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  if (category === undefined) {
    return (
      <div>
        <Center bg="#D6EAF8" h="100px" color="black">
          <Heading as="h2" size="2xl">
            Catalogo
          </Heading>
        </Center>
        <ItemList productos={Data} />
      </div>
    );
  } else {
    const catfilter = Data.filter((producto) => producto.category === category);
    return (
      <div>
        <Center bg="#D6EAF8" h="100px" color="black">
          <Heading as="h2" size="2xl">
            productos por categoria
          </Heading>
        </Center>
        {catfilter ? <ItemList productos={catfilter} /> : <ItemList productos={Data} />}
      </div>
    );
  }
}

export default ItemListContainer