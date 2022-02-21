import React from "react";
import style from "./cardServ.module.scss";
import imgs from "../imgs/img";


function CardServ({name, img, description, price } ){
    return (
        <div className={style.frameCard}>
            <img src={img} className={style.imgserv} ></img>
            <div>
            <h2>{name}</h2>
            <h6>categorías:</h6>
            <h5>[actividades, hospedajes]</h5>
            <p>{description}</p>
            <h3>{price}</h3>  ARS 
            <div className={style.here}>
            <img src={imgs.here} ></img> <h6>Fiambalá</h6>
            </div>
            </div>
        </div>
    )
}
export default CardServ;