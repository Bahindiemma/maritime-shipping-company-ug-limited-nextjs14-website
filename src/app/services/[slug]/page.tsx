import React from "react";
import { client, urlFor } from "@/lib/sanity";
import { LogisticData } from "@/lib/interface";

async function getData(slug: string) {
  const query = `*[_type == 'logistic' && slug.current == '${slug}'] | order(releaseDate desc){
          "currentSlug": slug.current,
          "title": title,
          "author": author->{name},
          "mainImage": mainImage,
          "categories": categories[],
          "publishedAt": publishedAt,
          "description": description
        }[0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data: LogisticData = await getData(params.slug);
  console.log(data);
  return (
    <>
      <div className="flex flex-col min-h-100 justify-center items-center pt-2">
        {/* Blog Start */}
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="position-relative">
                  <img
                    className="img-fluid w-100"
                    src={urlFor(data.mainImage).url()}
                    alt=""
                  />
                </div>
                <div className="bg-secondary" style={{ padding: 30 }}>
                  <h4 className="font-weight-bold mb-3">{data.title}</h4>
                  {data.description.map((block: any, i: number) => (
                    <p key={i}>
                      {block.children.map((child: any, j: number) => (
                        <span key={j}>{child.text}</span>
                      ))}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog End */}
      </div>
    </>
  );
}
