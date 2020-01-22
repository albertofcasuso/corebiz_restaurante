import React from 'react'
import miniplato from "../images/miniplato.png"

const Menu = () => {
    return (
        <section id="forLunch">
        <div className="container">
          <div className="row">
            <div className="col-12 p-lg-5 text-center">
              <p className="font-weight-light lead">Tasty Dishes</p>
              <h1 className="display-4">For Lunch</h1>
              <div className="row pt-3" id="offerList">
                <div className="col-lg-6 text-left border-right" >
                  <li class="media border-bottom">
                    <img class="mr-3 align-self-center" src={miniplato} />
                    <div class="media-body align-self-center">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1 font-weight-light">Huitlacoche tamale</h5>
                        <h5 class="text-muted font-weight-light">$14.00</h5>
                      </div>
                      <small class="text-muted">
                        Served with pickled ginger and chopsticks
                      </small>
                    </div>
                  </li>

                  <li class="media border-bottom">
                    <img class="mr-3 align-self-center" src={miniplato} />
                    <div class="media-body align-self-center">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1 font-weight-light">Huitlacoche tamale</h5>
                        <h5 class="text-muted font-weight-light">$14.00</h5>
                      </div>
                      <small class="text-muted">
                        Served with pickled ginger and chopsticks
                      </small>
                    </div>
                  </li>

                  <li class="media">
                    <img class="mr-3 align-self-center" src={miniplato} />
                    <div class="media-body align-self-center">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1 font-weight-light">Huitlacoche tamale</h5>
                        <h5 class="text-muted font-weight-light">$14.00</h5>
                      </div>
                      <small class="text-muted">
                        Served with pickled ginger and chopsticks
                      </small>
                    </div>
                  </li>
                </div>
                <div className="col-lg-6 text-left">
                  <li class="media border-bottom">
                    <img class="mr-3 align-self-center" src={miniplato} />
                    <div class="media-body align-self-center">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1 font-weight-light">Huitlacoche tamale</h5>
                        <h5 class="text-muted font-weight-light">$14.00</h5>
                      </div>
                      <small class="text-muted">
                        Served with pickled ginger and chopsticks
                      </small>
                    </div>
                  </li>

                  <li class="media border-bottom">
                    <img class="mr-3 align-self-center" src={miniplato} />
                    <div class="media-body align-self-center">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1 font-weight-light">Huitlacoche tamale</h5>
                        <h5 class="text-muted font-weight-light">$14.00</h5>
                      </div>
                      <small class="text-muted">
                        Served with pickled ginger and chopsticks
                      </small>
                    </div>
                  </li>

                  <li class="media">
                    <img class="mr-3 align-self-center" src={miniplato} />
                    <div class="media-body align-self-center">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1 font-weight-light">Huitlacoche tamale</h5>
                        <h5 class="text-muted font-weight-light">$14.00</h5>
                      </div>
                      <small class="text-muted">
                        Served with pickled ginger and chopsticks
                      </small>
                    </div>
                  </li>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12 text-center text-light">
                  <a className="btn btn-primary">Full Menu</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Menu
