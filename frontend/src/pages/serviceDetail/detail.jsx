import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MapView from "../../components/Map/MapView";
import img from "../../components/imgs/img";
import style from "./detail.module.scss";
import Carrousel from "../../components/Carrousel";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { convertNum } from "../../middlewares/convertNum";

const host = {
  heroku: "https://backend-c3.herokuapp.com",
  local: "http://localhost:3002",
};

const Detail = () => {
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  let { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    // fetch(`https://backend-c3.herokuapp.com/services/service/${id}`)
    fetch(`${host.heroku}/services/service/${id}`)
      .then((res) => res.json())
      .then(setService);
  }, [id]);

  const handleClickPrePayment = (e) => {
    if (!user) return navigate("/login");
    if (user.is !== "client") return alert("Tenes que se usuario cliente");

    const id_client = user.id;
    const id_service = id;
    const body = JSON.stringify({
      id_client,
      id_service,
    });
    fetch("https://backend-c3.herokuapp.com/payments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then(alert("Servicio Contratado"))
      .catch((error) => console.log(error));
  };

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
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
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
          <h4 className={style.pricePrePayment}>
            ${convertNum(service.price)} ARS
          </h4>
          {service &&
          user &&
          service.clients.find((client) => client === user.id) ? (
            <button className={style.buttonPrePayment}>Cancelar Pago</button>
          ) : (
            <button
              className={style.buttonPrePayment}
              onClick={handleClickPrePayment}
            >
              SEÑAR
            </button>
          )}

          <p>Metodos De Pago:</p>
        </div>
        <div>
          {service.reviews.length
            ? service.reviews.map((review) => (
                <article>
                  <header>
                    <div>avatar</div>
                    <div>name</div>
                  </header>
                  <div>
                    <span>Puntuacion : {review.score}</span>
                  </div>
                  <div>
                    <span>{review.content}</span>
                  </div>
                </article>
              ))
            : null}
        </div>
      </section>
    </section>
  );
};

export default Detail;
