import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Blogs = () => {

    const [postCard, setPostCard] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(
              "https://jsonplaceholder.typicode.com/posts"
            );
            // console.log(response.data)
            setPostCard(response.data)
            setTotal(response.data.length)
        }

        fetchPosts()
    }, [])


  return (
    <div>
      <Navbar />
      <div className="head">
        <h1>Blog Posts</h1>
        <p>Total Number of posts ({total})</p>
      </div>

      <div className="blogs">
        {postCard.map((card) => (
          <div key={card.id}>
            <p>{card.id}</p>
            <h1>{card.title}</h1>
            <h2>{card.body}</h2>
            <Link to={`/blog/${card.id}`}>Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs