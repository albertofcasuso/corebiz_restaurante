import React from "react"

const Footer = () => {
  return (
    <footer id="footer">
    
      <div className="container py-5 ">
        <div className="row text-light text-center">
          <div className="col">
            <h1>REST</h1>
          </div>
        </div>
        <div className="row text-light text-center">
          <div className="col">
            <nav className="navbar navbar-expand-sm navbar-dark">
              <div className="container">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item mx-3 active">
                    <a className="nav-link" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item mx-3 active">
                    <a className="nav-link" href="#">
                      Menu
                    </a>
                  </li>
                  <li className="nav-item mx-3 active">
                    <a className="nav-link" href="#">
                      Events
                    </a>
                  </li>
                  <li className="nav-item mx-3 active">
                    <a className="nav-link" href="#">
                      News
                    </a>
                  </li>
                  <li className="nav-item mx-3 active">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="row text-light text-center mt-5">
          <div className="col">
            <nav className="navbar navbar-expand-sm navbar-dark">
              <div className="container">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item mx-3 active">
                    <a href="#" className="nav-link">
                      <i className="fab fa-facebook fa-2x"></i>
                    </a>
                  </li>
                  <li className="nav-item mx-3 active">
                    <a href="#" className="nav-link">
                      <i className="fab fa-twitter fa-2x"></i>
                    </a>
                  </li>
                  <li className="nav-item mx-3 active">
                    <a href="#" className="nav-link">
                      <i className="fab fa-instagram fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="row text-light text-center mt-3">
          <div className="col">
            <p className="text-secondary">2019 Restaurant</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
