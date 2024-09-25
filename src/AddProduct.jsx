import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const [productData, setProductData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const response = await axios.post("https://fakestoreapi.com/products", productData);
        console.log('Product Added successfully', response.data)
        alert('Product Added!')
    } catch(error){
        console.log('Error adding product: ', error)
    }
  };

  return (
    <div>
      <button className="addb" onClick={onOpen}>
        Add product
      </button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <form className="form" onSubmit={handleSubmit}>
              <h1>Add Product</h1>
              <div className="input">
                <label htmlFor="">Product Name</label>
                <input
                  type="text"
                  name="title"
                  value={productData.title}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                />
              </div>
              <div className="input">
                <label htmlFor="">Product Description</label>
                <input
                  type="text"
                  name="description"
                  value={productData.description}
                  onChange={handleChange}
                  required
                  placeholder="Description"
                />
              </div>
              <div className="input">
                <label htmlFor="">Product Price</label>
                <input
                  type="text"
                  value={productData.price}
                  onChange={handleChange}
                  name="price"
                  required
                  placeholder="Price"
                />
              </div>
              <div className="input">
                <label htmlFor="">Image URL</label>
                <input
                  type="text"
                  name="image"
                  required
                  value={productData.image}
                  onChange={handleChange}
                  placeholder="Image URL"
                />
              </div>
              <div className="input">
                <label htmlFor="">Select Category</label>
                <select
                  name="category"
                  value={productData.category}
                  onChange={handleChange}
                  required
                >
                  <option disabled selected>
                    Category
                  </option>
                  <option value="electronics">Electronics</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="men's clothing">Men's Clothing</option>
                  <option value="women's clothing">Women's Clothing</option>
                </select>
              </div>
              <button>Add product</button>
            </form>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AddProduct;
