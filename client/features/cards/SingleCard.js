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
    abilities,
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
                  <p>{type} Type</p>
                </div>
              ))
            : ""}
        </div>
        <div>{hp ? <p>HP {hp}</p> : ""}</div>
        <div>
          {evolvesFrom ? (
            <p>
              Evolves from <em>{evolvesFrom}</em>
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          {evolvesTo ? (
            <p>
              Evolves to <em>{evolvesTo}</em>
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          {abilities && abilities.length > 0 ? <p>ABILITIES</p> : ""}
          {abilities && abilities.length > 0
            ? abilities.map((ability, index) => (
                <div key={index}>
                  <p>{ability.name}</p>

                  <p>{ability.text}</p>
                </div>
              ))
            : ""}
        </div>
        <div>
          {attacks && attacks.length > 0 ? <p>ATTACKS</p> : ""}
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
            : ""}
        </div>
        <div>
          {weaknesses && weaknesses.length > 0 ? <p>WEAKNESSES</p> : ""}
          {weaknesses && weaknesses.length > 0
            ? weaknesses.map((weakness, index) => (
                <div key={index}>
                  <p>
                    {weakness.type}: {weakness.value}
                  </p>
                </div>
              ))
            : ""}
        </div>
        <div>
          {retreatCost && retreatCost.length > 0 ? <p>RETREAT COST</p> : ""}
          {retreatCost && retreatCost.length > 0 ? retreatCost.join(", ") : ""}
        </div>
        {/* <p>NUMBER {number}</p> */}
        <div>
          ARTIST<br></br>
          {artist}
        </div>
        <div>
          RARITY<br></br>
          {rarity}
        </div>
        <div>
          {nationalPokedexNumbers && nationalPokedexNumbers.length > 0 ? (
            <p>Pokedex Entry</p>
          ) : (
            ""
          )}
          {nationalPokedexNumbers && nationalPokedexNumbers.length > 0 ? (
            <p>#{nationalPokedexNumbers.join(", ")}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          {legalities && Object.keys(legalities).length > 0 ? (
            <p>Legalities</p>
          ) : (
            ""
          )}
          {legalities && Object.keys(legalities).length > 0 ? (
            <div>
              {(() => {
                let legalityList = [];
                for (let key in legalities) {
                  legalityList.push(
                    <p key={key}>
                      {key}: {legalities[key]}
                    </p>
                  );
                }
                return legalityList;
              })()}
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <em>{flavorText}</em>
        </div>
        <p>${price}</p>
        <p>In Stock: {quantity}</p>
      </div>
    </div>
  );
};

export default SingleCard;
