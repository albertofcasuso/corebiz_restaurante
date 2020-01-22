import React from 'react'
import gal_1 from "../images/gal_1.jpg"

const Gallery = () => {
    return (
        <section id="gallery">
        <div className="container my-5">
          <div className="row">
            <div className="col-12 p-lg-5 text-center">
              <h6>Gallery</h6>
              <h1>Our Interior</h1>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-4 mb-4">
              <img src={gal_1} className="img-fluid" />
            </div>
            <div className="col-lg-4 mb-4">
              <img src={gal_1} className="img-fluid" />
            </div>
            <div className="col-lg-4 mb-4">
              <img src={gal_1} className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <img src={gal_1} className="img-fluid" />
            </div>
            <div className="col-lg-4 mb-4">
              <img src={gal_1} className="img-fluid" />
            </div>
            <div className="col-lg-4 mb-4">
              <img src={gal_1} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Gallery
