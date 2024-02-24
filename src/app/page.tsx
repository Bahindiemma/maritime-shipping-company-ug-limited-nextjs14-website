import Image from "next/image";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <>
      {/* Header Start */}
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-primary mb-4">Safe &amp; Faster</h1>
          <h1 className="text-white display-3 mb-5">Logistics Services</h1>
        </div>
      </div>
      {/* Header End */}
      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img
                className="img-fluid w-100"
                src="/assets/img/about.jpg"
                alt=""
              />
              <div className="bg-primary text-dark text-center p-4">
                <h3 className="m-0">25+ Years Experience</h3>
              </div>
            </div>
            <div className="col-lg-7">
              <h6 className="text-primary text-uppercase font-weight-bold">
                About Us
              </h6>
              <h1 className="mb-4">
                Trusted &amp; Faster Logistic Service Provider
              </h1>
              <p className="mb-4">
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr
                stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat
                sed diam duo
              </p>
              <div className="d-flex align-items-center pt-2">
                <button
                  type="button"
                  className="btn-play"
                  data-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-target="#videoModal"
                >
                  <span />
                </button>
                <h5 className="font-weight-bold m-0 ml-4">Play Video</h5>
              </div>
            </div>
          </div>
        </div>
        {/* Video Modal */}
        <div
          className="modal fade"
          id="videoModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                {/* 16:9 aspect ratio */}
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src=""
                    id="video"
                    // allowscriptaccess="always"
                    allow="autoplay"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
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
                dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr
                stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat
                sed diam duo
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
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control border-0 p-4"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select border-0 px-4"
                      style={{ height: 47 }}
                    >
                      <option selected={true}>Select A Service</option>
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
      {/* Services Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Our Services
            </h6>
            <h1 className="mb-4">Best Logistic Services</h1>
          </div>
          <div className="row pb-3">
            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className="fa fa-2x fa-plane text-dark pr-3" />
                <h6 className="text-white font-weight-medium m-0">
                  Air Freight
                </h6>
              </div>
              <p>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                diam sea est diam
              </p>
              <a className="border-bottom text-decoration-none" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className="fa fa-2x fa-ship text-dark pr-3" />
                <h6 className="text-white font-weight-medium m-0">
                  Ocean Freight
                </h6>
              </div>
              <p>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                diam sea est diam
              </p>
              <a className="border-bottom text-decoration-none" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className="fa fa-2x fa-truck text-dark pr-3" />
                <h6 className="text-white font-weight-medium m-0">
                  Land Transport
                </h6>
              </div>
              <p>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                diam sea est diam
              </p>
              <a className="border-bottom text-decoration-none" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className="fa fa-2x fa-store text-dark pr-3" />
                <h6 className="text-white font-weight-medium m-0">
                  Cargo Storage
                </h6>
              </div>
              <p>
                Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                diam sea est diam
              </p>
              <a className="border-bottom text-decoration-none" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}
      {/* Features Start */}
      <div className="container-fluid bg-secondary my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img
                className="img-fluid w-100"
                src="/assets/img/feature.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-7 py-5 py-lg-0">
              <h6 className="text-primary text-uppercase font-weight-bold">
                Why Choose Us
              </h6>
              <h1 className="mb-4">
                Faster, Safe and Trusted Logistics Services
              </h1>
              <p className="mb-4">
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr
                stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat
                sed diam duo
              </p>
              <ul className="list-inline">
                <li>
                  <h6>
                    <i className="far fa-dot-circle text-primary mr-3" />
                    Best In Industry
                  </h6>
                </li>
                <li>
                  <h6>
                    <i className="far fa-dot-circle text-primary mr-3" />
                    Emergency Services
                  </h6>
                </li>
                <li>
                  <h6>
                    <i className="far fa-dot-circle text-primary mr-3" />
                    24/7 Customer Support
                  </h6>
                </li>
              </ul>
              <a href="" className="btn btn-primary mt-3 py-2 px-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}
      {/* Team Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Delivery Team
            </h6>
            <h1 className="mb-4">Meet Our Delivery Team</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team card position-relative overflow-hidden border-0 mb-5">
                <img
                  className="card-img-top"
                  src="/assets/img/team-1.jpg"
                  alt=""
                />
                <div className="card-body text-center p-0">
                  <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 className="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a className="btn btn-outline-dark btn-social" href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team card position-relative overflow-hidden border-0 mb-5">
                <img
                  className="card-img-top"
                  src="/assets/img/team-2.jpg"
                  alt=""
                />
                <div className="card-body text-center p-0">
                  <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 className="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a className="btn btn-outline-dark btn-social" href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team card position-relative overflow-hidden border-0 mb-5">
                <img
                  className="card-img-top"
                  src="/assets/img/team-3.jpg"
                  alt=""
                />
                <div className="card-body text-center p-0">
                  <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 className="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a className="btn btn-outline-dark btn-social" href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team card position-relative overflow-hidden border-0 mb-5">
                <img
                  className="card-img-top"
                  src="/assets/img/team-4.jpg"
                  alt=""
                />
                <div className="card-body text-center p-0">
                  <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 className="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a className="btn btn-outline-dark btn-social" href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}

      <Testimonial />

      {/* Blog Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Our Blog
            </h6>
            <h1 className="mb-4">Latest From Blog</h1>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5">
              <div className="position-relative">
                <img
                  className="img-fluid w-100"
                  src="/assets/img/blog-1.jpg"
                  alt=""
                />
                <div
                  className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                  style={{ width: 60, height: 60, bottom: "-30px", right: 30 }}
                >
                  <h4 className="font-weight-bold mb-n1">01</h4>
                  <small className="text-white text-uppercase">Jan</small>
                </div>
              </div>
              <div className="bg-secondary" style={{ padding: 30 }}>
                <div className="d-flex mb-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      style={{ width: 40, height: 40 }}
                      src="/assets/img/user.jpg"
                      alt=""
                    />
                    <a className="text-muted ml-2" href="">
                      John Doe
                    </a>
                  </div>
                  <div className="d-flex align-items-center ml-4">
                    <i className="far fa-bookmark text-primary" />
                    <a className="text-muted ml-2" href="">
                      Web Design
                    </a>
                  </div>
                </div>
                <h4 className="font-weight-bold mb-3">
                  Kasd tempor diam sea justo dolor
                </h4>
                <p>
                  Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor
                  dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem
                  lorem sea sed diam est lorem magna
                </p>
                <a
                  className="border-bottom border-primary text-uppercase text-decoration-none"
                  href=""
                >
                  Read More <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="position-relative">
                <img
                  className="img-fluid w-100"
                  src="/assets/img/blog-2.jpg"
                  alt=""
                />
                <div
                  className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                  style={{ width: 60, height: 60, bottom: "-30px", right: 30 }}
                >
                  <h4 className="font-weight-bold mb-n1">01</h4>
                  <small className="text-white text-uppercase">Jan</small>
                </div>
              </div>
              <div className="bg-secondary" style={{ padding: 30 }}>
                <div className="d-flex mb-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      style={{ width: 40, height: 40 }}
                      src="/assets/img/user.jpg"
                      alt=""
                    />
                    <a className="text-muted ml-2" href="">
                      John Doe
                    </a>
                  </div>
                  <div className="d-flex align-items-center ml-4">
                    <i className="far fa-bookmark text-primary" />
                    <a className="text-muted ml-2" href="">
                      Web Design
                    </a>
                  </div>
                </div>
                <h4 className="font-weight-bold mb-3">
                  Kasd tempor diam sea justo dolor
                </h4>
                <p>
                  Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor
                  dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem
                  lorem sea sed diam est lorem magna
                </p>
                <a
                  className="border-bottom border-primary text-uppercase text-decoration-none"
                  href=""
                >
                  Read More <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
    </>
  );
}
