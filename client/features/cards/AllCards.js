import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards, selectCards } from "./slices/allCardsSlice";

const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div>
      {cards.map((card) => {
        return (
          <div id="card-container" key={card.id}>
            <img src={card.imageUrl} />
            <div id="card-info">
              <h3>
                {card.firstName} {card.lastName}
              </h3>
              {/* <p>{card.information}</p> */}
              <p>Price: {card.price}</p>
              {/* <p>In Stock: {card.quantity}</p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
