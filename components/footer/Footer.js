import React from "react";
import Link from "next/link";
import Logo from "/public/images/logo.png";
import Image from "next/image";

const Footer = (props) => {
  return (
    <div className="tp-site-footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-image">
              <Link className="logo" href="/">
                <Image src={Logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-12">
            <div className="link-widget">
              <ul>
                {/* <li><Link href="https://github.com/earthpowerful"><i className="ti-github"></i></Link></li>
                                <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link href="/"><i className="ti-linkedin"></i></Link></li> */}
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="copyright">
              <p>© 2023. All rights reserved by Bronson.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
