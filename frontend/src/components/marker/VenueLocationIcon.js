import L from "leaflet";
import imgs from "../imgs/img.js"

export const LocationIcon = L.icon({
  iconUrl: imgs.icon,
  iconRetinaUrl: imgs.icon,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});

export const LocationHotel = L.icon({
  iconUrl: imgs.icon2,
  iconRetinaUrl: imgs.icon2,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});
