import React from "react";
import WatchModal from "../WatchModal/WatchModal";
import DesignSectionDot from "../DesignSectionDot/DesignSectionDot";
import FAQ from "../FAQ/FAQ";
export function About(props) {
  const trusted_card_obj = [
    {
      id: 1,
      img: require("../../assets/images/1.png").default,
      btn: <i className="fa fa-check" aria-hidden="true"></i>,
    },
    {
      id: 2,
      img: require("../../assets/images/2.png").default,
      btn: <i className="fa fa-check" aria-hidden="true"></i>,
    },
    {
      id: 3,
      img: require("../../assets/images/3.png").default,
      btn: <i className="fa fa-check" aria-hidden="true"></i>,
    },
    {
      id: 4,
      img: require("../../assets/images/4.png").default,
      btn: <i className="fa fa-check" aria-hidden="true"></i>,
    },
    {
      id: 5,
      img: require("../../assets/images/5.png").default,
      btn: <i className="fa fa-check" aria-hidden="true"></i>,
    },
    {
      id: 6,
      img: require("../../assets/images/6.png").default,
      btn: <i className="fa fa-check" aria-hidden="true"></i>,
    },
  ];
  return (
    <section id="AboutComponent">
      <div className="container-xxl py-5">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-12 text-center py-3">
            <DesignSectionDot></DesignSectionDot>
            <h3
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="200"
              className="py-3"
              data-aos-once="true"
            >
              We are trusted
            </h3>
          </div>
          <div className="col-10 col-sm-8 col-lg-6 text-center">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="400"
            >
              Our mission is to develop the best launchpad in the world! For Startup Easy, fast and secure fund-raising chance with strong community support.
              Liquidity Provider Safe, fast, low transaction fee and guarantee purchase opportunity.
            </p>
          </div>
        </div>

        <div className="row mb-5  pb-5">
          {trusted_card_obj.map((v) => {
            return (
              <div
                key={v.id}
                className="col-6 col-sm-4 col-md-3 col-xl-2 mb-3 px-3 px-md-4"
              >
                <div
                  className="card trusted_card"
                  data-aos="zoom-out-up"
                  data-aos-delay={v.id * 150}
                  data-aos-once="true"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-header">
                    <img
                      className="w-100"
                      style={{ height: "150px", objectFit: "contain" }}
                      src={v.img}
                      alt="img"
                      className="card-img"
                    />
                  </div>
                  <div className="card-body text-center">
                    <a className="buttonminicard btn btn-secondary w-100">{v.btn}</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row left_right_side_row1 justify-content-center justify-content-md-stretch  mb-5  pb-5">
          <div className="right_box col-md-6 col-lg-7 col-xl-7">
            <div className="px-3 px-md-5">
              <DesignSectionDot></DesignSectionDot>
              <h3
                className="py-3"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="100"
              >
                We Have Accomplished The Following Since September 10 2022 Fair
                Launch Pinksale.
              </h3>
              <div className="content py-4">
                <p
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="200"
                >
                  Acquired Over 10000 Twitter Followers
                </p>
                <p
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="300"
                >
                  Acquired Over 30000 Telegram Members
                </p>
                <p
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="400"
                >
                  Hit All Peaple Around The World
                </p>
                <p
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="500"
                >
                  We Have Achieved Attaining Over 1500 In-Dex Sale Holders
                </p>
                <p
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="600"
                >
                  We???ve Applied To Be Listed on Coin Market Cap (CMC) Exchange
                </p>
                <p
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="700"
                >
                  We???ve Applied To Be Listed On CoinGecko Exchange
                </p>
                <p
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="800"
                >
                  We are On the best notice channels & Organic Incline Of Achievements.
                </p>
              </div>

              <div className="btn_wrapper">
                <a
                  href="https://in-dexsale.gitbook.io/in-dex-sale/"
                  target={"_blank"}
                  className="btngradiente btn btn-success btn-sm px-3 px-md-5 rounded-pill"
                  data-aos="fade-right"
                  data-aos-once="true"
                  data-aos-delay="1000"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className="left_box col-md-6 col-lg-5 col-xl-5 text-center">
            <img
              className="w-100"
              src={require("../../assets/images/solution.png").default}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <>
      <div id="Features">
        <div className="container-xxl py-5">
          <div className="row mb-5 pb-5 justify-content-center">
            <div className="col-10 col-md-8 col-lg-6 text-center">
              <DesignSectionDot></DesignSectionDot>
              <h3
                className="py-3"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="100"
              >
                Feature
              </h3>

              <p data-aos="fade-up" data-aos-once="true" data-aos-delay="500">
                Supply is 100000 token, and the project in a presale round from credential thought youtubers and strategic partners, most of which will be used to increase In-Dex liquidity.
              </p>
            </div>
            <div className="col-12 py-5"></div>

            <div className="col-11 col-sm-10 col-md-8 col-lg-6">
              <div className="watch_box_wrapper rounded-5">
                <button
                  className="btn btn-secondary"
                  data-mdb-target="#watchModalView"
                  data-mdb-toggle="modal"
                  data-aos="zoom-out"
                  data-aos-once="true"
                  data-aos-delay="100"
                >
                  <i className="far fa-play-circle fa-3x"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ></FAQ>
    </>
  );
}

export function RewardBnb() {
  return (
    <div id="RewardBnb">
      <div className="container-xxl py-5">
        <div className="row left_right_side_row1 justify-content-center justify-content-md-stretch  mb-5  pb-5">
          <div className="left_box col-md-6 col-lg-5 col-xl-5 text-center">
            <img
              className="w-100"
              data-aos-once="true"
              data-aos="zoom-in"
              data-aos-delay="100"
              src={require("../../assets/images/about1.svg").default}
              alt="img"
            />
          </div>

          <div className="right_box col-md-6 col-lg-7 col-xl-7">
            <div className="px-3 px-md-5">
              <DesignSectionDot></DesignSectionDot>
              <h3
                className="py-3"
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                HOLD In-Dex Sale to get rewards on staking your tokens!
              </h3>
              <div className="content py-4">
                <p
                  className="mb-3"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  In-Dex Sale is completely decentralized and all decisions are made by a community poll. Users can stake their In-Dex Sale token on our website by clicking Stake.
                  People who stake their In-Dex Sale token will be eligible for participate in all projects launching on our platform. In addition to IDO, they will also be eligible for staking rewards.
                </p>
                <p
                  className="mb-3"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  A smart contract in which you can stake both LP tokens and solo tokens in order to receive income in tokens of the protocol you are using is called a Farm because all these pools are controlled with a MasterChef Farm smart contract. . If you have an income in tokens of used protocol, regardless of whether you put an LP token (a pair of tokens) or a regular token into a smart contract, all of this belongs to the MasterChef contract and should be called a Farm.
                </p>
              </div>

              <div className="btn_wrapper">
                <a
                  href="https://app.indexsale.finance"
                  target={'_blank'}
                  className="btngradiente btn btn-sm px-5 m-3 rounded-pill  btn-success"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-once="true"
                >
                  Staking
                </a>
                <a
                  href="https://stable.indexsale.finance"
                  target={"_blank"}
                  className="btnsecondary btn btn-sm px-5 m-3 rounded-pill btn-info"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-once="true"
                >
                  Stake In-USD
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
