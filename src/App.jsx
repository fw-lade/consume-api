import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./Cards";
import Blogs from "./Blogs";
import Post from "./Post";
import Users from "./Users";
import Products from "./Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
