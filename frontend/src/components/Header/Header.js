import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

import styles from "./Header.module.scss";

function Header() {
  const h1 = useRef();

  useEffect(() => {
    h1.current.classList.add(styles.fade);
  }, []);
  return (
    <div className={styles.image}>
      <section>
        <h1 ref={h1}>NC-Turismo</h1>
      </section>
    </div>
  );
}

export default Header;
