import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../../contexts/userContext";

import styles from "./Navbar.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";

export default function Navbar() {

  const {user, setUser} = useContext(userContext)
  
  const handlerClickLogout = () => {
    localStorage.removeItem("userInfo")
    setUser(null)
    console.log(user)
  }

  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleMenuOpen = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`${styles.navbar } ${styles.scroll}`}>
      <ul className={menuOpen ? styles.menuList : `${styles.menuList } ${styles.menuListClose}`}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              borderBottom: isActive ? '3px solid rgba(255, 255, 255, 0.6)' : '',
            })}
          >
            Inicio
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              borderBottom: isActive ? '3px solid rgba(255, 255, 255, 0.6)' : '',
            })}
          >
            About
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/products"
            style={({ isActive }) => ({
              borderBottom: isActive ? '3px solid rgba(255, 255, 255, 0.6)' : '',
            })}
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            style={({ isActive }) => ({
              borderBottom: isActive ? '3px solid rgba(255, 255, 255, 0.6)' : '',
            })}
          >
            Servicios
          </NavLink>
        </li>
        <li>
          {!user ? 
            <NavLink 
              to="/login"
              className={styles.login}
              style={({ isActive }) => ({
                borderBottom: isActive ? '3px solid rgba(255, 255, 255, 0.6)' : '',
              })}
            >
              Iniciar
            </NavLink>
            : 
            <button onClick={handlerClickLogout}>
              Salir
            </button>          
          }
        </li>
      </ul>
      <div className={styles.menuIcon} onClick={handleMenuOpen}>
        { menuOpen ? <span className={styles.faClose}><AiOutlineCloseSquare /></span> : <span className={styles.faBars}><BiMenuAltRight /></span>}
      </div>
    </nav>
  );
}