import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCards, selectCards } from "./slices/allCardsSlice";
// import SingleCart from "../cart/SingleCart"

export const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

 const PokemonList = ({ cards }) => {
    return (
      <div>
        {cards.map((card) => (
          <PokemonCard key={card.number} number={card.number} />
        ))}
      </div>
    );
  };

const PokemonCard = ({ number }) => {
    const addCardToCart = () => {
      const cartItem = {
        orderId: number,
        productId: 1, // You can add more information here if needed
      };
      // Add the cartItem to the cart
    };

    return (
      <div>
        <h2>{`#${number}`}</h2>
        {/* Render the rest of the Pokemon card */}
        <button onClick={addCardToCart}>Add to cart</button>
      </div>
    );
  };

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
              <div>
                {/* Render the rest of the Pokemon card */}
                <button onClick={card.addToCart}>🛒</button>
              </div>
              <p>{card.information}</p>
              <p>${card.price}</p>
              <p>In Stock: {card.quantity}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
