import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
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
	


	return (
		<div className={style.container}> 
		<img src={img.icon} alt="algo" />
		<h2>Un servicio {`en particular con id: ${id}`}</h2>
		<h3>{service.price}</h3>
		<img src={`${service.pics[1]}`} alt="otracosa" />
		
		</div>
	)
}

const useCallforID =  async(id)=> {  
let objS= await fetch(`https://backend-c3.herokuapp.com/services/service/${id}`).then((res) => res.json())
console.log(objS);
return objS;
}

export default Detail;