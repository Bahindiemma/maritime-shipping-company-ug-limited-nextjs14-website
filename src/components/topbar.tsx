import React from "react";

export default function TopBar() {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row py-2 px-lg-5">
          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center text-white">
              <small>
                <i className="fa fa-phone-alt mr-2" />
                0393254631 | +256-787326098 | 0200906877
              </small>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center text-white">
            <small>
                <i className="fa fa-envelope mr-2" />
                info@maritimeshipping-uganda.com
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
