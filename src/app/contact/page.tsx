import ContactForm from "@/components/contact-form";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <>
        {/* Header Start */}
        <div className="jumbotron jumbotron-fluid mb-5">
          <div className="container text-center py-5">
            <h1 className="text-white display-3">Contact</h1>
            <div className="d-inline-flex align-items-center text-white">
              <p className="m-0">
                <Link className="text-white" href="">
                  Home
                </Link>
              </p>
              <i className="fa fa-circle px-3" />
              <p className="m-0">Contact</p>
            </div>
          </div>
        </div>
        {/* Header End */}
        {/* Contact Start */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 pb-4 pb-lg-0">
                <div className="bg-primary text-dark text-center p-4">
                  <h4 className="m-0">
                    <i className="fa fa-map-marker-alt text-white mr-2" />
                    Room 7 Ambassador House, Entrance D, Kampala Road
                  </h4>
                </div>
                <iframe
                  style={{ width: "100%", height: 470 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7448903978525!2d32.57992227502834!3d0.3476148639772739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dba5555555555%3A0x57ecf49f65e99e37!2sMARITIME%20SHIPPING%20COMPANY%20LTD!5e0!3m2!1sen!2sug!4v1710001941312!5m2!1sen!2sug"
                  frameBorder={0}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
              <div className="col-lg-7">
                <h6 className="text-primary text-uppercase font-weight-bold">
                  Contact Us
                </h6>
                <h1 className="mb-4">Contact For Any Queries</h1>
                <div
                  className="contact-form bg-secondary"
                  style={{ padding: 30 }}
                >
                  <div id="success" />
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
      </>
    </>
  );
}
