import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCards, selectCards } from "./slices/allCardsSlice";
//import { addToCart } from "./SingleCartSlice";
//import {}
import { addCardToCart } from "../cart/CartSlice";
const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);

  //handles dispatch to addcardtocart
  const handleAddToCart = (card) => {
    dispatch(addCardToCart(card));
  };

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div id="all-cards">
      {cards.map((card) => {
        return (
          <div key={card.id}>
            <Link id="card-container" to={`/products/${card.id}`}>
              <img id="all-cards-image" src={card.images.small} />
            </Link>
            <div id="card-info">
              <h3>{card.name}</h3>
              <p>{card.information}</p>
              <p>${card.price}</p>
              <p>In Stock: {card.quantity}</p>
              <button onClick={() => handleAddToCart(card)}>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
