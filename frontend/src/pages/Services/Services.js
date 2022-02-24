import React from 'react';
import CardServ from '../../components/card/cardServ.js';
import imgs from "../../components/imgs/img.js";
import style from "./Services.module.scss"

let objMoock={
	name: "Aguas Termales",
	img: imgs.termas,  //"https://t2.uc.ltmcdn.com/images/3/3/6/img_como_saber_si_mi_loro_es_macho_o_hembra_23633_600_square.jpg",
	price: `$ ${2000}` ,
	description:"Espectaculares aguas terapéuticas bordeadas por una vegetación típica de la zona. Las piscinas están al aire libre y sus “baños de chorro” permiten el acceso de los visitantes a las aguas termales hipertérmicas, alcalinas, hipotónicas y ricas en algas verdes  ... cuya temperatura se encuentra entre 38ºC  y 70ºC." }


	const Services = () => {
	return (
		<div className={style.container}> 
		<nav className={style.menu}>
			<ul>
				<li><p>Actividades</p></li>
				<li><p>Hospedajes</p></li>
				<li><p>Traslados</p></li>
			</ul>
		</nav>
		<CardServ name={objMoock.name} img={objMoock.img} description={objMoock.description} price={objMoock.price} />
		
		</div>
	)
}

export default Services;