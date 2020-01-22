import React from 'react'
import thumbnail from "../images/thumbnail.png"

const Aboutus = () => {
    return (
        <section id="aboutUs">
        <div className="container">
          <div className="row">
            <div className="col-12 p-lg-5 text-center">
              <h6>What people</h6>
              <h1>Say About Us</h1>
            </div>
          </div>
          <div className="row align-items-center bg-light shadow p-lg-5" id="aboutUs">
            <div className="col-lg-12 col-12">
              <div
                id="slider3"
                class="carousel slide mb-5"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="row text-center mb-4">
                        <div className="col-12">
                          <img src={thumbnail} />
                        </div>
                      </div>
                      <div className="row text-center ">
                        <div className="col-10 offset-lg-1">
                          <p>
                            As I went on, still gaining velocity, the
                            palpitation of night and day merged into one
                            continuous greyness the sky took on a wonderful
                            deepness of blue, a splendid luminous color like
                            that of early twilight; the jerking sun became a
                            streak of fire, a brilliant arch.
                          </p>
                        </div>
                      </div>
                      <div className="row text-center mt-3">
                        <div className="col-12">
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                        </div>
                      </div>
                      <div className="row text-center">
                        <div className="col-12">
                          <h5 className="mt-3">Magnus Kekhuis</h5>
                          <p>Restaurant expert</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#slider3"
                  class="carousel-control-prev"
                  data-slide="prev"
                >
                  <i class="fas fa-angle-left fa-2x text-dark"></i>
                </a>

                <a
                  href="#slider3"
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

export default Aboutus
