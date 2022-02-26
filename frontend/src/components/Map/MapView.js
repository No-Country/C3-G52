import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./Map.module.scss";
import MyMarker from "../marker/Marker";



const MapView= ({z, centro , markers , ico }) => {
    let index=1;
    return (
        
        <MapContainer  center={centro} zoom={z}  >
            
            <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
            <MyMarker  lat={-27.69194}  long={-67.6249899} ico={""}/>
            {markers && markers.length && markers.map(el => {
                index += 1;
                return (
                    <MyMarker lat={el.lat} long={el.lon} ico={ico} key={index}/>
                )
            })}
        </MapContainer>
    )
}
export default MapView;

{/* <MapContainer  center={{
            "lat": -27.3742,
            "lon": -68.0496
            } } zoom={8}  ></MapContainer> */}

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
