import React from "react";
import { client, urlFor } from "@/lib/sanity";
import { PostData } from "@/lib/interface";
import Image from "next/image";
import Link from "next/link";

async function getPosts() {
  const query = `
    *[_type == "post"] | order(_createdAt asc) {
      "title": title,
      "currentSlug": slug.current,
      "author": author->{name},
      "mainImage": mainImage,
      "publishedAt": publishedAt,
      "description": description,
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Blog() {
  const data: PostData[] = await getPosts();
  // console.log(data);

  function getFormattedDate(publishedAt: string | Date): string {
    const date = new Date(publishedAt as string);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      year: "numeric",
      day: "numeric",
    }; // Include day in options
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Our Blog
            </h6>
            <h1 className="mb-4">Latest From Blog</h1>
          </div>
          <div className="row">
            {data.map((post, i) => (
              <div key={i} className="col-md-6 mb-5">
                <div className="position-relative">
                  <Image
                    width={500}
                    height={500}
                    className="img-fluid w-100"
                    src={urlFor(post.mainImage).url()}
                    alt=""
                  />
                  <div
                    className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                    style={{
                      width: 60,
                      height: 60,
                      bottom: "-30px",
                      right: 30,
                    }}
                  >
                    {/* <h4 className="font-weight-bold mb-n1">
                      {new Date(post.publishedAt).getDate()}
                    </h4> */}
                    <small style={{fontSize:"12px"}} className="text-white text-uppercase text-center">
                      {getFormattedDate(post.publishedAt)}
                    </small>
                  </div>
                </div>
                <div className="bg-secondary" style={{ padding: 30 }}>
                  <h4 className="font-weight-bold mb-3">{post.title}</h4>
                  <div
                    style={{
                      WebkitLineClamp: "3",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {post.description.map((block: any, i: number) => (
                      <p key={i}>
                        {block.children.map((child: any, j: number) => (
                          <span key={j}>{child.text}</span>
                        ))}
                      </p>
                    ))}
                  </div>
                  <Link
                    className="border-bottom border-primary text-uppercase text-decoration-none"
                    href={`blog/${post.currentSlug}`}
                    >
                    Read More <i className="fa fa-angle-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
