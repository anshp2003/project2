import React from 'react'

export default function Gallery(props) {
  return (
    <>
    
    <div className="gra1 col-md-12" id="gallery">
        <div className="h180"></div>
        <div className="container">
          <p className="cw">
            <b>.06</b>
          </p>
          <br />
          <br />
          <div className="bgimg9">
            <p className="cw fs4">
              <b>{props.f}</b>
            </p>
          </div>
          <hr
            className="col-md-1 text-light bg-light rounded-5"
            style={{ height: "2px" }}
          />
          <p className="col-md-6 cw">
            Bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
            elit. Duis sed odio sit amet nibh vulputate cursus.
          </p>
          <div className="h150"></div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 px-0">
              <img
                src="img/gallery-02-free-img.jpg"
                className="col-md-12 col-12"
              />
            </div>
            <div className="col-md-2 px-0">
              <img
                src="img/gallery-03-free-img.jpg"
                className="col-md-12 col-12"
              />
            </div>
            <div className="col-md-2 px-0">
              <img
                src="img/gallery-04-free-img.jpg"
                className="col-md-12 col-12"
              />
            </div>
            <div className="col-md-2 px-0">
              <img
                src="img/gallery-05-free-img.jpg"
                className="col-md-12 col-12"
              />
            </div>
            <div className="col-md-2 px-0">
              <img
                src="img/gallery-06-free-img.jpg"
                className="col-md-12 col-12"
              />
            </div>
            <div className="col-md-2 px-0">
              <img
                src="img/gallery-07-free-img.jpg"
                className="col-md-12 col-12"
              />
            </div>
          </div>
        </div>
      </div></>
  )
}
