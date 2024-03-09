import React from "react";
import { client, urlFor } from "@/lib/sanity";
import { PostData } from "@/lib/interface";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == 'post' && slug.current == '${slug}'] | order(releaseDate desc){
    "title": title,
    "currentSlug": slug.current,
    "author": author->{name},
    "mainImage": mainImage,
    "publishedAt": publishedAt,
    "description": description,
        }[0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data: PostData = await getData(params.slug);
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
                  <Image
                    width="500"
                    height="500"
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
