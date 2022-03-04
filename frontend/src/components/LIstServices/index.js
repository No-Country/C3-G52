import { useState, useEffect } from "react";
import CardService from "../card/cardServ";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";


export default function ListServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://backend-c3.herokuapp.com/services/company/6221690a01ddb0e77840ed4c"
    )
      .then((res) => res.json())
      .then(setServices)
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={styles.ListServices}>
      <ul className={styles.grids}>
        {services.length &&
          services.map((service) => (
            <Link to={`/detail/${service.id}`}  key={service.id}>
            <CardService
              name={service.title}
              img={service.pics[0]}
              description={service.description}
              price={service.price}
            />
            </Link>
          ))}
      </ul>
    </section>
  );
}
