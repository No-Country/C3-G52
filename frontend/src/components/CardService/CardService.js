import React from "react";
import { Link } from "react-router-dom";

// import { Service } from '../../interfaces';
import style from "./CardService.module.scss";

const CardService = ({
  id,
  key,
  factory,
  location,
  name,
  description,
  price,
  img,
}) => {
  return (
    <div className={style.cardServiceContainer}>
      <img src={img} alt=""></img>
      <div className={style.infoContainer}>
        <h2>{name}</h2>
        <div className={style.infoFactory}>
          <p>{factory}</p>
          <p>{location}</p>
        </div>
        <p>{description}</p>
        <p className={style.infoPrice}>{price} AqwRS</p>
      </div>
    </div>
  );
};

export default CardService;
