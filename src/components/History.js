import React from "react"
import historyImg from "../images/history.jpg"
import decoradoGris from "../images/decoracion-gris.png"

const History = () => {
  return (
    <section id="history">
      <div className="container">
        <div className="row align-items-center mb-5 mt-5">
          <div className="col-lg-5 col-12 offset-lg-1 py-5">
            <img src={decoradoGris} className="float-right decorado-history" />
            <img src={historyImg} className="img-fluid" />
            <div class="square p-lg-5 shadow align-items-center p-4">
              <i class="fas fa-utensils fa-4x text-light img-fluid ml-lg-2"></i>
            </div>
          </div>
          <div className="col-lg-5  col-12 offset-lg-1 float-right">
            <p className="lead font-weight-light">Discover</p>
            <h1>Our History</h1>
            <p className="lead font-weight-light">
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
  )
}

export default History
