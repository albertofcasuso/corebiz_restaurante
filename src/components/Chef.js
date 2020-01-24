import React from "react"
import chefImg from "../images/chef.jpg"
import chefhat from "../images/chefhat.png"

const Chef = () => {
  return (
    <section id="ourChef">
      <div className="container">
        <div className="row align-items-center justify-content-center my-5">
          <div className="col-lg-6 col-12 py-5">
            <div class="square p-lg-5 shadow align-items-center p-4">
              <img src={chefhat} className="mt-lg-3 ml-lg-3" />
            </div>
            <img src={chefImg} className="img-fluid" />
          </div>
          <div className="col-lg-5 offset-lg-1  col-12  float-right">
            <p className="lead font-weight-light">The word from</p>
            <h1 className="display-4">Our Chef</h1>
            <p className="font-weight-light">
              A peep at some distant orb has power to raise and purify our
              thoughts like a strain of sacred music, or a noble picture, or a
              passage from the grander poets. It always does one good.
            </p>
            <h5 className="font-weight-bold mt-5">Gordon Ramsey</h5>
            <p className="text-secondary font-weight-light">Head Chef</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Chef
