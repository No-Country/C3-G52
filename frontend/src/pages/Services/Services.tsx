import React from 'react';
import CardServ from '../../components/cardServ';

let objMoock={
	name: "SALIDA TURISTICA",
	img:"url",
	price: 15 ,
	description:"alguna" }


	const Services = () => {
	return (
		<div className='container'> Servicios:
		<CardServ name={objMoock.name}  />
		</div>
	)
}

export default Services;