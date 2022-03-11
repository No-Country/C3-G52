import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function ModalConfirm({
  text = "Listo",
  buttonText = "Ok",
  link = "/",
  buttonActive = true,
  isActive = false,
}) {
  return createPortal(
    <section
      className={`${!isActive ? styles.close : styles.modalSection}`}
      // className={styles.modalSection}
    >
      <article className={styles.modalContainer}>
        <h1 className={styles.modalText}>{text}</h1>
        <Link
          style={{ display: buttonActive ? "block" : "none" }}
          to={link}
          className={styles.modalLink}
        >
          {buttonText}
        </Link>
      </article>
    </section>,
    document.getElementById("modal")
  );
}
