"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

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

  console.log("Pathname: ", pathname);

  return (
    <>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
          <Link href="/" className="navbar-brand ml-lg-3">
            <h1 className="m-0 display-5 text-uppercase text-primary">
              <i className="fa fa-truck mr-2" />
              Maritime
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
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
              href=""
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
