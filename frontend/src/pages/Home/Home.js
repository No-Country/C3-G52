import React from "react";
import styles from "./Home.module.scss";
import MapView from "../../components/Map/MapView";
import { Header, Cards, KnowMore } from "../../components";
import FormMap from "../../components/FormMap/index.js";

let markerPoint = [{ lat: -27.6899696, lon: -67.6189819 }];

function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.containerMap}>
          <FormMap />
          <MapView
            z={7}
            centro={{ lat: -27.6899696, lon: -67.6189819 }}
            ico={""}
          />
        </div>
        {/* <Cards /> */}
        <KnowMore />
      </div>
    </>
  );
}

export default Home;
