import { useState, useEffect } from "react";
import CardService from "../card/cardServ";
import styles from "./styles.module.scss";

export default function ListServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://backend-c3.herokuapp.com/services/company/6214db5aa039b33b05c3c770"
    )
      .then((res) => res.json())
      .then(setServices)
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={styles.ListServices}>
      <ul>
        {services.length &&
          services.map((service) => (
            <CardService
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
