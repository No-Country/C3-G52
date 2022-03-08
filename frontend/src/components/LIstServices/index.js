import CardService from "../card/cardServ";
import SkeletonCardServices from "../SkeletonCardServices";
import styles from "./styles.module.scss";

export default function ListServices({ services = [] }) {
  const listSkeleton = [1, 2, 3, 4, 5];

  return (
    <section className={styles.ListServices}>
      <ul className={styles.grids}>
        {services.length
          ? services.map((service) => (
              <CardService
                id={service.id}
                key={service.id}
                name={service.title}
                img={service.pics[0]}
                description={service.description}
                price={service.price}
                type={service.type}
                location={service.location}
              />
            ))
          : listSkeleton.map((el) => <SkeletonCardServices />)}
      </ul>
    </section>
  );
}
