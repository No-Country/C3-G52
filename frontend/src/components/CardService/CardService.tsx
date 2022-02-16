import React from "react";

import { Service } from '../../interfaces';


const CardService : React.FC<Service> = ({name, description, price, img}) =>{
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <img src={img} alt=''></img>
        </div>
    )
}

export default CardService;