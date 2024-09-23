import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
    //   console.log(response.data);
      setPost(response.data);
    };

    const fetchComments = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
    //   console.log(response.data);
      setComment(response.data);
    };
    fetchComments();
    fetchPost();
  }, [id]);

  return (
    <div>
      <Navbar />

      <div className="post">
        <h2>Blog Post ({id})</h2>
        <h1>Title({post.title})</h1>
        <p>{post.body}</p>
      </div>
      <div className="comments">
        <h1>Comments({comment.length})</h1>
        <div className="comm">
          {comment.map((item) => (
            <div className="item" key={item.id}>
              <p>Name: {item.name}</p>
              <p>Email: {item.email}</p>
              <p>Comment: {item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
