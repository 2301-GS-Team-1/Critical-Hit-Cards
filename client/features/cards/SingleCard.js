import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleCard, selectSingleCard } from "./slices/singleCardSlice";

const SingleCard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const card = useSelector(selectSingleCard);
  const { name, images, flavorText, price, quantity } = card;

  useEffect(() => {
    dispatch(fetchSingleCard(id));
  }, [dispatch]);

  return (
    <div id="single-card">
      <div id="single-card-info">
        {/* <h1>{name}</h1> */}
        <img src={images?.large} />
        <p>{flavorText}</p>
        <p>${price}</p>
        <p>In Stock: {quantity}</p>
      </div>
    </div>
  );
};

export default SingleCard;
