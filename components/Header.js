import React, { Component } from "react";
import Prismic from "prismic-javascript";
import Link from "next/link";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link prefetch href="/">
          <img
            src="https://testintouch.cdn.prismic.io/testintouch/5edfb3e5f1cb98d607a264d698c57f25a79bbc6c_logo_ned-main.png"
            alt="Logo"
            style={{ width: "50px" }}
            className="mr-auto"
          />
        </Link>

        <Link prefetch href="/">
            <a className="btn btn-outline-light mr-2">Dashboard</a>
          </Link>
        <Link prefetch href="/news">
          <a className="btn btn-outline-light">News</a>
        </Link>
      </nav>
    );
  }
}

export default Header;
