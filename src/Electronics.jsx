import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Electronics = () => {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/electronics"
        );
        console.log(response.data);
        setElectronics(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchproducts();
  }, []);

  return (
    <div>
      <h1 className="top">Products ({electronics.length})</h1>
      <div className="cards">
        {electronics.map((item) => (
          <>
            <ProductCard
              title={item.title}
              id={item.id}
              price={item.price}
              image={item.image}
              description={item.description}
              count={item.rating.count}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
