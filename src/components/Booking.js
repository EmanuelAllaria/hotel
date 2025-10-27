import React, { useMemo, useState } from "react";
import "./css/Booking.css";

function Booking() {
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const [form, setForm] = useState({
    checkin: "",
    checkout: "",
    guests: 2,
    room: "standard",
  });
  const [error, setError] = useState("");

  const nights = useMemo(() => {
    if (!form.checkin || !form.checkout) return 0;
    const inD = new Date(form.checkin);
    const outD = new Date(form.checkout);
    const diff = (outD - inD) / (1000 * 60 * 60 * 24);
    return Math.max(0, diff);
  }, [form.checkin, form.checkout]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.checkin || !form.checkout) {
      setError("Seleccioná fechas de ingreso y salida.");
      return;
    }
    if (nights <= 0) {
      setError("La fecha de salida debe ser posterior al ingreso.");
      return;
    }
    const phone = "";
    const msg = encodeURIComponent(
      `Hola! Quiero reservar:\n` +
        `Ingreso: ${form.checkin}\n` +
        `Salida: ${form.checkout} (${nights} noches)\n` +
        `Huéspedes: ${form.guests}\n` +
        `Habitación: ${form.room}`
    );

    if (phone) {
      window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
    } else {
      alert(
        "Solicitud de reserva enviada (demo):\n\n" + decodeURIComponent(msg)
      );
    }
  };

  return (
    <section id="booking" className="booking container">
      <div className="title">
        <h2>Reserva rápida</h2>
        <p className="text-muted">
          Completá los datos y coordinamos tu estadía.
        </p>
      </div>
      <form onSubmit={submit} className="booking-form row g-3">
        <div className="col-12 col-md-3">
          <label className="form-label">Check-in</label>
          <input
            type="date"
            name="checkin"
            min={today}
            value={form.checkin}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-12 col-md-3">
          <label className="form-label">Check-out</label>
          <input
            type="date"
            name="checkout"
            min={form.checkin || today}
            value={form.checkout}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-12 col-md-3">
          <label className="form-label">Huéspedes</label>
          <select
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className="form-select"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-3">
          <label className="form-label">Tipo de habitación</label>
          <select
            name="room"
            value={form.room}
            onChange={handleChange}
            className="form-select"
          >
            <option value="standard">Standard</option>
            <option value="superior">Superior</option>
            <option value="suite">Suite</option>
          </select>
        </div>

        {error && (
          <div className="col-12">
            <div className="alert alert-danger">{error}</div>
          </div>
        )}

        <div className="col-12 d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Solicitar reserva
          </button>
          <a href="#rooms" className="btn btn-outline-light">
            Ver habitaciones
          </a>
          <div className="ms-auto text-muted align-self-center small">
            {nights > 0 ? `${nights} noche${nights !== 1 ? "s" : ""}` : ""}
          </div>
        </div>
      </form>
    </section>
  );
}

export default Booking;
