import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import axios from 'axios';

const Women = () => {
    const [women, SetWomen] = useState([]);

    useEffect(() => {
      const fetchproducts = async () => {
        try {
          const response = await axios.get(
            "https://fakestoreapi.com/products/category/women's clothing"
          );
          console.log(response.data);
          SetWomen(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchproducts();
    }, []);

  return (
    <div>
      <h1 className="top">Products ({women.length})</h1>
      <div className="cards">
        {women.map((item) => (
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

export default Women