import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import axios from 'axios';

const Men = () => {
    const [men, SetMen] = useState([])

    useEffect(() => {
      const fetchproducts = async () => {
        try {
          const response = await axios.get(
            "https://fakestoreapi.com/products/category/men's clothing"
          );
          console.log(response.data);
          SetMen(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchproducts();
    }, []);

  return (
    <div>
      <h1 className="top">Products ({men.length})</h1>
      <div className="cards">
        {men.map((item) => (
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

export default Men