import React from 'react'
import slide from "../images/slide.jpg"

const Slider = () => {
    return (
        <section id="slider">
        <div className="container-fluid p-lg-5">
          <div class="row py-5 ">
            <div className="col text-center text-light">
              <h6>Party with us!</h6>
              <h1>Upcoming Events</h1>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-11 col-12">
              <div
                id="slider2"
                class="carousel slide mb-5"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="row text-center no-gutters">
                        <div className="col-lg-6  col-12">
                          <img src={slide} className="img-fluid" />
                        </div>
                        <div className="col-lg-6 bg-light col-12 text-left p-lg-5 p-3">
                          <h6 className="mt-lg-5">Upcoming</h6>
                          <h2>Coffee Night</h2>
                          <p>
                            Apparently we had reached a great height in the
                            atmosphere, for the sky was a dead black, and the
                            stars ceased to twinkle.
                          </p>
                          <a href="#" className="btn btn-primary">
                            Book a table
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item ">
                    <div className="container">
                      <div className="row text-center no-gutters">
                        <div className="col-lg-6  col-12">
                          <img src={slide} className="img-fluid" />
                        </div>
                        <div className="col-lg-6 bg-light col text-left p-lg-5 p-3">
                          <h6 className="mt-lg-5">Upcoming</h6>
                          <h2>Coffee Night 2</h2>
                          <p>
                            Apparently we had reached a great heaight in the
                            atmosphere, for the sky was a dead black, and the
                            stars ceased to twinkle.
                          </p>
                          <a href="#" className="btn btn-primary">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="container">
                      <div className="row text-center no-gutters">
                        <div className="col-lg-6  col-12">
                          <img src={slide} className="img-fluid" />
                        </div>
                        <div className="col-lg-6 bg-light col text-left p-lg-5 p-3">
                          <h6 className="mt-lg-5">Upcoming</h6>
                          <h2>Coffee Night 3</h2>
                          <p>
                            Apparently we had reached a great heaight in the
                            atmosphere, for the sky was a dead black, and the
                            stars ceased to twinkle.
                          </p>
                          <a href="#" className="btn btn-primary">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#slider2"
                  class="carousel-control-prev"
                  data-slide="prev"
                >
                  <i class="fas fa-angle-left fa-2x text-dark"></i>
                </a>

                <a
                  href="#slider2"
                  class="carousel-control-next"
                  data-slide="next"
                >
                  <i class="fas fa-angle-right fa-2x text-dark"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Slider
