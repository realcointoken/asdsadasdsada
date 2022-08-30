import React from "react";
import DesignSectionDot from "../DesignSectionDot/DesignSectionDot";
function Services(props) {
  const service_card_obj = [
    {
      id: 1,
      title: "No Fees",
      description:
        "In-Dex Sale is a multi-chain compatible decentralised exchange aggregator protocol focused on making zero-fee transactions possible. We are aiming to make on-chain trading simple and easy, by providing access to multi-chains like ethereum, BSC under one roof. The core product is being designed to function gasless and focused on aggregating liquidity from multiple protocols.",
      link: "#",
      img: require("../../assets/images/setting.svg").default,
    },
    {
      id: 2,
      title: " “SAFU CONTRACT” ",
      description:
        "Many we have been subjected to many types of unfortunate events, such as, scams, rug pulls, honey pots, pump/dumps, etc.. that may have caused an unfair loss. For this have safu, kyc, audit.",
      link: "#",
      img: require("../../assets/images/analysis.svg").default,
    },
    {
      id: 3,
      title: "Why Static?",
      description:
        "Static rewards solve a host of problems. First, the reward amount is conditional upon the volume of the token being traded. This mechanism aims to alleviate some of the downward sell pressure put on the token caused by earlier adopters selling their tokens after farming crazy high APY’s.",
      link: "#",
      img: require("../../assets/images/services.svg").default,
    },
    {
      id: 4,
      title: "Influencers backed",
      description:
        " In-Dex Sale value propositions is that it is built and supported, for the  marketers professionals and influencers resulting in broader distributions, much better project exposure and more precise marketing.",
      link: "#",
      img: require("../../assets/images/line.svg").default,
    },
    {
      id: 5,
      title: "Manual Burns",
      description:
        "A continuous burn in any protocol can be good for the first few days.",
      link: "#",
      img: require("../../assets/images/finder.svg").default,
    },
    {
      id: 6,
      title: "About In-Dex",
      description:
        "The In-Dex Sale is a community driven deFi token, 100000 supply and fairlaunch on pinksale.",
      link: "#",
      img: require("../../assets/images/trading.svg").default,
    },
  ];
  return (
    <section id="ServicesComponent">
      <div className="container-xxl py-5">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-12 text-center py-3 ">
            <DesignSectionDot></DesignSectionDot>
            <h3
              className="py-3"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="300"
            >
              Differencial
            </h3>
          </div>
          <div
            className="col-10 col-sm-8 col-lg-6 text-center"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400"
          >
            <p>
              One of the main difference of In-Dex Sale is that it is not limited to a specific blockchain. Instead it can support projects from a broad number of networks, centralizing the highest quality projects from all chains onto one launchpad.”
            </p>
          </div>
        </div>
        <div className="row ">
          {service_card_obj.map((v) => {
            return (
              <div
                key={v.id}
                className="col-md-6 col-lg-4 mb-4 mb-md-5 h-auto"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay={(v.id * 100) + 400}
              >
                <div className="px-3 px-md-4 h-100">
                  <div className="card services_card px-3 px-md-4 h-100">
                    <div className="card-body iconescard">
                      <img src={v.img} alt="img" />
                      <h4 className="card-title py-3 mt-2">{v.title}</h4>
                      <p>{v.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
