import style from "./Services.module.scss";
import nightSky from "../../components/video/nightSky.mp4";
import { Link, useLocation } from "react-router-dom";
import ListServices from "../../components/LIstServices";
import useServices from "../../hooks/useServices";
import { useEffect } from "react";
import { userContext } from "../../contexts/userContext";
import { useContext } from "react";

const Services = ({ type }) => {
  const { user } = useContext(userContext);
  const id = user ? user.id : "";
  const is = user ? user.is : "";
  const { services, setTypeServices, setId } = useServices(type, id || "");
  const { pathname } = useLocation();
  useEffect(() => {
    setTypeServices(type);
    setId(id);
  }, [type, id]);

  return (
    <div className={style.container}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={nightSky} type="video/mp4" />
      </video>
      <ul>
        <Link
          to={"/services"}
          className={pathname === "/services" && style.active}
        >
          Todos
        </Link>
        <h2>Hospedajes</h2>
        <h2>Actividades</h2>
        <Link
          to={"/services/myServices"}
          className={pathname === "/services/myServices" && style.active}
        >
          Mis Servicios
        </Link>
      </ul>
      {pathname.includes("/services/myServices") && is === "company" && (
        <Link className={style.buttonCreateService} to={"/createService"}>
          {" "}
          Añadir Un Nuevo Servicio
        </Link>
      )}
      <ListServices services={services} />
    </div>
  );
};

export default Services;
