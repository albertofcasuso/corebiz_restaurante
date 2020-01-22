import React from "react"
import plato from "../images/plato.png"
import decorado from "../images/decoracion.png"

const Cover = () => {
  return (
    <header id="cover">
      <div className="dark-overlay">
        <nav className="navbar navbar-expand-sm navbar-dark">
          <div className="container">
            <a className="navbar-brand text-light" href="#">
              REST
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#history">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#offers">
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#slider">
                    Events
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#press">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#reserve">
                    Contact
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fab fa-facebook "></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#history" className="nav-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row align-items-center mt-lg-5 mt-3">
            <div className="col-lg  text-light text-left col-12 pt-5">
              <img src={decorado} className="float-right decorado" />
              <h1 className="display-3">Welcome to our restaurant</h1>
              <p>Everyday 8:00AM - 23:00PM</p>
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
            <div className="col-lg mt-3 col-12">
              <img src={plato} className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="d-md-block text-center d-none mx-auto ">
              <a href="#" className="text-light">
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
