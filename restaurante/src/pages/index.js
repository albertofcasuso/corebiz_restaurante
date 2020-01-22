import React from "react"
import Layout from "../layouts/Layout"
import "../styles/main.scss"
import plato from "../images/plato.png"
import historyImg from "../images/history.jpg"
import offers from "../images/offers.jpg"

const Index = props => {
  return (
    <Layout>
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
                    <a className="nav-link" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Menu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Events
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      News
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
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
                      {" "}
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      {" "}
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="container">
            <div className="row align-items-center mt-5">
              <div className="col-lg-6 offset-lg-1 text-light text-left d-lg-block col-12">
                <h1 className="display-3 ">Welcome to our restaurant</h1>
                <p>Everyday 8:00AM - 23:00PM</p>
                <div className="col-lg-8 mt-4 col-12">
                  <div className="d-flex justify-content-between">
                    <a href="#" className="btn-primary btn btn-block p-1">
                      Book a table
                    </a>

                    <a
                      href="#"
                      className="btn btn-outline-light btn-block ml-3 p-1"
                    >
                      See menu
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mt-3 col-12">
                <img src={plato} className="img-fluid" />
              </div>
            </div>
            <div className="row">
              <div className="d-md-block text-center d-none mx-auto">
                <a href="#" className="text-light">
                  <i class="fas fa-angle-down fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="history">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-4 col-12 offset-lg-1 py-5">
              <img src={historyImg} className="img-fluid" />
            </div>
            <div className="col-lg-4  col-12 offset-lg-1 float-right">
              <h6>Discover</h6>
              <h1>Our History</h1>
              <p>
                A peep at some distant orb has power to raise and purify our
                thoughts like a strain of sacred music, or a noble picture, or a
                passage from the grander poets. It always does one good.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div class="container-fluid">
          <div class="row justify-content-end pt-5">
            <div
              class="col-lg-11 p-5 text-center shadow-sm bg-light col"
              id="offers"
            >
              <div className="row">
                <div className="col-lg-7 text-left p-5 col-12">
                  <h6>Check out our</h6>
                  <h1>Seasonal Offers</h1>
                  <div class="list-group list-group-flush">
                    <li class="list-group-item flex-column align-items-start bg-light">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Alaskan Fish & Chips</h5>
                        <h6>$14.00</h6>
                      </div>

                      <small class="text-muted">
                        Served with soy sauce, wasabi, pickled ginger and
                        chopsticks
                      </small>
                    </li>
                    <li class="list-group-item flex-column align-items-start bg-light">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Fishermen's basket</h5>
                        <h6 class="text-muted">$7.00</h6>
                      </div>

                      <small class="text-muted">
                        Snow crab, avocado, cucumber, tobiko, Japanese
                        mayonnaise
                      </small>
                    </li>
                    <li class="list-group-item bg-light flex-column align-items-start">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Chicken Breat Saute Sec</h5>
                        <h6 class="text-muted">$5.00</h6>
                      </div>
                      <small class="text-muted">
                        A latte is a coffee drink made with espresso and steamed
                      </small>
                    </li>
                    <li class="list-group-item bg-light flex-column align-items-start">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Crisp Pork Belly</h5>
                        <h6 class="text-muted">$18.00</h6>
                      </div>
                      <small class="text-muted">
                        Candied salmon, basil potato puree, baby kale marsala
                      </small>
                    </li>
                  </div>
                </div>
                <div class="col-lg-5 p-5 col-12">
                  <img src={offers} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
