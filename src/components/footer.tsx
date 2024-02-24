import React from "react";

export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-7 col-md-6">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h3 className="text-primary mb-4">Get In Touch</h3>
                <p>
                  <i className="fa fa-map-marker-alt mr-2" />
                  Room 7 Ambassador House, Entrance D, Kampala Road
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2" />
                  +256-773165989
                </p>
                <p>
                  <i className="fa fa-envelope mr-2" />
                  info@example.com
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <a className="btn btn-outline-light btn-social mr-2" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-outline-light btn-social mr-2" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-light btn-social mr-2" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h3 className="text-primary mb-4">Quick Links</h3>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Home
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    About Us
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Our Services
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Pricing Plan
                  </a>
                  <a className="text-white" href="#">
                    <i className="fa fa-angle-right mr-2" />
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Newsletter</h3>
            <p>
              Stay ahead of the curve with our Maritime Shipping Company Uganda
              Limited newsletter! Get exclusive insights into the latest
              industry trends, valuable shipping tips, updates on our services,
              and special offers delivered straight to your inbox. Don't miss
              out – subscribe now and elevate your shipping experience!
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: 30 }}
                  placeholder="Your Email Address"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: "#3E3E4E !important" }}
      >
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              © 2024. All Rights Reserved. Designed by
              <a href="mailto:ebahindi@gmail.com" className="mx-2">
                EMMANUEL BAHINDI | +256-773165989
              </a>
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <ul className="nav d-inline-flex">
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Privacy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Terms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer End */}
      <a href="#" className="btn btn-lg btn-primary back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </>
  );
}
