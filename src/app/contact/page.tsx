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
                <a className="text-white" href="">
                  Home
                </a>
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
                    123 Street, New York, USA
                  </h4>
                </div>
                <iframe
                  style={{ width: "100%", height: 470 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
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
                  <form name="sentMessage" id="contactForm" noValidate>
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        id="name"
                        placeholder="Your Name"
                        required
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <input
                        type="email"
                        className="form-control border-0 p-4"
                        id="email"
                        placeholder="Your Email"
                        required
                        data-validation-required-message="Please enter your email"
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        id="subject"
                        placeholder="Subject"
                        required
                        data-validation-required-message="Please enter a subject"
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <textarea
                        className="form-control border-0 py-3 px-4"
                        rows={3}
                        id="message"
                        placeholder="Message"
                        required
                        data-validation-required-message="Please enter your message"
                        defaultValue={""}
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div>
                      <button
                        className="btn btn-primary py-3 px-4"
                        type="submit"
                        id="sendMessageButton"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
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
