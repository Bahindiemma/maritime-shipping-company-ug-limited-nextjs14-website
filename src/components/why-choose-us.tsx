import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  return (
    <>
      <div className="container-fluid bg-secondary my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <Image width="500" height="500"
                className="img-fluid w-100"
                src="/assets/img/feature.jpg"
                alt="Contact Us Banner Image"
              />
            </div>
            <div className="col-lg-7 py-5 py-lg-0">
              <h6 className="text-primary text-uppercase font-weight-bold">
                Why Choose Us
              </h6>
              <h1 className="mb-4">Highlight Efficiency and Peace of Mind</h1>
              <p className="mb-4">
                Your Cargo, Our Priority. Maritime Shipping Company ensures
                efficient, cost-effective solutions for all your shipping needs.
                Focus on your business, we'll handle the rest, with peace of
                mind guaranteed.{" "}
              </p>
              <ul className="list-inline">
                <li>
                  <h6>
                    <i className="far fa-dot-circle text-primary mr-3" />
                    Global Reach & Extensive Network.
                  </h6>
                </li>
                <li>
                  <h6>
                    <i className="far fa-dot-circle text-primary mr-3" />
                    Containerized Shipping.
                  </h6>
                </li>
                <li>
                  <h6>
                    <i className="far fa-dot-circle text-primary mr-3" />
                    Customs Clearance Expertise.
                  </h6>
                </li>
                <li>
                  <h6>
                    <i className="far fa-dot-circle text-primary mr-3" />
                    Cargo Tracking & Real-time Visibility.
                  </h6>
                </li>
                <li>
                  <h6>
                    <i className="far fa-dot-circle text-primary mr-3" />
                    24/7 Customer Support.
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
