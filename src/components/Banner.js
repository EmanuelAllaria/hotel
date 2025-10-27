import React from "react";
import "./css/Banner.css";
import imgBanner from "../img/banner.png";

function Banner() {
  return (
    <section id="home" className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${imgBanner})` }}
      />
      <div className="hero-overlay" />
      <div className="hero-content container">
        <h1>Hotel Campos</h1>
        <p className="text-muted">
          Confort, ubicación y atención personalizada. Tu descanso, nuestra
          prioridad.
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <a href="#booking" className="btn btn-primary">
            Reservar ahora
          </a>
          <a href="#rooms" className="btn btn-outline-light">
            Ver habitaciones
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
