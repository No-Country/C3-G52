import React from 'react';

import { Service } from '../../interfaces';
import { CardService } from '../../components';


let servicesMoock : Service[] = [
	{
		name: "A-SALIDA TURISTICA",
		img:"url",
		price: 15 ,
		description: "alguna" 
	},
	{
		name: "B-SALIDA TURISTICA",
		img:"url",
		price: 15 ,
		description: "alguna" 
	},
	{
		name: "C-SALIDA TURISTICA",
		img:"url",
		price: 15 ,
		description: "alguna" 
	}
]


const Services = () => {
	return (
		<div className='container'> 
		<h2>Servicios:</h2>
		{
			servicesMoock.map((el, index) => (
				<CardService
					name={el.name}
					description={el.description}
					price={el.price}
					img={el.img} />
			))
		}
		</div>
	)
}

export default Services;