import React from 'react'
import offers from "../images/offers.jpg"

const Offers = () => {
    return (
        <section id="offers">
        <div class="container-fluid">
          <div class="row justify-content-end py-5">
            <div
              class="col-lg-11 p-lg-5 pt-4 text-center shadow  bg-light col"
              id="offers"
            >
              <div className="row">
                <div className="col-lg-6 text-left p-lg-5">
                  <h6>Check out our</h6>
                  <h1>Seasonal Offers</h1>
                  <div class="list-group list-group-flush pt-3">
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
                <div class="col-lg-6 p-lg-5 col-12 py-4">
                  <img src={offers} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Offers
