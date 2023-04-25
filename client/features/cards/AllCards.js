import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCards, selectCards } from "./slices/allCardsSlice";
import CreateProduct from "./CreateProduct";

const Cards = () => {
  const dispatch = useDispatch();
  const TOKEN = window.localStorage.getItem("token");

  //adds product id to the guests cart
  const handleAdd = (cardId) => {
    if (!TOKEN) {
      console.log(cardId);
      //creates new array or grabs cartitems array
      const cartItemsString = localStorage.getItem("cartItems");
      let cartItems = [];
      if (cartItemsString) {
        try {
          cartItems = JSON.parse(cartItemsString);
        } catch (error) {
          console.error("Error parsing cart items", error);
        }
      }

      cartItems.push(cardId);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };
  // same process as add, just with remove functionality

  const handleDelete = (cardId) => {
    if (!TOKEN) {
      console.log(cardId);
      //creates new array or grabs cartitems array
      const cartItemsString = localStorage.getItem("cartItems");
      let cartItems = [];
      if (cartItemsString) {
        try {
          cartItems = JSON.parse(cartItemsString);
        } catch (error) {
          console.error("Error parsing cart items", error);
        }
      }

      cartItems.push(cardId);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

  // localStorage.setItem('key', 'value');
  // const data = localStorage.getItem('key');
  // localStorage.removeItem('key');

  const cards = useSelector(selectCards);
  const isAdmin = 0;
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div>
      <CreateProduct />
      {isAdmin ? (
        <div id="all-cards">
          {cards.map((card) => {
            return (
              <Link
                id="card-container"
                key={card.id}
                to={`/products/${card.id}`}
              >
                <div>
                  <img id="all-cards-image" src={card.images.small} />
                  <div id="card-info">
                    <h3>{card.name}</h3>
                    <p>{card.information}</p>
                    <p>${card.price}</p>
                    <p>In Stock: {card.quantity}</p>
                    <button onClick={() => handleDelete(card.id)}>
                      Delete Product
                    </button>
                    <form id="editPrice" onSubmit={() => handleEdit(card.id)}>
                      <label htmlFor="Price">Price:</label>
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
                      <div className="edit-box">
                        <button type="submit">Edit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div id="all-cards">
          {cards.map((card) => {
            return (
              <Link id="card-container" to={`/products/${card.id}`}>
                <div key={card.id}>
                  <img id="all-cards-image" src={card.images.small} />
                  <div id="card-info">
                    <h3>{card.name}</h3>
                    <p>{card.information}</p>
                    <p>${card.price}</p>
                    <p>In Stock: {card.quantity}</p>
                    <button onClick={() => handleAdd(card)}>Add to cart</button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Cards;
