import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Cards = () => {
  const [cardData, setCardData] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      console.log(response.data);
      setCardData(response.data);
      setTotal(response.data.length);
    };
    fetchData();
  }, []) 

  return (
    <div>
      <Navbar />
      <div className="head">
        <h1>Consuming API</h1>
        <p>Number of Cards({total})</p>
      </div>
      <div className="cards">
        {cardData.map((card) => (
          <div key={card.id} className="card">
            <img src={card.url} alt="" />
            <div className="text" key={card.id}>
              <p>{card.id}</p>
              <h1>{card.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
