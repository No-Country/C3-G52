import React from "react";
import styles from "./Home.module.scss";
import MapView from "../../components/Map/MapView";
import {
  Header, Cards, KnowMore
} from '../../components';

function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <MapView/>
        <Cards />
        <KnowMore />
      </div>
    </>
  );
}

export default Home;