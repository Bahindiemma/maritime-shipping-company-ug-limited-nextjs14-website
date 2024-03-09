import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <>
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
                <Image width="500" height="500"
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
                    <Link
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-social" href="#">
                      <i className="fab fa-instagram" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team card position-relative overflow-hidden border-0 mb-5">
                <Image width="500" height="500"
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
                    <Link
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-social" href="#">
                      <i className="fab fa-instagram" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team card position-relative overflow-hidden border-0 mb-5">
                <Image width="500" height="500"
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
                    <Link
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-social" href="#">
                      <i className="fab fa-instagram" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team card position-relative overflow-hidden border-0 mb-5">
                <Image width="500" height="500"
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
                    <Link
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link className="btn btn-outline-dark btn-social" href="#">
                      <i className="fab fa-instagram" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
}
