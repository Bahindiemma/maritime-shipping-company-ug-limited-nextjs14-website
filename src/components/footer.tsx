import Link from "next/link";
import React from "react";
import Subscribe from "./subscription-form";

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
                  Room 7 Ambassador House, Entrance B, Kampala Road
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2" />
                  0393254631 | +256-787326098 | 0200906877
                </p>
                <p>
                  <i className="fa fa-envelope mr-2" />
                  info@maritimeshipping-uganda.com
                </p>
              </div>
              <div className="col-md-6 mb-5">
                <h3 className="text-primary mb-4">Quick Links</h3>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-white mb-2" href="/">
                    <i className="fa fa-angle-right mr-2" />
                    Home
                  </Link>
                  <Link className="text-white mb-2" href="/about">
                    <i className="fa fa-angle-right mr-2" />
                    About Us
                  </Link>
                  <Link className="text-white mb-2" href="/services">
                    <i className="fa fa-angle-right mr-2" />
                    Our Services
                  </Link>
                  <Link className="text-white" href="/contact">
                    <i className="fa fa-angle-right mr-2" />
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Newsletter</h3>
            <p>
              Get shipping insights & elevate your experience! Subscribe to
              Maritime Shipping Company Uganda's newsletter.
            </p>
            <div className="w-100">
              <Subscribe />
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
              <Link href="mailto:ebahindi@gmail.com" className="mx-2">
                EMMANUEL BAHINDI | +256-773165989
              </Link>
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <ul className="nav d-inline-flex">
              <li className="nav-item">
                <Link className="nav-link text-white py-0" href="#">
                  Privacy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white py-0" href="#">
                  Terms
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="mailto:info@maritimeshipping-uganda.com"
                  className="nav-link text-white py-0"
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer End */}
      <Link href="#" className="btn btn-lg btn-primary back-to-top">
        <i className="fa fa-angle-double-up" />
      </Link>
    </>
  );
}
