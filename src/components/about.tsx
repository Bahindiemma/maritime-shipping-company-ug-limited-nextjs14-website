import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <Image
                width="500"
                height="500"
                className="img-fluid w-100"
                src="/assets/img/about.jpg"
                alt="About Section Image"
              />
              <div className="bg-primary text-dark text-center p-4">
                <h3 className="m-0">20+ Years Experience</h3>
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
                Maritime Shipping Company Limited is a private limited company
                incorporated in September 2003 in the Republic of Uganda. We
                have a network of associates and agents covering Europe, Asia
                and Africa.
              </p>
              <p className="mb-4">
                Today, Maritime Shipping combines a highly motivated,
                experienced team with state-of-art infrastructure, providing
                flexible, cost effective options in sea freight, air freight,
                overland transport multimodal transport services, warehousing
                and distribution facilities.
              </p>
              {/* <div className="d-flex align-items-center pt-2">
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
              </div> */}
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {/* <div
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
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src=""
                    id="video"
                    allow="autoplay"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
