import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCards, selectCards } from "./slices/allCardsSlice";

const Cards = () => {
  const dispatch = useDispatch();

  const cards = useSelector(selectCards);
  const isAdmin = 1;
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div id="all-cards">
      {isAdmin ? (
        <div id="card-container">
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
