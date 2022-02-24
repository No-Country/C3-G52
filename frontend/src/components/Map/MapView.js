import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./Map.module.scss";


const MapView= () => {
    return (
        
        <MapContainer  center={{"lat": -27.3742, "lon": -68.0496} } zoom={9}  >
            
            <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        </MapContainer>
    )
}
export default MapView;

<MapContainer  center={{
            "lat": -27.3742,
            "lon": -68.0496
            } } zoom={10}  ></MapContainer>

        /* <MapContainer center={[51.505, -0.09]} zoom={13}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
    <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
    </Marker>
</MapContainer>*/
