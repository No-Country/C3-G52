import React from "react";

import styles from './KnowMore.module.scss'

function KnowMore() {
  return (
    <div className={styles.container}>
      <div>
        <img src="https://static.hosteltur.com/app/public/uploads/img/articles/2013/03/01/L_5c1a31f9e1904_DSC_0253.jpg" alt="#" />
      </div>
      <div className={styles["container-text-about"]}>
        <h3>Descubri Lugares</h3>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse placeat at voluptatem nobis possimus obcaecati quasi tempora sapiente perspiciatis.</p>
      </div>
      <div className={styles["container-text-about"]}>
        <h3>Hace conocer tu lugar</h3>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, doloremque molestias enim nulla dolores quo dolorum repellat reiciendis quasi assumenda?</p>
      </div>
      <div>
        <img src="https://noticiaslogisticaytransporte.com/wp-content/uploads/2019/11/turistas-chinos-argentina.jpg" alt="#" />
      </div>
    </div>
  );
}

export default KnowMore;