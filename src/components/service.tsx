import Image from "next/image";
import React from "react";

const Service = ({
  label,
  description,
  url,
  imageUrl,
}: {
  label: string;
  description: string;
  url?: string;
  imageUrl?: string;
}) => {
  return (
    <>
      <div className="col-lg-4 mb-3 d-flex align-items-stretch">
        <div className="card">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Card Image"
              width={500}
              height={500}
              style={{ width: "100%", height: "250px" }}
              className="card-img-top img-fluid object-fit-cover"
            />
          )}
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{label}</h5>
            <div
              style={{
                WebkitLineClamp: "3",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
              }}
              className="card-text mb-4"
            >
              {description}
            </div>
            {url && (
              <a
                href={url}
                className="btn btn-primary mt-auto align-self-start"
              >
                Read More
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
