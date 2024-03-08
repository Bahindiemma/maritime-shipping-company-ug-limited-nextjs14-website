import Image from "next/image";
import Testimonial from "@/components/testimonial";
import ServiceComponent from "@/components/serviceComponent";
import Blog from "@/components/blog";
import Logistics from "@/components/logistics";

export default function Home() {
  const services = [
    {
      label: "Packing and Packaging",
      description:
        "  The company can pack and repackage loose cargo for both air and sea freight shipments, including hazardous cargo. They have specialized staff who can handle all types of packaging.",
    },
    {
      label: "Warehousing",
      description:
        "The company has modern warehousing facilities that are equipped to receive, handle, and consolidate air and sea freight. They also offer general storage, inspections, packing, unpacking, and repacking services.",
    },
    {
      label: " Transport",
      description:
        " The company has a fleet of 150-400 trucks and also uses a network of subcontractors to transport goods. They can also handle transport by rail.",
    },
    {
      label: "Air Freight",
      description:
        "At Maritime Shipping Company Limited, full facilities can be readily arranged and made available for world wide destinations for freight via scheduled and chartered flights for all parcels, ranging from small individual units to complete consolidations, Air freight consolidations at Maritime Shipping Company Limited to destinations are handled by specialized team of staff who are fully conversant and equipped to receive, handle, clear through customs and deliver to final destinations.",
    },
    {
      label: "Sea Freight",
      description:
        "Maritime Shipping Company Limited is proud to be associated with some of the world's leading shipping companies. Through these shipping associates, Maritime Shipping Company Limited is able to ship and forward cargos originating from the far East, Europe, USA and offices at Mombasa and Dar-es-salaam Port.",
    },
    {
      label: "Insurance",
      description:
        "It is a prime duty for Maritime Shipping Company Limited to advise its clients of the need for insurance provisions for their imports/exports against any uncertainties.",
    },
  ];
  return (
    <>
      {/* Header Start */}
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-primary mb-4">People-Centric Shipping</h1>
          <h1 className="text-white display-3 mb-5">
            Your Needs, Our Priority
          </h1>
        </div>
      </div>
      {/* Our Services  */}
      {/* <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-center pb-4 pb-lg-0">
              <ol className="list-group list-group-light list-group-numbered">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
              </ol>
            </div>
            <div className="col-lg-4 text-center pb-4 pb-lg-0">
              <ol className="list-group list-group-light list-group-numbered">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
              </ol>
            </div>
            <div className="col-lg-4 text-center pb-4 pb-lg-0">
              <ol className="list-group list-group-light list-group-numbered">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Customs clearance</div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div> */}
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
      {/* About End */}
      {/*  Quote Request Start */}
      <div className="container-fluid bg-secondary my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 py-5 py-lg-0">
              {/* <h6 className="text-primary text-uppercase font-weight-bold">
                Get A Quote
              </h6> */}
              <h1 className="my-4">Service Fees</h1>
              <p className="mb-4">
                Fees levied for services rendered at Maritime Shipping Company
                Limited are computed in accordance to the agreed rules and
                conditions laid down by the National Association governing
                Clearing and Forwarding Agents of Uganda.
              </p>
              <h1 className="mb-4">Clients</h1>
              <p className="mb-4">
                Among others, Maritime Shipping Company Limited currently
                renders its services to the following organizations: Ministry of
                Works, Transport and Communications, Kawanda Agricultural
                Research Institute, Madhvani Group of Companies, Startimes, etc.
              </p>
              <div className="row">
                <div className="col-sm-4">
                  <h1 className="text-primary mb-2" data-toggle="counter-up">
                    7
                  </h1>
                  <h6 className="font-weight-bold mb-4">SKilled Experts</h6>
                </div>
                <div className="col-sm-4">
                  <h1 className="text-primary mb-2" data-toggle="counter-up">
                    12
                  </h1>
                  <h6 className="font-weight-bold mb-4">Happy Clients</h6>
                </div>
                <div className="col-sm-4">
                  <h1 className="text-primary mb-2" data-toggle="counter-up">
                    1000+
                  </h1>
                  <h6 className="font-weight-bold mb-4">Complete Projects</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-primary py-5 px-4 px-sm-5">
                <img
                  className="img-fluid w-100"
                  src="/assets/img/feature.jpg"
                  alt=""
                />
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
        </div>
      </div>
      <Logistics />
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
      {/* Team  */}

      <Testimonial />

      <Blog />
    </>
  );
}
