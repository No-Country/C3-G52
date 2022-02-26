import React from "react";
import styles from "./Home.module.scss";
import MapView from "../../components/Map/MapView";
import {
  Header, Cards, KnowMore
} from '../../components';

let markerPoint = [{"lat": -27.6899696, "lon": -67.6189819 }] 

function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <MapView z={7} centro={{"lat": -27.6899696, "lon": -67.6189819 }} markers={markerPoint} ico={""} />
        <Cards />
        <KnowMore />
      </div>
    </>
  );
}

export default Home;