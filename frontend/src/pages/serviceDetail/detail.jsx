import React from 'react';
import Mapa from '../../components/Mapa.jsx';




	const Detail = () => {
	return (
		<div className='container'> Un Servicio En Particular:
		<Mapa
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap"
        />
		</div>
	)
}

export default Detail;