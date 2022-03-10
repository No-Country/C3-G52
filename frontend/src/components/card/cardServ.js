import React from "react";
import style from "./cardServ.module.scss";
import imgs from "../imgs/img";
import { Link } from "react-router-dom";

const es = {
  housing: "hospedaje",
};

function CardServ({
  name,
  img,
  description,
  price,
  key,
  id,
  type,
  location,
  isByCompany = false,
}) {
  return (
    <div className={style.frameCard}>
      <img src={img} className={style.imgserv}></img>
      <div className={style.frameCardInfo}>
        <h2 className={style.frameCardtitle}>{name}</h2>
        <div className={style.frameCardContainerType}>
          <span>categorías:</span>
          <p>[{es[type]}]</p>
          <div className={style.frameCardLocation}>
            <img src={imgs.here}></img> <h6>Fiambalá</h6>
          </div>
        </div>
        <p className={style.frameCardDescription}>
          {description.slice(0, 70)}
          {description.length > 70 && "..."}
        </p>
        <div className={style.frameCardContainerPrice}>
          <span>${price}</span> <span>ARS</span>{" "}
          <Link className={style.frameCardButton} to={`/detail/${id}`}>
            Reservar
          </Link>
          {isByCompany && (
            <Link className={style.frameCardButton} to={`/updateService/${id}`}>
              Actualizar Informacion
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
export default CardServ;
