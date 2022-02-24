import React from 'react';
import { Service } from '../../interfaces';
import { CardService } from '../../components';

import style from './Services.module.scss';

let servicesMoock : Service[] = [
	{
		id: "1",
		factory: "Nombre de empresa",
		location: "ubicacion de la empresa",
		name: "Deluxe Room",
		img:"https://volemos.nyc3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2020/01/ruta-de-los-6miles.jpg",
		price: 16.722,
		description: "cama de matrimonio/individual y 1 cama supletoria. disponible 1 baño. ** Precio para una noche, 2 huespedes **" 
	},
	{
		id: "2",
		factory: "Nombre de empresa",
		location: "ubicacion de la empresa",
		name: "Deluxe Room",
		img:"https://volemos.nyc3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2020/01/ruta-de-los-6miles.jpg",
		price: 16.722,
		description: "cama de matrimonio/individual y 1 cama supletoria. disponible 1 baño. ** Precio para una noche, 2 huespedes **"  
	},
	{
		id: "3",
		factory: "Nombre de empresa",
		location: "ubicacion de la empresa",
		name: "Deluxe Room",
		img:"https://volemos.nyc3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2020/01/ruta-de-los-6miles.jpg",
		price: 16.722,
		description: "cama de matrimonio/individual y 1 cama supletoria. disponible 1 baño. ** Precio para una noche, 2 huespedes **" 
	}
]


const Services = () => {
	
	
	return (
		<div className={style.serviceContainer}> 

		<nav >
			<ul>
				<li><p>Actividades</p></li>
				<li><p>Hospedajes</p></li>
				<li><p>Traslados</p></li>
			</ul>
		</nav>
		{
			servicesMoock.map((el, index) => (
				<CardService
					id={el.id}
					factory={el.factory}
					location={el.location}
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