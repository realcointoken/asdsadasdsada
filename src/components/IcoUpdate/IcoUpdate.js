import React from "react";

function IcoUpdate(props) {
  return (
    <div id="IcoUpdate" className="py-5">
      <div className="container-xxl py-5">
        <div className="row justify-content-center">
          <div className="col-11 col-md-9">
            <div className="ico_wrapper p-3 p-md-5 text-center">
              <div className="ico_content ">
                <h2
                  className="mb-3"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  Don’t Miss Pinksale Fairlaunch!
                </h2>
                <p data-aos-once="true" data-aos="fade-up" data-aos-delay="100">
                  In-Dex Sale most exciting feature is that it’s the first
                  created Independent “LPMAX” (liquidity pool) and it put the
                  true power in each holders hands. It minimizes and frustrates
                  rug pulls, price manipulations and pump/dumps schemes. Our
                  Smart Chain Contract promotes actual assurance and insurance
                  for the growth for our holders.
                </p>
              <div
                className="ico_join_social mt-3 mt-md-5"
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span>Join our Chat</span>
                <div className="w-100 py-2"></div>
                <button className="btn btn-secondary">
                  <i className="fab fa-telegram" aria-hidden="true"></i> TELEGRAM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IcoUpdate;
