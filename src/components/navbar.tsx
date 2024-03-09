"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface NavLinks {
  name: string;
  href: string;
}

const links: NavLinks[] = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
  {
    name: "SERVICES",
    href: "/services",
  },
  {
    name: "CONTACT",
    href: "/contact",
  },
];

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  // console.log("Pathname: ", pathname);

  return (
    <>
      <div className="container-fluid p-0 border-bottom border-dark">
        <nav className="navbar navbar-expand-lg bg-light navbar-light px-lg-5">
          <Link href="/" className="navbar-brand ml-lg-3">
            <span className="d-block m-0 display-5 text-uppercase">
              {/* <i className="fa fa-truck mr-2" />
              Maritime */}
              <Image
                width="100"
                height="100"
                className="w-[60px] height-[60px]"
                style={{ objectFit: "cover" }}
                src="/assets/img/logo.png"
                alt="logo"
              />
            </span>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-label="Click here to Open the Mobile Memu"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-lg-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav m-auto py-0">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-item nav-link ${
                    pathname === link.href ? "active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              href="/request-quote"
              className="btn btn-primary py-2 px-4 d-none d-lg-block"
            >
              GET A QUOTE
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
