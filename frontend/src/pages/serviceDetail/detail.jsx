import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import MapView from "../../components/Map/MapView";
import img from "../../components/imgs/img";
import style from "./detail.module.scss";
import Carrousel from "../../components/Carrousel";

const Detail = () => {
  let { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch(`https://backend-c3.herokuapp.com/services/service/${id}`)
      .then((res) => res.json())
      .then(setService);
  }, [id]);

  if (!service) return <></>;

  return (
    <section className={style.detail}>
      <section className={style.detailFirstSection}>
        <Carrousel images={service.pics} className={style.carrousel} />
        <div className={style.info}>
          <h1 className={style.infoTitle}>{service.title}</h1>
          <div className={style.opinions}>
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

          <div className={style.locations}>
            <h4>LUGAR:</h4>
            <p>{service.location.departament}</p>
            <p>{service.location.locality}</p>
          </div>

          <div className={style.company}>
            <h4>EMPRESA:</h4>
            <p>EnzoEmpresaInc</p>
          </div>

          <div className={style.description}>
            <h4>DESCRIPCION:</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque vel dolore omnis similique nulla dignissimos harum
              explicabo autem iusto unde. Fuga officia eveniet cum inventore
              earum aliquam accusantium at harum! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Doloremque vel dolore omnis
              similique nulla dignissimos harum explicabo autem iusto unde. Fuga
              officia eveniet cum inventore earum aliquam accusantium at harum!
            </p>
          </div>
        </div>

        <div className={style.prePayment}>
          <h4 className={style.pricePrePayment}>${service.price} ARS</h4>
          <button className={style.buttonPrePayment}>SEÑAR</button>
          <p>Metodos De Pago:</p>
        </div>
      </section>
    </section>
  );
};

export default Detail;
