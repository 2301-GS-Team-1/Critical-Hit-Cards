import React, { useState } from "react";
import addCardAsync from "./slices/singleCardSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CreateProduct = () => {
 const [name, setName] = useState("");
 const [price, setPrice] = useState("");
 const [quantity, setQuantity] = useState("");
 const [imageUrl, setImageUrl] = useState("");
 const dispatch = useDispatch();
 const handleSubmit = async (evt) => {
 await evt.preventDefault();
 dispatch(addCardAsync({ name, price, quantity, imageUrl }));
 setName("");
 setPrice("");
 setQuantity("");
 setImageUrl("");
 };
 return (
 <form id="product-form" onSubmit={handleSubmit}>
 <label htmlFor="name">Name:</label>
 <input
 name="name"
 value={name}
 onChange={(e) => setName(e.target.value)}
 />
 <label htmlFor="price">Price:</label>
 <input
 name="price"
 value={price}
 onChange={(e) => setPrice(e.target.value)}
 />
 <label htmlFor="quantity">Quantity:</label>
 <input
 name="quantity"
 value={quantity}
 onChange={(e) => setQuantity(e.target.value)}
 />
 <label htmlFor="imageUrl">Image:</label>
 <input
 name="imageUrl"
 value={imageUrl}
 onChange={(e) => setImageUrl(e.target.value)}
 />
 <button type="submit">Submit</button>
 <Link to="/">Cancel</Link>
 </form>
 );
};
export default CreateProduct;
