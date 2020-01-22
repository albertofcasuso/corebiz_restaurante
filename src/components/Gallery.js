import React from 'react'
import gal_1 from "../images/gal_1.jpg"
import gal_2 from "../images/gallery-2.jpg"
import gal_3 from "../images/gallery-3.jpg"
import gal_4 from "../images/gallery-4.jpg"
import gal_5 from "../images/gallery-5.jpg"
import gal_6 from "../images/gallery-6.jpg"


const Gallery = () => {
    return (
        <section id="gallery">
        <div className="container my-5">
          <div className="row">
            <div className="col-12 p-lg-5 text-center">
              <p className="lead font-weight-light">Gallery</p>
              <h1 className="display-4">Our Interior</h1>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-4 mb-4">
              <img src={gal_1} className="img-fluid" />
            </div>
            <div className="col-lg-4 mb-4">
              <img src={gal_2} className="img-fluid" />
            </div>
            <div className="col-lg-4 mb-4">
              <img src={gal_3} className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <img src={gal_4} className="img-fluid" />
            </div>
            <div className="col-lg-4 mb-4">
              <img src={gal_5} className="img-fluid" />
            </div>
            <div className="col-lg-4 mb-4">
              <img src={gal_6} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Gallery
