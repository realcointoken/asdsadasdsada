import React from "react";
import Logo from "../assets/images/image01.png";

function Footer(props) {
  return (
    <footer id="Footer" className="py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-5 col-md-4 mb-3 mb-md-5">
            <div className="col_wrapper">
              <a className="d-inline-block me-2" href="https://in-dex-sale.com">
                <img src={Logo} height="50" alt="" loading="lazy" />
              </a>
              <p
                data-aos-once="true"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                In-Dex Sale is one the first of its kind multichain launchpad. In-Dex Sale is focused on by actively engaging. Creating value for the project and the community. introduces the In-Dex Sale token which as the more important of launchpad which will be required to governance, 
and allocations in projects swap fee, farms, pools, bridge multichain fees, card nft game.
              </p>
              <ul className="list-unstyled d-flex">
                <li
                  className="p-2"
                  data-aos-once="true"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <a href="https://www.reddit.com/">
                    <i className="fab fa-reddit" aria-hidden="true"></i>
                  </a>
                </li>
                <li
                  className="p-2"
                  data-aos-once="true"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <a href="https://mobile.twitter.com/indexsale">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li
                  className="p-2"
                  data-aos-once="true"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <a href="https://t.me/indexsaleglobal">
                    <i className="fab fa-telegram" aria-hidden="true"></i>
                  </a>
                </li>
                <li
                  className="p-2"
                  data-aos-once="true"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-7">
            <div className="col_wrapper">
              <div className="row">
                <div className="col-md-4 mb-3 mb-md-5">
                  <h4
                    className="mb-3"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-delay="0"
                  >
                    NAVIGATE
                  </h4>
                  <ul className="list-unstyled m-0 p-0">
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="100"
                    >
                      <a href="#" className="anchor_color">
                        Advertisers
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      <a href="#" className="anchor_color">
                        Developers
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <a href="#" className="anchor_color">
                        Resources
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="400"
                    >
                      <a href="#" className="anchor_color">
                        Company
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="500"
                    >
                      <a href="#" className="anchor_color">
                        Connect
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-3 mb-md-5">
                  <h4
                    className="mb-3"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-delay="0"
                  >
                    Privacy & Tos
                  </h4>
                  <ul className="list-unstyled m-0 p-0">
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="100"
                    >
                      <a href="#" className="anchor_color">
                        Advertiser Agreement
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      <a href="#" className="anchor_color">
                        Acceptable Use Policy
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <a href="#" className="anchor_color">
                        Privacy Policy
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="400"
                    >
                      <a href="#" className="anchor_color">
                        Technology Privacy
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="500"
                    >
                      <a href="#" className="anchor_color">
                        Developer Agreement
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-3 mb-md-5">
                  <h4
                    className="mb-3"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-delay="0"
                  >
                    Phone
                  </h4>
                  <ul
                    className="list-unstyled m-0 p-0"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <li>
                      <p>
                        Mailing Address: idsdefi.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
