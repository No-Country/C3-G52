const indexRouter = require("express").Router();
const index = "https://backend-c3.herokuapp.com";
const services = `${index}/services`;
const companies = `${index}/companies`;
const routesExamples = {
  index,
  services,
  servicesOfCompany: `${services}/company/6221690a01ddb0e77840ed4c`,
  serviceForId: `${services}/service/6214ff72d432b82391075f06`,
  allServices: `${services}/all`,
  addService: `${services}/company/6221690a01ddb0e77840ed4c`,
  updateService: `${services}/service/62150057d432b82391075f0c`,
  updateCompany: `${companies}/6221690a01ddb0e77840ed4c`,
  register: `${index}/signup`,
  login: `${index}/signin`,
  addReview: `${index}/reviews/`,
  updateReview: `${index}/reviews/`,
  deleteReview: `${index}/reviews/6223db2a9c0c2c0bc317d24e`,
  addPayment: `${index}/payments/`,
};
const routesStrings = {
  index,
  services,
  servicesOfCompany: `${services}/company/:id_company`,
  serviceForId: `${services}/service/:id_service`,
  allServices: `${services}/all`,
  addService: `${services}/company/:id_company`,
  updateService: `${services}/service/:id_service`,
  updateCompany: `${companies}/id_company`,
  register: `${index}/signup`,
  login: `${index}/signin`,
  addReview: `${index}/reviews/`,
  updateReview: `${index}/reviews/`,
  deleteReview: `${index}/reviews/:id_review`,
  addPayment: `${index}/payments/`,
};
const precode = (jsonString) => {
  return `
  <pre>
  <code class="hljs language-json">
  ${jsonString}
  </code>
  </pre>`;
};

const style = `<style>
b{
  color: #b00909
}
li{
  background-color: rgba(255, 255, 255, .5);
  border-radius: 11px;
  box-shadow: 1px 1px 10px 0 grey;
  padding: 1em;
  margin-block-end: 1em;
  letter-spacing: .7px;
}
section{
  display: flex;
  flex-direction: column;
  justfy-content:center;
  padding:1em;
  box-shadow: 1px 1px 10px 0px grey;
  margin-block-end: 1em;
  background-color: #f2f2f2;
}
.span-get{
  font-weight:bold;
  color:#4d94ff;
}
.span-post{
  font-weight:bold;
  color: #00cc00;
}
.span-delete{
  font-weight:bold;
  color: #cc0000;
}
.span-put{
  font-weight:bold;
  color: #e68a00;
}
.text-route{
  display: flex;
  gap: 1em;
  align-items: center;
}
.route{
  font-size: 1.1em;
  font-weight: 700;
  color: #953a3a;
}
.example-route{
  color:gray;
  font-weight: 600;
}
.example-close{
  max-height: 0px;
  display: none;
  visibility: hidden;
}

.example{
  transition: height ease, visibility ease, display ease ;
}

.example-open{
  animation: openExample;
  animation-duration: 1s;
  animation-iteration-count: 1;
}
.example-button{
  margin-block-start: 1.2em;
  background-color: #f92672;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1.2px;
  padding: 1em;
  border-radius: 6px;
}

@keyframes openExample {
  30%{
    display: block;
  }
  50%{
   max-height: auto;
  }
  100%{
    visibility: visible;
  }
}


</style>
`;

const head = `<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Backend C3-G52</title>
${style}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/monokai-sublime.min.css">
</head>`;

