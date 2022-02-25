import React from "react";
import styles from "./Home.module.scss";

import {
  NavbarHome, Header, Map, Cards, KnowMore
} from '../../components';

function Home() {
  return (
    <>
      <NavbarHome />
      <Header />
      <div className={styles.container}>
        <Map />  
        <Cards id="about" />
        <KnowMore />
      </div>
    </>
  );
}

export default Home;