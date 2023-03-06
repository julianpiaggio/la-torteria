import Item from "./Item";
import { useState,useEffect } from 'react';
import Loading from './Loading';

const ItemList = ({ productos }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(()=> {
          setLoading(false);
      }, 3000)
  }, []);

  if(loading) {
      return <Loading />;
  }
  return (
    <>
      <div className="catalogo">
        {productos?.map((producto) => (
          <Item
            key={producto.id}
            id={producto.id}
            name={producto.name}
            description={producto.description}
            price={producto.price}
            stock={producto.stock}
            category={producto.category}
            image={producto.image}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
