import React from 'react'
import miniplato from "../images/miniplato.png"

const Menu = () => {
    return (
        <section id="forLunch">
        <div className="container">
          <div className="row">
            <div className="col-12 p-lg-5 text-center">
              <h6>Tasty Dishes</h6>
              <h1>For Lunch</h1>
              <div className="row pt-3">
                <div className="col-lg-6 text-left border-right">
                  <li class="media border-bottom">
                    <img class="mr-3 align-self-center" src={miniplato} />
                    <div class="media-body align-self-center">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Huitlacoche tamale</h5>
                        <h6 class="text-muted">$14.00</h6>
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
                        <h5 class="mb-1">Huitlacoche tamale</h5>
                        <h6 class="text-muted">$14.00</h6>
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
                        <h5 class="mb-1">Huitlacoche tamale</h5>
                        <h6 class="text-muted">$14.00</h6>
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
                        <h5 class="mb-1">Huitlacoche tamale</h5>
                        <h6 class="text-muted">$14.00</h6>
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
                        <h5 class="mb-1">Huitlacoche tamale</h5>
                        <h6 class="text-muted">$14.00</h6>
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
                        <h5 class="mb-1">Huitlacoche tamale</h5>
                        <h6 class="text-muted">$14.00</h6>
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
