import React from "react";
import styles from "./Home.module.scss";
import MapView from "../../components/Map/MapView";
import {
  Header, NavbarHome, KnowMore
} from '../../components';
import FormMap from "../../components/FormMap/index.js";

function Home() {
  return (
    <>
      <NavbarHome />
      <Header />
      <div className={styles.container}>
        <div className={styles.containerMap}>
        <FormMap/>
        <MapView/>
        </div>
        {/* <Cards /> */}
        <KnowMore />
      </div>
    </>
  );
}

export default Home;