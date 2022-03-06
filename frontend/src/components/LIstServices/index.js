import { useState, useEffect } from "react";
import CardService from "../card/cardServ";
import styles from "./styles.module.scss";

export default function ListServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://backend-c3.herokuapp.com/services/all")
      .then((res) => res.json())
      .then(setServices)
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={styles.ListServices}>
      <ul className={styles.grids}>
        {services.length &&
          services.map((service) => (
            <CardService
              id={service.id}
              key={service.id}
              name={service.title}
              img={service.pics[0]}
              description={service.description}
              price={service.price}
            />
          ))}
      </ul>
    </section>
  );
}
