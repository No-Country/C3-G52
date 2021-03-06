import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import { Footer, Navbar, NavbarHome } from "./components";

import { Login, Services, Home } from "./pages";

import "./App.scss";
import Detail from "./pages/serviceDetail/detail";
import CheckIn from "./pages/checkIn/check.js";
import { useContext } from "react";
import { userContext } from "./contexts/userContext";
import CreateService from "./pages/CreateService";
import UpdateService from "./pages/UpdateService";

function App() {
  const { user } = useContext(userContext);
  const { pathname } = useLocation();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/products" element={<Login />} />
        <Route path="/services" element={<Services type="all" />} />
        <Route
          path="services/myServices"
          element={
            !user ? (
              <Navigate to="/services" />
            ) : user.is === "company" ? (
              <Services type="servicesOfCompany" />
            ) : (
              <Services type="servicesOfClient" />
            )
          }
        />
        )
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/createService" element={<CreateService />} />
        <Route path="/updateService/:id" element={<UpdateService />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
