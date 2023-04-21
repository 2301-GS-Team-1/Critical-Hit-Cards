import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCards, selectCards } from "./slices/allCardsSlice";

const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div id="all-cards">
      {cards.map((card) => {
        return (
          <Link key={card.id} id="card-container" to={`/products/${card.id}`}>
            <div>
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
  );
};

export default Cards;
