import { Container } from '@chakra-ui/react'
import Item from './Item'

const ItemList = ({ productos }) => {
  return (
    <>
      <div className="catalogo">
        {productos.map((producto) => (
          <Item
            key={producto.id}
            id={producto.id}
            name={producto.name}
            description={producto.description}
            price={producto.price}
            category={producto.category}
            stock={producto.stock}
            image={producto.image}
            />
        ))}
      </div>
    </>
  )
}

export default ItemList