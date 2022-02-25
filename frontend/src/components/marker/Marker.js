import React from "react";
import {Marker} from "react-leaflet";
import {LocationIcon} from "./VenueLocationIcon";

const MyMarker = () => {
    return (
        <Marker position={{lat:"-27.3742769412864" , lng:"-68.0496004163813"}} icon={LocationIcon} />
    )
}
export default MyMarker;