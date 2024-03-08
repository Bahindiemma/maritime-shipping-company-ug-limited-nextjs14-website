import Logistics from "@/components/logistics";
import React from "react";

export default function Page() {
  return (
    <>
      <>
        {/* Header Start */}
        <div className="jumbotron jumbotron-fluid mb-5">
          <div className="container text-center py-5">
            <h1 className="text-white display-3">Service</h1>
            <div className="d-inline-flex align-items-center text-white">
              <p className="m-0">
                <a className="text-white" href="/">
                  Home
                </a>
              </p>
              <i className="fa fa-circle px-3" />
              <p className="m-0">Service</p>
            </div>
          </div>
        </div>
        {/* Header End */}
        {/* Services Start */}
        <Logistics />
        {/* Services End */}
        {/*  Quote Request Start */}
        <div className="container-fluid bg-secondary my-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 py-5 py-lg-0">
                <h6 className="text-primary text-uppercase font-weight-bold">
                  Get A Quote
                </h6>
                <h1 className="mb-4">Request A Free Quote</h1>
                <p className="mb-4">
                  Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                  dolore sed et. Sit rebum labore sit sit ut vero no sit. Et
                  elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos
                  et erat sed diam duo
                </p>
                <div className="row">
                  <div className="col-sm-4">
                    <h1 className="text-primary mb-2" data-toggle="counter-up">
                      225
                    </h1>
                    <h6 className="font-weight-bold mb-4">SKilled Experts</h6>
                  </div>
                  <div className="col-sm-4">
                    <h1 className="text-primary mb-2" data-toggle="counter-up">
                      1050
                    </h1>
                    <h6 className="font-weight-bold mb-4">Happy Clients</h6>
                  </div>
                  <div className="col-sm-4">
                    <h1 className="text-primary mb-2" data-toggle="counter-up">
                      2500
                    </h1>
                    <h6 className="font-weight-bold mb-4">Complete Projects</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="bg-primary py-5 px-4 px-sm-5">
                  <form className="py-5">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control border-0 p-4"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="custom-select border-0 px-4"
                        style={{ height: 47 }}
                      >
                        <option selected>Select A Service</option>
                        <option value={1}>Service 1</option>
                        <option value={2}>Service 1</option>
                        <option value={3}>Service 1</option>
                      </select>
                    </div>
                    <div>
                      <button
                        className="btn btn-dark btn-block border-0 py-3"
                        type="submit"
                      >
                        Get A Quote
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Quote Request Start */}
        {/* Testimonial Start */}
        {/* <div className="container-fluid py-5">
          <div className="container">
            <div className="text-center pb-2">
              <h6 className="text-primary text-uppercase font-weight-bold">
                Testimonial
              </h6>
              <h1 className="mb-4">Our Clients Say</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
              <div className="position-relative bg-secondary p-4">
                <i
                  className="fa fa-3x fa-quote-right text-primary position-absolute"
                  style={{ top: "-6px", right: 0 }}
                />
                <div className="d-flex align-items-center mb-3">
                  <img
                    className="img-fluid rounded-circle"
                    src="/assets/img/testimonial-1.jpg"
                    style={{ width: 60, height: 60 }}
                    alt=""
                  />
                  <div className="ml-3">
                    <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                    <small>- Profession</small>
                  </div>
                </div>
                <p className="m-0">
                  Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                  clita lorem. Dolor ipsum sanct clita
                </p>
              </div>
              <div className="position-relative bg-secondary p-4">
                <i
                  className="fa fa-3x fa-quote-right text-primary position-absolute"
                  style={{ top: "-6px", right: 0 }}
                />
                <div className="d-flex align-items-center mb-3">
                  <img
                    className="img-fluid rounded-circle"
                    src="/assets/img/testimonial-2.jpg"
                    style={{ width: 60, height: 60 }}
                    alt=""
                  />
                  <div className="ml-3">
                    <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                    <small>- Profession</small>
                  </div>
                </div>
                <p className="m-0">
                  Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                  clita lorem. Dolor ipsum sanct clita
                </p>
              </div>
              <div className="position-relative bg-secondary p-4">
                <i
                  className="fa fa-3x fa-quote-right text-primary position-absolute"
                  style={{ top: "-6px", right: 0 }}
                />
                <div className="d-flex align-items-center mb-3">
                  <img
                    className="img-fluid rounded-circle"
                    src="/assets/img/testimonial-3.jpg"
                    style={{ width: 60, height: 60 }}
                    alt=""
                  />
                  <div className="ml-3">
                    <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                    <small>- Profession</small>
                  </div>
                </div>
                <p className="m-0">
                  Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                  clita lorem. Dolor ipsum sanct clita
                </p>
              </div>
              <div className="position-relative bg-secondary p-4">
                <i
                  className="fa fa-3x fa-quote-right text-primary position-absolute"
                  style={{ top: "-6px", right: 0 }}
                />
                <div className="d-flex align-items-center mb-3">
                  <img
                    className="img-fluid rounded-circle"
                    src="/assets/img/testimonial-4.jpg"
                    style={{ width: 60, height: 60 }}
                    alt=""
                  />
                  <div className="ml-3">
                    <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                    <small>- Profession</small>
                  </div>
                </div>
                <p className="m-0">
                  Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                  clita lorem. Dolor ipsum sanct clita
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* Testimonial End */}
      </>
    </>
  );
}
