import ModalConfirm from "../../components/ModalConfrm";
import { useContext, useState } from "react";
import { userContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import style from "./check.module.scss";

const host = {
  heroku: "https://backend-c3.herokuapp.com",
  local: "http://localhost:3002",
};

const CheckIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCompany, setIsCompany] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = JSON.stringify({
      name,
      email,
      password,
      isCompany,
    });

    fetch(`${host.heroku}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      // .then((json) => console.log(json));
      .then((resUser) => {
        setModalActive(true);
        let userData = {};
        let is = isCompany ? "company" : "client";
        userData = resUser;
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            name: userData.name || "",
            email: userData.email,
            id: userData.id,
            is,
          })
        );

        setUser({
          id: userData.id,
          name: userData.name,
          email: userData.email,
          is,
        });
        // clearTimeout(time);
      });
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeCheckbox = (e) => {
    setIsCompany(e.target.checked);
  };

  return (
    <div className={style.loginContainer}>
      <h1 className={style.title}>Bienvenidos a Fiambalá</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChangeName}
          placeholder="Ingresa tu nombre"
        />
        <input
          type="text"
          onChange={handleChangeEmail}
          placeholder="Ingresa tu correo"
        />
        <input
          type="password"
          onChange={handleChangePassword}
          placeholder="Ingresa tu contraseña"
        />
        <label for="checkbox">Sos Empresa?</label>
        <input
          type="checkbox"
          name="checkbox"
          onChange={handleChangeCheckbox}
        />
        <button className={style.btnSubmit} type="submit">
          Registrarse
        </button>
        {/* <button className={style.btnGoogle}>Ingresar con google</button>	 */}
        <ModalConfirm
          text="Registrado, redirigiendo..."
          isActive={modalActive}
          buttonActive={false}
        />
      </form>
    </div>
  );
};

export default CheckIn;
