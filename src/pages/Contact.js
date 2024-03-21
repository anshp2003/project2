import React from 'react'

export default function Contact(props) {
  return (
    <>
    
    <div className="bgimg10" id="contact">
        <div className="gra2 col-md-12">
          <div className="h150"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <br />
                <br />
                <div className="bgimg11">
                  <p className="cw fs3">
                    <b>{props.g}</b>
                  </p>
                </div>
                <hr
                  className="col-md-1 text-light bg-light rounded-5"
                  style={{ height: "2px" }}
                />
                <p className="cw col-md-10">
                  Nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis
                  sed odio sit amet nibh vulputate cursus.
                </p>
                <i class="fas fa-phone cw fs1-5 mt-4"></i>
                <span className="cw fs1-3 ms-4">929-242-6868</span>
                <br />
                <i class="fas fa-envelope cw fs1-5"></i>
                <span className="cw fs1-3 ms-4">contact@enroll.com</span>
                <br />
                <br />
                <br />
                <span className="cw fs3 mt-5">
                  <b>Follow</b>
                </span>
                <span className="cdt fs3 ms-3">
                  <b>Me</b>
                </span>
                <br />
                <br />
                <button className="logo col-md-1">
                  <i class="fab fa-facebook-f fs1-3"></i>
                </button>
                <button className="logo col-md-1 ms-3">
                  <i class="fab fa-twitter fs1-3"></i>
                </button>
                <button className="logo col-md-1 ms-3">
                  <i class="fab fa-google-plus-g fs1-3"></i>
                </button>
                <button className="logo col-md-1 ms-3">
                  <i class="fab fa-instagram fs1-3"></i>
                </button>
              </div>
              <div className="col-md-6">
                <span className="cw fs3">
                  <b>Have</b>
                </span>
                <span className="cdt fs3 ms-3">
                  <b>Questions?</b>
                </span>
                <br />
                <br />
                <form action="">
                  <input
                    type="text"
                    placeholder="  Your Name"
                    className="col-md-11 h50 on"
                  />
                  <input
                    type="email"
                    placeholder="  Your Email"
                    className="col-md-11 h50 on mt-4"
                  />
                  <textarea
                    name=""
                    id=""
                    cols="65"
                    rows="5"
                    placeholder="  Your Message"
                    className="col-md-11 mt-4"
                  ></textarea>
                  <button className="bsm mt-4 col-md-4">SEND MESSAGE</button>
                </form>
              </div>
            </div>
          </div>
          <div className="h180"></div>
        </div>
      </div>
      
      <div className="container-fluid p-md-5 bgdb">
        <div className="row">
          <div className="col-md-6">
            <p className="cw fs1-1">Copyright © 2024 Fitness Trainer</p>
          </div>
          <div className="col-md-6">
            <p className="cw fs1-1 text-end">Powered by Fitness Trainer</p>
          </div>
        </div>
      </div>

      
      
      </>
  )
}
