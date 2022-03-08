import { useContext, useState } from "react";
import style from "./styles.module.scss";
import { userContext } from "../../contexts/userContext";
export default function CreateService() {
  const { user } = useContext(userContext);
  const [company, setCompany] = useState(user.name);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleTitle = (e) => {};

  const handleLocality = (e) => {};

  const handleDepartament = (e) => {};

  const handleCompany = (e) => {};

  const handleDescription = (e) => {};

  const handleFiles = (e) => {
    console.log(e.target.files);
  };
  return (
    <section className={style.createServiceSection}>
      <form onSubmit={handleSubmit} className={style.createServiceForm}>
        <div className={style.containerInputImage}>
          <img src="/" alt="#" className={style.containerInputImage} />
          <input type="file" onChange={handleFiles} multiple />
        </div>
        <div className={style.containerInfo}>
          <input
            type="text"
            placeholder="Titulo..."
            className={style.titleInfo}
          />

          <div className={style.containerOpinions}>
            <h4>OPINIONES:</h4>
            <p>5</p>
            <ul>
              <li>star</li>
              <li>star</li>
              <li>star</li>
              <li>star</li>
              <li>star</li>
            </ul>
          </div>

          <div className={style.containerLocations}>
            <label>LUGAR:</label>
            <input type="text" placeholder="Provincia..." />
            <input type="text" placeholder="Ciudad..." />
          </div>

          <div className={style.containerCompany}>
            <label>EMPRESA:</label>
            <input
              type="text"
              placeholder="Nombre de Empresa..."
              onChange={handleCompany}
              value={company}
            />
          </div>

          <div className={style.containerDescription}>
            <label>DESCRIPCION:</label>
            <textarea placeholder="Descripción del servicio..." />
          </div>
        </div>

        <div className={style.containerPrePayment}>
          <div>
            <span>$</span>
            <input type="text" placeholder="Precio..." />
            <span>ARS</span>
          </div>
          <button className={style.buttonPrePayment} disabled={true}>
            SEÑAR
          </button>
          <label>Metodos De Pago:</label>
        </div>
      </form>
    </section>
  );
}
