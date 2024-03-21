import React from 'react'

export default function Home(props) {
  return (
    <>
    
    <div className="bgimg1" id="home">
        <div className="gra1 col-md-12">
          <nav className="navbar navbar-expand-sm navbar-dark px-md-5 px-3 pt-4">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="img/logo-01-regular-free-img-150x40.png" />
              </a>
              <button
                className="navbar-toggler bgg bn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      ABOUT ME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#training">
                      TRAINING
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#rates">
                      RATES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#clients">
                      CLIENTS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonials">
                      TESTIMONIALS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#gallery">
                      GALLERY
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="h100"></div>
          <div className="container">
            <span className="cw fs2">
              <b>Maverick &nbsp;</b>
            </span>
            <span className="cdt fs2">
              <b>Kaan</b>
            </span>
            <p className="fs13 cw">
              <b>{props.a}</b>
            </p>
            <div className="bgimg2">
              <p className="fs13 cw">{props.b}</p>
            </div>
            <hr
              className="col-md-1 text-light bg-light rounded-5"
              style={{ height: "2px" }}
            />
            <p className="cw fs3 mt-md-5">
              <b>Let's Set & Reach Your Fitness Goals</b>
            </p>
            <button className="bcm mt-md-4">CONTACT ME</button>
            <div className="h100"></div>
          </div>
        </div>
      </div>

    </>
  )
}
