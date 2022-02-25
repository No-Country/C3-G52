import React from 'react';

import styles from './Header.module.scss'

function Header() {
  return (
    <div className={styles.image}>
      <section>
        <h1>
          NC-Turismo
        </h1>
      </section>
    </div>
  );
}

export default Header;