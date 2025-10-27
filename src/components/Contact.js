import React from "react";
import "./css/Contact.css";

function Contact() {
  return (
    <section id="contact" className="container">
      <div className="title-contact">
        <h2>Contacto</h2>
      </div>
      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <form method="post" action="">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Nombre
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Tu nombre"
                aria-label="Nombre"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Email
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Tu email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Teléfono
              </span>
              <input
                type="tel"
                className="form-control"
                placeholder="Tu número"
                aria-label="Teléfono"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group">
              <span className="input-group-text">Mensaje</span>
              <textarea
                className="form-control"
                aria-label="Mensaje"
                rows={4}
              ></textarea>
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 col-lg-6">
          <div className="map-wrapper card p-0 overflow-hidden">
            <iframe
              title="mapa"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13130.255964996371!2d-58.383759!3d-34.603738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4f4b0aaf%3A0x0!2sCentro!5e0!3m2!1ses-419!2sar!4v1682720000000"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
