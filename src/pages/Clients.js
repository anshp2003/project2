import React from 'react'

export default function Clients(props) {
  return (
    <>
    
    <div className="bgimg7" id="clients">
        <div className="bgb col-md-12">
          <div className="h100"></div>
          <center>
            <p className="cw">
              <b>.04</b>
            </p>
            <br />
            <br />
            <div className="bgimg6">
              <p className="cw fs4">
                <b>{props.d}</b>
              </p>
            </div>
            <hr
              className="col-md-1 text-light bg-light rounded-5"
              style={{ height: "2px" }}
            />
            <p className="col-md-5 cw fs1-3">
              Bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
              id elit. Duis sed odio sit amet nibh vulputate cursus.
            </p>
            <div className="h100"></div>
          </center>
          <div className="container">
            <div className="row">
              <div className="col-md-3 p-0">
                <img src="img/clients-01-free-img.jpg" className="col-12"/>
                <p className="cw fs1-3 mt-2 ms-3">
                  <b>Crystal May</b>
                </p>
                <hr
                  className="col-md-2 text-light bg-light rounded-5 ms-3"
                  style={{ height: "2px" }}
                />
                <p className="clg ms-3">Actress</p>
              </div>
              <div className="col-md-3 p-0">
                <img src="img/clients-02-free-img.jpg" className="col-12"/>
                <p className="cw fs1-3 mt-2 ms-3">
                  <b>Terry Oliver</b>
                </p>
                <hr
                  className="col-md-2 text-light bg-light rounded-5 ms-3"
                  style={{ height: "2px" }}
                />
                <p className="clg ms-3">Athlete</p>
              </div>
              <div className="col-md-3 p-0">
                <img src="img/clients-03-free-img.jpg" className="col-12"/>
                <p className="cw fs1-3 mt-2 ms-3">
                  <b>Janice Clark</b>
                </p>
                <hr
                  className="col-md-2 text-light bg-light rounded-5 ms-3"
                  style={{ height: "2px" }}
                />
                <p className="clg ms-3">Model</p>
              </div>
              <div className="col-md-3 p-0">
                <img src="img/clients-04-free-img.jpg" className="col-12"/>
                <p className="cw fs1-3 mt-2 ms-3">
                  <b>Roy Freeman</b>
                </p>
                <hr
                  className="col-md-2 text-light bg-light rounded-5 ms-3"
                  style={{ height: "2px" }}
                />
                <p className="clg ms-3">Developer</p>
              </div>
            </div>
          </div>
          <div className="h100"></div>
        </div>
      </div>
    </>
  )
}
