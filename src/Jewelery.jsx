import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Jewelery = () => {
  const [jewelery, setJewelery] = useState([])

   useEffect(() => {
     const fetchproducts = async () => {
       try {
         const response = await axios.get(
           "https://fakestoreapi.com/products/category/jewelery"
         );
         console.log(response.data);
         setJewelery(response.data);
       } catch (error) {
         console.log(error);
       }
     };
     fetchproducts();
   }, []);
  return (
    <div>
      <h1 className="top">Products ({jewelery.length})</h1>
      <div className="cards">
        {jewelery.map((item) => (
          <ProductCard
            title={item.title}
            id={item.id}
            price={item.price}
            image={item.image}
            description={item.description}
            count={item.rating.count}
          />
        ))}
      </div>
    </div>
  );
}

export default Jewelery