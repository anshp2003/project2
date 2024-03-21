import React from 'react'

export default function About(props) {
  return (
    <>
    <div className="gra1 col-md-12" id="about">
        <div className="container-fliud p-md-5">
          <div className="h100"></div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <img
                src="img/about-01-free-img.jpg"
                alt=""
                className="col-md-12 col-12"
              />
            </div>
            <div className="col-md-6 p-md-5">
              <p className="cw">
                <b>.01</b>
              </p>
              <br />
              <br />
              <div className="bgimg3">
                <p className="cw fs4">
                  <b>{props.c}</b>
                </p>
              </div>
              <hr
                className="col-md-1 text-light bg-light rounded-5"
                style={{ height: "2px" }}
              />
              <p className="cw fs2 mt-5">
                <b>
                  Lorem quis bibendum auctor, nisi elit consequat ipsum, nec
                  sagittis.
                </b>
              </p>
              <p className="cw fs1">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
              </p>
              <p className="cw fs1 mt-5">
                Bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
                tincidunt auctor.
              </p>
              <p className="cw fs1 mt-5">
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                Morbi accumsan.
              </p>
            </div>
          </div>
          <div className="h50"></div>
        </div>
      </div>
    </>
  )
}
