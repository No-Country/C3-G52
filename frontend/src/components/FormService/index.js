import style from "./styles.module.scss";
import { userContext } from "../../contexts/userContext";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

const picsPrev = [
  "https://static.hosteltur.com/app/public/uploads/img/articles/2013/09/01/M_5b14ea6fb7f86_shutterstock_HOTEL.jpg",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/184305239.jpg?k=2d22fe63ae1f8960e057238c98fb436f7bd9f65854e3a5e918607c5cfa1d0a52&o=&hp=1",
];

const urls = {
  POST: "https://backend-c3.herokuapp.com/services/company",
  PUT: "https://backend-c3.herokuapp.com/services/service",
};

export default function FormService() {
  const { user } = useContext(userContext);
  const params = useParams();
  const [typeReq, setTypeReq] = useState("POST");
  const [pics, setPics] = useState(picsPrev);
  const [title, setTitle] = useState("");
  const [locality, setLocality] = useState("");
  const [departament, setDepartament] = useState("");
  const [company, setCompany] = useState(user.name);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      title,
      description,
      type: "housing",
      price,
      location_departament: departament,
      location_locality: locality,
      location_country: "Argentina",
      location_coordinates: "-27.687667715736996, -67.61949986484082",
      pics,
    });
    const url = !params.hasOwnProperty("id")
      ? `${urls["POST"]}/${user.id}`
      : `${urls["PUT"]}/${params.id}`;

    fetch(url, {
      method: typeReq.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  };

  const handleFiles = (e) => {
    if (!e.target.files.length) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    fetch("https://backend-c3.herokuapp.com/upload", {
      method: "POST",
      headers: {
        "enc-type": "multipart/form-data",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((file) => {
        console.log("elfile", file);
        const newPics = pics.concat(file.path);
        setPics((prevPics) => prevPics.concat(file.path));
        localStorage.setItem("picsInEdit", JSON.stringify(newPics));
        return;
      });
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleLocality = (e) => {
    setLocality(e.target.value);
  };

  const handleDepartament = (e) => {
    setDepartament(e.target.value);
  };

  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    if (!params.hasOwnProperty("id")) return;
    setTypeReq("PUT");
    fetch(`https://backend-c3.herokuapp.com/services/service/${params.id}`)
      .then((res) => res.json())
      .then((service) => {
        setPics(service.pics);
        setTitle(service.title);
        setLocality(service.location.locality);
        setDepartament(service.location.departament);
        setCompany(user.name);
        setDescription(service.description);
        setPrice(service.price);
      });
  }, [params]);

  return (
    <section className={style.createServiceSection}>
      <form onSubmit={() => null} className={style.createServiceForm}>
        <div className={style.containerInputImage}>
          <div className={style.imageSkeleton}></div>
          <div className={style.containerPrevImages}>
            {pics.length &&
              pics.map((pic) => (
                <div className={style.prevImage}>
                  <span>x</span>
                  <img src={pic} alt={pic} />
                </div>
              ))}
            <div className={style.containerInputFile}>
              <label htmlFor="fileup">+</label>
              <input
                type="file"
                name="fileup"
                id="fileup"
                onChange={handleFiles}
              />
            </div>
          </div>
        </div>

        <div className={style.containerInfo}>
          <input
            type="text"
            placeholder="Titulo..."
            className={style.titleInfo}
            onChange={handleTitle}
            value={title}
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
            <input
              type="text"
              placeholder="Provincia..."
              onChange={handleDepartament}
              value={departament}
            />
            <input
              type="text"
              placeholder="Ciudad..."
              onChange={handleLocality}
              value={locality}
            />
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
            <textarea
              placeholder="Descripción del servicio..."
              onChange={handleDescription}
              value={description}
            />
          </div>
        </div>

        <div className={style.containerPrePayment}>
          <div>
            <span>$</span>
            <input
              type="text"
              placeholder="Precio..."
              onChange={handlePrice}
              value={price}
            />
            <span>ARS</span>
          </div>
          <button className={style.buttonPrePayment} disabled={true}>
            SEÑAR
          </button>
          <label>Metodos De Pago:</label>
        </div>
      </form>

      <form className={style.formSave} onSubmit={handleSubmit}>
        <Link className={style.cancelSave} to="/services/myServices">
          Cancelar
        </Link>
        <button className={style.addSave}>
          {typeReq.toUpperCase() === "POST"
            ? "Añadir Serivicio"
            : "Actualizar Servicio"}{" "}
        </button>
      </form>
    </section>
  );
}
