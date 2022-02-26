import React from "react";
import {Marker} from "react-leaflet";
import {LocationIcon, LocationHotel} from "./VenueLocationIcon";


const MyMarker = ({lat,long, ico}) => {
    let icono= LocationIcon;
    if( ico && ico=== "H" ) {
        icono= LocationHotel;
    }
    return (
        <Marker position={{ lat: lat , lng: long }} icon={icono} />
    )
}
export default MyMarker;