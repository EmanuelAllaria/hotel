import React from 'react'
import './css/About.css'

function About() {
  return (
    <section id='about'>
        <div className="card text-center">
            <div className="card-header">
                ABOUT
            </div>
            <div className="card-body">
                <h5 className="card-title">Hotel Campos</h5>
                <p className="card-text">Integer ac aliquam tellus. Nam blandit erat eu felis blandit, et elementum ligula molestie. In iaculis vehicula nunc, eget faucibus lacus ullamcorper id. Donec sed nibh pharetra massa mattis tempus et a dui. Aliquam luctus felis at nulla semper ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas at nisl tempus odio condimentum varius.</p>
                <a href="/" className="btn btn-primary">RESERVA AHORA</a>
            </div>
        </div>
    </section>
  )
}

export default About