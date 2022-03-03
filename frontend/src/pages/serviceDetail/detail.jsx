import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MapView from '../../components/Map/MapView';
import img from '../../components/imgs/img';
import style from "./detail.module.scss";

const useParamID = ()=> {  let {id}= useParams(); 
	return id;
}

const Detail = () => {
	let id = useParamID(); 

	const [service, setService] = useState({});

	useEffect(() => {
		fetch(`https://backend-c3.herokuapp.com/services/service/${id}`).then((res) => res.json())
		.then(setService)

	}, [id] );
	
	let detailPoint = [{"lat": -27.6899696, "lon": -67.6189819 }];


	return (
		<div className={style.container}> 
		<img src={img.icon} alt="algo" />
		<h2>Un servicio {`en particular con id: ${id}`}</h2>
		<h3>{service.price}</h3>
		{service && service.pics?.map(el=>{
			
			return(
				<img src={`${el}`|| ""} alt="imagen habitación" />
			)
		}) }
		<p> Aquí debería aparecer el mapa:</p>
		<MapView z={12} centro={{"lat": -27.6899696, "lon": -67.6189819 }} markers={detailPoint} ico={"H"}  className={style.mapadetail}/> 
		
		</div>
	)
}



export default Detail;