import React from "react"
import thumbnail from "../images/thumbnail.png"
import decoradoGris from "../images/decoracion-gris.png"

const Aboutus = () => {
  return (
    <section id="aboutUs">
      <div className="container">
        <div className="row">
          <div className="col-12 p-lg-5 text-center">
            <p className="lead font-weight-light">What people</p>
            <h1>Say About Us</h1>
          </div>
        </div>
        <div
          className="row align-items-center bg-light shadow p-lg-5 mt-5 pt-2 px-3"
          id="aboutUs"
        >
          <div className="col-lg-12 col-12">
            <div id="slider3" class="carousel slide mb-5" data-ride="carousel">
              <div class="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row text-center mb-4">
                      <div className="col-12 py-4 pt-5">
                        <img src={thumbnail} />
                        <img
                          src={decoradoGris}
                          className="float-right decorado-aboutus"
                        />
                      </div>
                    </div>
                    <div className="row text-center ">
                      <div className="col-lg-10 col-12 offset-lg-1">
                        <p className="font-weight-light lead">
                          As I went on, still gaining velocity, the palpitation
                          of night and day merged into one continuous greyness
                          the sky took on a wonderful deepness of blue, a
                          splendid luminous color like that of early twilight;
                          the jerking sun became a streak of fire, a brilliant
                          arch.
                        </p>
                      </div>
                    </div>
                    <div className="row text-center mt-3">
                      <div className="col-12">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star-o"></span>
                        <span class="fa fa-star-o"></span>
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="col-12">
                        <h5 className="mt-3">Magnus Kekhuis</h5>
                        <p className="text-secondary font-weight-light">
                          Restaurant expert
                        </p>
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
