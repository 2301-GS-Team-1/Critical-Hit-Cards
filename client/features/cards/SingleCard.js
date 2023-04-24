import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleCard, selectSingleCard } from "./slices/singleCardSlice";

const SingleCard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const card = useSelector(selectSingleCard);
  const {
    name,
    supertype,
    subtypes,
    types,
    hp,
    evolvesFrom,
    evolvesTo,
    attacks,
    weaknesses,
    retreatCost,
    number,
    artist,
    rarity,
    nationalPokedexNumbers,
    legalities,
    images,
    flavorText,
    price,
    quantity,
  } = card;

  // const attackName = attacks.map((attack) => attack.name);

  useEffect(() => {
    dispatch(fetchSingleCard(id));
  }, [dispatch]);

  return (
    <div id="single-card" key={id}>
      <img src={images?.large} />
      <div id="single-card-info">
        <h1>{name}</h1>
        <div>
          {subtypes && subtypes.length > 0 ? (
            subtypes.map((type, index) => (
              <div key={index}>
                <p>
                  {supertype} - {type}
                </p>
              </div>
            ))
          ) : (
            <p>{supertype}</p>
          )}
        </div>
        <div>
          {types && types.length > 0
            ? types.map((type, index) => (
                <div key={index}>
                  <p>{type}</p>
                </div>
              ))
            : ""}
        </div>
        <p>HP {hp}</p>
        <p>
          Evolves from <em>{evolvesFrom}</em>
        </p>
        <p>
          Evolves to <em>{evolvesTo}</em>
        </p>
        <div>
          ATTACKS{" "}
          {attacks && attacks.length > 0
            ? attacks.map((attack, index) => (
                <div key={index}>
                  <p>
                    {attack.name} - {attack.cost.join(", ")}
                  </p>
                  <p>
                    Energy Cost: {attack.convertedEnergyCost}, Damage:{" "}
                    {attack.damage}
                  </p>
                  <p>{attack.text}</p>
                </div>
              ))
            : "None"}
        </div>
        {/* <p>WEAKNESSES {weaknesses}</p> */}
        {/* <p>RETREAT COST{retreatCost}</p> */}
        {/* <p>NUMBER {number}</p> */}
        {/* <p>ARTIST {artist}</p> */}
        {/* <p>RARITY {rarity}</p> */}
        {/* <p>Pokédex Entry {nationalPokedexNumbers}</p> */}
        {/* <p>Legalities {legalities}</p> */}
        <p>{/* <em>{flavorText}</em> */}</p>
        {/* <p>${price}</p> */}
        {/* <p>In Stock: {quantity}</p> */}
      </div>
    </div>
  );
};

export default SingleCard;
