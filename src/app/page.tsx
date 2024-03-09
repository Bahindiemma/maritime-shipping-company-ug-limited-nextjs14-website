import Blog from "@/components/blog";
import Logistics from "@/components/logistics";
import About from "@/components/about";
import WhyChooseUs from "@/components/why-choose-us";
import BusinessAssociates from "@/components/business-associates";

export default function Home() {
  return (
    <>
      {/* Header Start */}
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-primary mb-4">Maritime Shipping Company</h1>
          <h1 className="text-white display-3 mb-5">
            Building Trust, Delivering Results
          </h1>
        </div>
      </div>
      {/* About Start */}
      <About />
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
      <WhyChooseUs />
      {/* Features End */}
      {/* Team  */}
      <BusinessAssociates />
      <Blog />
    </>
  );
}
