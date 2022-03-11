import { useState, useEffect, useCallback } from "react";

const urlServices = (type, id = "") => {
  switch (type) {
    case "all":
      return "https://backend-c3.herokuapp.com/services/all";
    case "servicesOfCompany":
      return `https://backend-c3.herokuapp.com/services/company/${id}`;
    case "servicesOfClient":
      return `https://backend-c3.herokuapp.com/clients/services-hired/${id}`;
    default:
      return "https://backend-c3.herokuapp.com/services/all";
  }
};

export default function useServices(typeFromProps, idFromProps = "") {
  const [services, setServices] = useState([]);
  const [typeServices, setTypeServices] = useState(typeFromProps);
  const [id, setId] = useState(idFromProps);
  const [url, setUrl] = useState(urlServices("all"));

  useEffect(() => {
    const newUrl = urlServices(typeServices, id);
    setUrl(newUrl);
  }, [id, typeServices]);

  useEffect(() => {
    console.log("la url", url);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log("url", url);
        console.log("id", id);
        console.log(res);
        setServices(res);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return {
    services,
    setServices,
    typeServices,
    setTypeServices,
    id,
    setId,
  };
}