const li = (props) => {
  const {
    title,
    type,
    route,
    example,
    exampleJson = "",
    responseJson = "",
  } = props;

  return `<li>
  <h3>${title}</h3>
  <div class="text-route" >
    <span class="span-${type}">${type.toUpperCase()}</span>
    <p class="route">${route}</p>
  </div>
  <button class="example-button">Ver Ejemplo</button>
  <div class="example example-close" id="example">
    <p class="example-route">${example}</p>
    ${exampleJson && `<b >Body:</b>`}
    ${exampleJson && precode(exampleJson)}
    <b >Response:</b>
    ${responseJson && precode(responseJson)}
  </div>
  </li>`;
};
indexRouter.get("/", (req, res, next) => {
  try {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    ${head}
    <body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js" integrity="sha512-IaaKO80nPNs5j+VLxd42eK/7sYuXQmr+fyywCNA0e+C6gtQnuCXNtORe9xR4LqGPz5U9VpH+ff41wKs/ZmC3iA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <h1 style="text-align:center">Documentación backend G52</h1>
    <section>
    <h2>Inicio</h2> 
    <ul>
    <li>
    <p class="route">${routesStrings.index}</p>    
    </li>
    </ul>
    </section>

    <section>
    <h2>Servicios</h2>
    <ul>
      ${li({
        title: "Conseguir servicios de una compañia",
        type: "get",
        route: `${routesStrings.servicesOfCompany}`,
        example: `${routesExamples.servicesOfCompany}`,
        responseJson: `
        [
          {
            "title": "Cuarto de 1 habitación",
            "description": "lorem ipsum nosa reja asena sa",
            "type": "housing",
            "price": 10800,
            "location": {
              "departament": "Fiambala",
              "country": "Argentina",
              "locality": "Catamarca",
              "coordinates": "-27.687667715736996, -67.61949986484082"
            },
            "pics": [
              "https://www.cataloniahotels.com/es/blog/wp-content/uploads/2016/05/habitaci%C3%B3n-individual-catalonia-620x412.jpg"
            ],
            "reviews": [],
            "clients": [],
            "company": "6221690a01ddb0e77840ed4c",
            "id": "62217a5d6a113bfb2c82bed6"
          },
          {
            "title": "Cuarto de 3 habitación",
            "description": "lorem ipsum nosa reja asena sa",
            "type": "housing",
            "price": 20800,
            "location": {
              "departament": "Fiambala",
              "country": "Argentina",
              "locality": "Catamarca",
              "coordinates": "-27.687667715736996, -67.61949986484082"
            },
            "pics": [
              "https://www.atrapalo.com.ar/hoteles/picture/s/242/5/7/0.jpg"
            ],
            "reviews": [],
            "clients": [
              "6221695001ddb0e77840ed4e"
            ],
            "company": "6221690a01ddb0e77840ed4c",
            "id": "62217aef6a113bfb2c82bedc"
          }
        ]
        `,
      })}
      ${li({
        title: "Conseguir un servicio por su id",
        type: "get",
        route: `${routesStrings.serviceForId}`,
        example: `${routesExamples.serviceForId}`,
        responseJson: ``,
      })}
      ${li({
        title: "Actualizar servicio",
        type: "put",
        route: `${routesStrings.updateService}`,
        example: `${routesExamples.updateService}`,
        exampleJson: `
        {
          "title":"Cuarto de 1 habitación",
          "description":"lorem ipsum nosa reja asena sa",
          "type": "housing",
          "price": 10800.00,
          "location_departament":"Fiambala",
          "location_locality": "Catamarca",
          "location_country": "Argentina",
          "location_coordinates": "-27.687667715736996, -67.61949986484082"
          ,
          "pics":["https://www.cataloniahotels.com/es/blog/wp-content/uploads/2016/05/habitaci%C3%B3n-individual-catalonia-620x412.jpg"]
        }
        `,
        responseJson: `
        {
          "title": "Cuarto de 1 habitación",
          "description": "lorem ipsum nosa reja asena sa",
          "type": "housing",
          "price": 10800,
          "location": {
            "departament": "Fiambala",
            "locality": "Catamarca",
            "country": "Argentina",
            "coordinates": "-27.687667715736996, -67.61949986484082"
          },
          "pics": [
            "https://www.cataloniahotels.com/es/blog/wp-content/uploads/2016/05/habitaci%C3%B3n-individual-catalonia-620x412.jpg"
          ],
          "reviews": [],
          "clients": [],
          "company": "6214db5aa039b33b05c3c770",
          "id": "62150057d432b82391075f0c"
        }
        `,
      })}
      ${li({
        title: "Conseguir todos los servicios",
        type: "get",
        route: `${routesStrings.allServices}`,
        example: `${routesExamples.allServices}`,
        responseJson: `
        [
          {
            "title": "Cuarto de 1 habitación",
            "description": "lorem ipsum nosa reja asena sa",
            "type": "housing",
            "price": 10800,
            "location": {
              "departament": "Fiambala",
              "country": "Argentina",
              "locality": "Catamarca",
              "coordinates": "-27.687667715736996, -67.61949986484082"
            },
            "pics": [
              "https://www.cataloniahotels.com/es/blog/wp-content/uploads/2016/05/habitaci%C3%B3n-individual-catalonia-620x412.jpg"
            ],
            "reviews": [],
            "clients": [],
            "company": {
              "name": "EnzoCompany",
              "email": "enzoCompany@c3.com",
              "products": [],
              "services": [
                "62217a5d6a113bfb2c82bed6",
                "62217aef6a113bfb2c82bedc"
              ],
              "id": "6221690a01ddb0e77840ed4c"
            },
            "id": "62217a5d6a113bfb2c82bed6"
          },
          {
            "title": "Cuarto de 3 habitación",
            "description": "lorem ipsum nosa reja asena sa",
            "type": "housing",
            "price": 20800,
            "location": {
              "departament": "Fiambala",
              "country": "Argentina",
              "locality": "Catamarca",
              "coordinates": "-27.687667715736996, -67.61949986484082"
            },
            "pics": [
              "https://www.atrapalo.com.ar/hoteles/picture/s/242/5/7/0.jpg"
            ],
            "reviews": [],
            "clients": [
              "6221695001ddb0e77840ed4e"
            ],
            "company": {
              "name": "EnzoCompany",
              "email": "enzoCompany@c3.com",
              "products": [],
              "services": [
                "62217a5d6a113bfb2c82bed6",
                "62217aef6a113bfb2c82bedc"
              ],
              "id": "6221690a01ddb0e77840ed4c"
            },
            "id": "62217aef6a113bfb2c82bedc"
          }
        ]
        `,
      })}
      ${li({
        title: "Añadir un servicio a una compañia",
        type: "post",
        route: `${routesStrings.addService}`,
        example: `${routesExamples.addService}`,
        exampleJson: `
        {
          "title":"Cuarto de 3 habitación",
          "description":"lorem ipsum nosa reja asena sa",
          "type": "housing",
          "price": 20800.00,
          "location_departament":"Fiambala",
          "location_locality": "Catamarca",
          "location_country": "Argentina",
          "location_coordinates": "-27.687667715736996, -67.61949986484082",
          "pics":["https://www.atrapalo.com.ar/hoteles/picture/s/242/5/7/0.jpg"]
        }
        `,
        responseJson: `
        {
          "title": "Cuarto de 3 habitación",
          "description": "lorem ipsum nosa reja asena sa",
          "type": "housing",
          "price": 20800,
          "location": {
            "departament": "Fiambala",
            "country": "Argentina",
            "locality": "Catamarca",
            "coordinates": "-27.687667715736996, -67.61949986484082"
          },
          "pics": [
            "https://www.atrapalo.com.ar/hoteles/picture/s/242/5/7/0.jpg"
          ],
          "reviews": [],
          "clients": [],
          "company": "6221690a01ddb0e77840ed4c",
          "id": "62217aef6a113bfb2c82bedc"
        }
        `,
      })}
    </ul>
    </section>

    <section>
    <h2>Compañias</h2>
    <ul>
      ${li({
        title: "Actualizar info de una compañia",
        type: "put",
        route: `${routesStrings.updateCompany}`,
        example: `${routesExamples.updateCompany}`,
        exampleJson: `
        {
          "name": "EnzoCompany.inc",
          "email": "enzoEmpresa@c3.com"
        }
        `,
        responseJson: `
        {
          "name": "EnzoCompany.inc",
          "email": "enzoEmpresa@c3.com",
          "products": [],
          "services": [
            "62217a5d6a113bfb2c82bed6",
            "62217aef6a113bfb2c82bedc"
          ],
          "id": "6221690a01ddb0e77840ed4c"
        }
        `,
      })}
    </ul> 
    </section>

    <section>
    <h2>Logearse</h2>
    <ul>
      ${li({
        title: "Registrar como compañia o cliente",
        type: "post",
        route: `${routesStrings.register}`,
        example: `${routesExamples.register}`,
        exampleJson: `
        {
          "name": "Enzo",
          "email": "enzoClient@c3.com",
          "password": "1234",
          "isCompany": false
        }
        `,
        responseJson: `
        {
          "name": "Enzo",
          "email": "enzoClient@c3.com",
          "surname": "",
          "active": true,
          "isAdmin": false,
          "services_hired": [],
          "reviews": [],
          "id": "6221695001ddb0e77840ed4e"
        }
        `,
      })}
      ${li({
        title: "Iniciar sesion como compañia o cliente",
        type: "post",
        route: `${routesStrings.login}`,
        example: `${routesExamples.login}`,
        exampleJson: `
        {
          "email":"enzoCompany@c3.com",
          "password": "1234",
          "isCompany": true
        }
        `,
        responseJson: `
        {
          "company": {
            "name": "EnzoCompany",
            "email": "enzoCompany@c3.com",
            "products": [],
            "services": [
              "62217a5d6a113bfb2c82bed6",
              "62217aef6a113bfb2c82bedc"
            ],
            "id": "6221690a01ddb0e77840ed4c"
          },
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRW56b0NvbXBhbnkiLCJpZCI6IjYyMjE2OTBhMDFkZGIwZTc3ODQwZWQ0YyIsImlhdCI6MTY0NjM2Mzc5N30.5-d5DBDDOaP2ZyIPX_H6_rXBkz5cEYUFj53ECce7AE0"
        }
        `,
      })}
    </ul>    
    </section>

    <section>
    <h2>Reseñas</h2>
    <ul>
      ${li({
        title: "Añadir Reseña",
        type: "post",
        route: `${routesStrings.addReview}`,
        example: `${routesExamples.addReview}`,
        exampleJson: `
        {
          "id_client":"6221695001ddb0e77840ed4e",
          "id_service":"62217aef6a113bfb2c82bedc",
          "score": 4,
          "content": "Muy buena atencion."
        }
        `,
        responseJson: `
        {
          "score": 4,
          "content": "Muy buena atencion.",
          "active": true,
          "from": "6221695001ddb0e77840ed4e",
          "id": "6223db2a9c0c2c0bc317d24e"
        }      `,
      })}
      ${li({
        title: "Actualizar Reseña",
        type: "put",
        route: `${routesStrings.updateReview}`,
        example: `${routesExamples.updateReview}`,
        exampleJson: `
        {
          "id":"6223db2a9c0c2c0bc317d24e",
          "score": 5,
          "content": "Muy buena atención y limpieza"
        }
        `,
        responseJson: `
        {
          "score": 5,
          "content": "Muy buena atención y limpieza",
          "active": true,
          "from": "6221695001ddb0e77840ed4e",
          "id": "6223db2a9c0c2c0bc317d24e"
        }
        `,
      })}
      ${li({
        title: "Eliminar Reseña",
        type: "delete",
        route: `${routesStrings.deleteReview}`,
        example: `${routesExamples.deleteReview}`,
        responseJson: `
        {
          "score": 5,
          "content": "Muy buena atención y limpieza",
          "active": false,
          "from": "6221695001ddb0e77840ed4e",
          "id": "6223db2a9c0c2c0bc317d24e"
        }
        `,
      })}
    </ul>
    </section>

    <section>
    <h2>Pagos</h2>
    <ul>
      ${li({
        title: "Añadir un pago",
        type: "post",
        route: `${routesStrings.addPayment}`,
        example: `${routesExamples.addPayment}`,
        exampleJson: `
        {
          "id_client": "6221695001ddb0e77840ed4e",
          "id_service": "62217aef6a113bfb2c82bedc"
        }
        `,
        responseJson: `
        {
          "name": "Enzo",
          "email": "enzoClient@c3.com",
          "surname": "",
          "active": true,
          "isAdmin": false,
          "services_hired": [
            "62217aef6a113bfb2c82bedc"
          ],
          "reviews": [],
          "id": "6221695001ddb0e77840ed4e"
        }
        `,
      })}
    </ul> 
    </section>
 
    <script>
    hljs.highlightAll();
    document.addEventListener("click", (e)=>{
      if(!e.target.matches(".example-button")) return;
      const button = e.target;
      const example = button.nextElementSibling
      const isClose = example.classList.toggle("example-close")
      example.classList.toggle("example-open")

      if(!isClose) button.textContent = "Cerrar Ejemplo"
      else {
        button.textContent = "Ver Ejemplo"
      }
      
      console.log()
    });
    </script>
    </body>
    </html>
    `);
  } catch (error) {
    next(error);
  }
});

module.exports = indexRouter;
