import React from "react";
import { client, urlFor } from "@/lib/sanity";
import { LogisticData } from "@/lib/interface";
import ServiceComponent from "./serviceComponent";

async function getData() {
  const query = `
    *[ _type == 'logistic' ] | order(_createdAt desc) {
      "currentSlug": slug.current,
      "title": title,
      "author": author->{name},
      "mainImage": mainImage,
      "categories": categories[],
      "publishedAt": publishedAt,
      "description": description
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Logistics() {
  const data: LogisticData[] = await getData();
  // console.log(data);
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row pb-3">
            {data.map((logistic, i) => (
              <ServiceComponent
                key={i}
                url={`services/${logistic.currentSlug}`}
                imageUrl={urlFor(logistic.mainImage).url()}
                label={logistic.title}
                description={logistic.description.map(
                  (block: any, i: number) => (
                    <p key={i}>
                      {block.children.map((child: any, j: number) => (
                        <span key={j}>{child.text}</span>
                      ))}
                    </p>
                  )
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
