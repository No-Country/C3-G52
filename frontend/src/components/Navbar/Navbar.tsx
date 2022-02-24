import {useContext} from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { userContext } from "../../contexts/userContext";

export default function Navbar() {
  const {user, setUser} = useContext(userContext)
  
  const handlerClickLogout = () => {
    localStorage.removeItem("userInfo")
    setUser(null)
    console.log(user)
  }

  return (
    <nav className={styles.container}>
      <p>Fiambalá</p>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/products"
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Servicios
          </NavLink>
        </li>
        <li>
          {!user ? 
          <NavLink to="/login">
            Iniciar
          </NavLink>
          : 
          <button onClick={handlerClickLogout}>
            Salir
          </button>          
        }
        </li>
      </ul>
    </nav>
  );
}