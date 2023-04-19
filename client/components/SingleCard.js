import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleCard = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const card = useSelector(selectSingleCard);
  const { firstName, lastName, imageUrl, information, price, quantity } = card;

  useEffect(() => {
    dispatch(fetchSingleCard(id));
  }, [dispatch]);

  return (
    <div id="single-card">
      <div id="single-card-info">
        <h1>
          {firstName} {lastName}
        </h1>
        <img src={imageUrl} />
        <p>{information}</p>
        <p>${price}</p>
        <p>In Stock: {quantity}</p>
      </div>
    </div>
  );
};

export default SingleCard;
