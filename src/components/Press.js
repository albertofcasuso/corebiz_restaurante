import React from 'react'
import nytimes from "../images/nytimes.png"
import guardian from "../images/guardian.png"
import wallStreet from "../images/wallStreet.png"
import decorado from "../images/decoracion.png"

const Press = () => {
    return (
        <section id="press">
        <div className="container-fluid py-5 mt-5 ">
        <div className="row">
          <div className="col-lg" id="press-back">
          </div>
        </div>
          <div className="row">
            <div className="col text-center text-light mb-lg-5 mb-4">
              <p className="lead font-weight-light">Press</p>
              <h1 className="display-4">About Us</h1>
            </div>
          </div>
          <div className="row justify-content-center pb-5">
            <div className="col-lg-3 justify-text bg-light col p-lg-5 mx-lg-3 mx-3 p-4">
              <img src={nytimes} className="img-fluid mb-4" />
              <p className="lead font-weight-light">
                "Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the stars had ceased to twinkle.
                By the same illusion which lifts the horizon of the sea to the
                level."
              </p>
              <h5 className="font-weight-bold">The new york times</h5>
            </div>
            <div className="col-lg-3 text-left d-none d-md-block bg-light p-lg-5 mx-lg-3">
              <img src={guardian} className="img-fluid mb-4" />
              <p className="lead font-weight-light">
                "Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the stars had ceased to twinkle.
                By the same illusion which lifts the horizon of the sea to the
                level."
              </p>
              <h5 className="font-weight-bold">The Guardian</h5>
            </div>
            <div className="col-lg-3 text-left d-none d-md-block bg-light p-lg-5 mx-lg-3">
              <img src={wallStreet} className="img-fluid mb-4" />
              <p className="lead font-weight-light">
                "Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the stars had ceased to twinkle.
                By the same illusion which lifts the horizon of the sea to the
                level."
              </p>
              <h5 className="font-weight-bold">The wall street journal</h5>
              <img src={decorado} className=" decorado-press" />
            </div>
            
          </div>
          
        </div>
      </section>
    )
}

export default Press
