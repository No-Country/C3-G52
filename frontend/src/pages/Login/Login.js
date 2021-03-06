import { useContext, useState } from "react";
import style from "./Login.module.scss";
import { userContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const { user, setUser } = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCompany, setIsCompany] = useState(false);
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeCheckbox = (e) => {
    setIsCompany(e.target.checked);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      email,
      password,
      isCompany,
    });
    fetch("https://backend-c3.herokuapp.com/signin", {
      headers: {
        "Content-Type": "Application/json",
      },
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((resUser) => {
        console.log(resUser);
        let { token } = resUser;
        let userData = {};
        let is = "";
        if (resUser.hasOwnProperty("company")) {
          is = "company";
        } else {
          is = "client";
        }
        userData = resUser[is];
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            name: userData.name || "",
            email: userData.email,
            id: userData.id,
            token,
            is,
          })
        );

        setUser({
          id: userData.id,
          name: userData.name,
          email: userData.email,
          is,
          token,
        });
        navigate("/services");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={style.loginContainer}>
      <h1 className={style.title}>Bienvenidos a Fiambalá</h1>
      <form className={style.form} onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu correo"
          onChange={handleChangeEmail}
        />
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          onChange={handleChangePassword}
        />
        <label for="checkbox">Sos Empresa?</label>
        <input
          type="checkbox"
          name="checkbox"
          onChange={handleChangeCheckbox}
        />
        <button className={style.btnSubmit}>Ingresar</button>
        <Link to={`/checkin`}>
          <button className={style.btnRegister} type="submit">
            Registrarse
          </button>
        </Link>
        {/* <button className={style.btnGoogle}>Ingresar con google</button> */}
      </form>
    </div>
  );
}
