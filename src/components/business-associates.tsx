import React from "react";
import { client, urlFor } from "@/lib/sanity";
import { AssociateData } from "@/lib/interface";

async function getAssociates() {
  const query = `
    *[_type == "businessAssociate"] | order(_createdAt asc) {
      "currentSlug": slug.current,
      "companyName": companyName,
      "contactPerson": contactPerson,
      "title": title,
      "address": address,
      "phoneNumber": phoneNumber,
      "faxNumber": faxNumber,
      "emailAddress": emailAddress,
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function BusinessAssociates() {
  const data: AssociateData[] = await getAssociates();
  // console.log(data);

  return (
    <>
      {/* Testimonial Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center pb-2">
            {/* <h6 className="text-primary text-uppercase font-weight-bold">
              Associates
            </h6> */}
            <h1 className="mb-4">Our Business Associates</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            {data.map((data: any, i: number) => (
              <div key={i} className="position-relative bg-secondary p-4">
                <i
                  className="fa fa-3x fa-quote-right text-primary position-absolute"
                  style={{ top: "-6px", right: 0 }}
                />
                <div className="d-flex align-items-center mb-3">
                  {/* <img
                  className="img-fluid rounded-circle"
                  src="/assets/img/testimonial-1.jpg"
                  style={{ width: 60, height: 60 }}
                  alt=""
                /> */}
                  <div className="ml-3">
                    <h6 className="font-weight-semi-bold m-0">
                      {data.title}
                    </h6>
                    <small className="text-primary">Location: {data.address}</small>
                  </div>
                </div>
                {/* <p className="m-0">
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                clita lorem. Dolor ipsum sanct clita
              </p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonial End */}{" "}
    </>
  );
}
