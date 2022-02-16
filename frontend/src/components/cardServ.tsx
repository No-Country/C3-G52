import React from "react";

interface services { name:string, img: string, description: string, price: number };

function CardServ({name}:{name:string} ){
    return (
        <div>
            <h2>{name}</h2>
            {/* <img src={objMoock.img} ></img>
            <p>{objMoock.description}</p>
            <h3>{objMoock.price}</h3> */}
        </div>
    )
}
export default CardServ;