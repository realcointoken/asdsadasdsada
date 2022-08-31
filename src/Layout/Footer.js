import React from "react";
import Logo from "../assets/images/image01.png";

function Footer(props) {
  return (
    <footer id="Footer" className="py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-5 col-md-4 mb-3 mb-md-5">
            <div className="col_wrapper">
              <a className="d-inline-block me-2" href="https://indexsale.finance">
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
                  <a href="https://www.reddit.com/user/In-DexSaleDev">
                    <i className="fab fa-reddit" aria-hidden="true"></i>
                  </a>
                </li>
                <li
                  className="p-2"
                  data-aos-once="true"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <a href="https://twitter.com/In_Dex_Sale">
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
                        Partners
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
                    Links:
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
                      <a href="https://bscscan.com/address/0xcab9575f4bf9a846a58fcbe1a96af3e4bd770366" className="anchor_color">
                        Bscscan
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <a href="#" className="anchor_color">
                        Github
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="400"
                    >
                      <a href="#" className="anchor_color">
                        Technology
                      </a>
                    </li>
                    <li
                      data-aos-once="true"
                      data-aos="fade-right"
                      data-aos-delay="500"
                    >
                      <a href="#" className="anchor_color">
                        Devs
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
                    E-mail
                  </h4>
                  <ul
                    className="list-unstyled m-0 p-0"
                    data-aos-once="true"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <li>
                      <p>
                        Mailing Address: idsdefi@gmail.com
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
