const indexRouter = require("express").Router();

indexRouter.get("/", (req, res, next) => {
  try {
    const routesStrings = (function () {
      const index = "https://backend-c3.herokuapp.com";
      const services = `${index}/services`;

      return {
        index,
        services,
        servicesOfCompany: `${services}/company/6214db5aa039b33b05c3c770`,
        serviceForId: `${services}/service/6214ff72d432b82391075f06`,
        allServices: `${services}/all`,
        addService: `${services}/company/6214db5aa039b33b05c3c770`,
      };
    })();

    res.send(`
      <h1>Rutas que podes usar</h1>
      <h2>Inicio</h2> 
      <p>${routesStrings.index}</p>
      <h2>Servicios</h2>
      <ul>
        <li>
          <h4>Conseguir servicios por id de compañia</h4>
          <p>Ej: ${routesStrings.servicesOfCompany} </p>
        </li>
        <li>
          <h4>Conseguir servicio por su id</h4>
          <p>Ej: ${routesStrings.serviceForId}</p>
        </li>
        <li>
          <h4>Conseguir todos los servicios disponibles</h4>
          <p>Ej: ${routesStrings.allServices}</p>
        </li>
        <li>
          <h4>Añadir un servicio a una compañia por su id con POST</h4>
          <p>Ej: ${routesStrings.addService}</p>
        </li>
      </ul>

    `);
  } catch (error) {
    next(error);
  }
});

module.exports = indexRouter;
