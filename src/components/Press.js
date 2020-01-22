import React from 'react'
import nytimes from "../images/nytimes.png"
import guardian from "../images/guardian.png"
import wallStreet from "../images/wallStreet.png"

const Press = () => {
    return (
        <section id="press">
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col text-center text-light mb-lg-5 mb-4">
              <h6>Press</h6>
              <h1>About Us</h1>
            </div>
          </div>
          <div className="row d-flex justify-content-around">
            <div className="col-lg-3 text-left bg-light col-11 p-5">
              <img src={nytimes} className="img-fluid mb-4" />
              <p>
                "Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the stars had ceased to twinkle.
                By the same illusion which lifts the horizon of the sea to the
                level."
              </p>
              <h5 className="font-weight-bold">The new york times</h5>
            </div>
            <div className="col-lg-3 text-left d-none d-md-block bg-light p-5">
              <img src={guardian} className="img-fluid mb-4" />
              <p>
                "Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the stars had ceased to twinkle.
                By the same illusion which lifts the horizon of the sea to the
                level."
              </p>
              <h5 className="font-weight-bold">The Guardian</h5>
            </div>
            <div className="col-lg-3 text-left d-none d-md-block bg-light p-5">
              <img src={wallStreet} className="img-fluid mb-4" />
              <p>
                "Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the stars had ceased to twinkle.
                By the same illusion which lifts the horizon of the sea to the
                level."
              </p>
              <h5 className="font-weight-bold">The wall street journal</h5>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Press
