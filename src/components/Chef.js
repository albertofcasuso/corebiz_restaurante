import React from 'react'
import chefImg from "../images/chef.jpg"

const Chef = () =>{
    return(
        <section id="ourChef">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-5 col-12 offset-lg-1 py-5">
              <img src={chefImg} className="img-fluid" />
            </div>
            <div className="col-lg-5  col-12 offset-lg-1 float-right">
              <h6>The word from</h6>
              <h1>Our Chef</h1>
              <p>
                A peep at some distant orb has power to raise and purify our
                thoughts like a strain of sacred music, or a noble picture, or a
                passage from the grander poets. It always does one good.
              </p>
              <p>Gordon Ramsey</p>
              <small>Head Chef</small>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Chef