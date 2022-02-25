import React from "react";
import styles from "./Home.module.scss";

import {
  Header, Map, Cards, KnowMore
} from '../../components';

function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Map />
        <Cards />
        <KnowMore />
      </div>
    </>
  );
}

export default Home;