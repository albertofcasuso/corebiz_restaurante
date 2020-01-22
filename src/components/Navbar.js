import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark">
          <div className="container">
            <a className="navbar-brand text-light" href="#">
            <h1>REST</h1>
              
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
                <li className="nav-item mx-3 active">
                  <a className="nav-link" href="#history">
                    About Us
                  </a>
                </li>
                <li className="nav-item mx-3 active">
                  <a className="nav-link text-light" href="#offers">
                    Menu
                  </a>
                </li>
                <li className="nav-item mx-3 active">
                  <a className="nav-link text-light" href="#slider">
                    Events
                  </a>
                </li>
                <li className="nav-item mx-3 active">
                  <a className="nav-link text-light" href="#press">
                    News
                  </a>
                </li>
                <li className="nav-item mx-3 active">
                  <a className="nav-link text-light" href="#reserve">
                    Contact
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item btn-circle align-middle pl-2 pt-1 ml-lg-3 active">
                  <a href="#" className="nav-link">
                    <i className="fab fa-facebook "></i>
                  </a>
                </li>
                <li className="nav-item btn-circle align-middle pl-2 pt-1 ml-lg-3 active">
                  <a href="#" className="nav-link">
                    <i className="fab fa-twitter "></i>
                  </a>
                </li>
                <li className="nav-item btn-circle align-middle pl-2 pt-1 ml-lg-3 active">
                  <a href="#" className="nav-link">
                    <i className="fab fa-instagram "></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default Navbar
