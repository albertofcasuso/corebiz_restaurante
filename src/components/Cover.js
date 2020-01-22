import React from "react"
import Navbar from '../components/Navbar'
import plato from "../images/plato.png"
import decorado from "../images/decoracion.png"

const Cover = () => {
  return (
    <header id="cover">
      <div className="dark-overlay">
        <Navbar/>
        <div className="container">
          <div className="row align-items-center mt-lg-5 mt-3">
            <div className="col-lg  text-light text-left col-12 pt-lg-5">
              <img src={decorado} className="float-right decorado-cover" />
              <h1 className="display-3">Welcome to our restaurant</h1>
              <p className="lead py-3">Everyday 8:00AM - 23:00PM</p>
              <div className="col-lg-8 mt-lg-4 col-12">
                <div className="d-flex justify-content-between">
                  <a href="#reserve" className="btn-primary btn btn-block p-1">
                    Book a table
                  </a>

                  <a
                    href="#forLunch"
                    className="btn btn-outline-light btn-block ml-3 p-1"
                  >
                    See menu
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg mt-lg-3 mt-5 col-12">
              <img src={plato} className="img-fluid" />
            </div>
          </div>
          <div className="row align-items-end pt-5 mt-5">
            <div className="d-md-block text-center d-none mx-auto ">
              <a href="#history" className="text-light">
                <i class="fas fa-angle-down fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Cover
