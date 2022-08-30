import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import DesignSectionDot from "../DesignSectionDot/DesignSectionDot";
export function FAQ(props) {
  return (
    <div id="frequently_ask_question" className="py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6 col-lg-7">
            <div className=" py-3 ">
              <DesignSectionDot></DesignSectionDot>
              <h3
                className="py-3"
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                Frequently Asked Questions
              </h3>
              <p
                className="w-75"
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                In-Dex Sale Coin is a utility based token. In-dex Sale coin holders makes
                suggestions and vote on ecossystem, and possibility to enter on launching projects.
              </p>
            </div>

            <FaqAccordion></FaqAccordion>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="py-3">
              <TokenSaleEnd></TokenSaleEnd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

function FaqAccordion() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div
        className="accordion-item"
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <h2 className="accordion-header " id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            About this.
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-mdb-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p className="p-3">
              Static Rewards, implement the manual burn buyback. This happens when there is selling. With this,
 we guarantee that LIQUIDITY POOL is always fuller during buy/sell transactions.

            </p>
          </div>
        </div>
      </div>
      <div
        className="accordion-item"
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            THE PURPOSE OF THE IN-DEX SALE.
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-mdb-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p className="p-3">
Many investors may have been subjected to many types of
events such as blows, rug pulling, honey pots, bombs/evictions, etc...
which may have caused a loss. So be around a while and
even experiencing some of these dire circumstances,
we concluded that we needed a solution, so we do SAFU, AUDIT, KYC.
            </p>
          </div>
        </div>
      </div>
      <div
        className="accordion-item"
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Our Team Created In-Dex Sale Coin
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-mdb-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p className="p-3">
              Given this increased demand for the concept of decentralized finance, we at In-Dex Sale have developed a launch platform, where we prioritize easy, fast, and secure fundraising opportunities with strong community support.Liquidity Provider Safe, fast, low transaction fee and guarantee purchase opportunity.
We at In-Dex Sale are one of the first multi-chain release platforms, with our IDXS token,wich as the more important of launchpad which will be required to governance, and allocations in projects swap fee, farms, pools, brigde multichain fees, card NFt game.”
            </p>
          </div>
        </div>
      </div>

      <div
        className="accordion-item"
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <h2 className="accordion-header" id="flush-headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            Why Static?
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-mdb-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p className="p-3">
              Static rewards solve a host of problems. First, reward amount
              is conditional upon the volume of the token traded. This
              mechanism aims to alleviate some of the downward sell pressure put
              on the token caused by earlier adopters selling their tokens after
              farming crazy high APY’s. Second, the reflect mechanism encourages
              holders to hang onto their tokens to gain more higher.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TokenSaleEnd() {
  // default date
  const totalTime = "December 21, 2023 01:15:00:526"; // add your total date here
  const defaultDate = Date.parse(totalTime);
  console.log(defaultDate);
  // Random component
  const Completionist = () => <b>0</b>;

  // Renderer callback with condition
  const seconds = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <b>{seconds}</b>;
    }
  };
  const minutes = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <b>{minutes}</b>;
    }
  };

  const hours = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <b>{hours}</b>;
    }
  };
  // To calculate the time difference of two dates
  let Difference_In_Time = new Date(totalTime) - new Date();

  // To calculate the no. of days between two dates
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  const days = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return ~~Difference_In_Days;
    }
  };
  return (
    <div id="TokenSaleEnd" className="cardgradiente p-3 p-md-5 rounded-5">
      <h3
        className="text-center mb-3 mb-md-5"
        data-aos-once="true"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Token Sale Ends In
      </h3>
      <div className="sale_duration_wrapper d-flex justify-content-between">
        <div
          className="sale_item"
          data-aos-once="true"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="d-flex">
            <Countdown date={Date.now() + defaultDate} renderer={days} />
          </span>
          <span className="d-block">days</span>
        </div>
        <div
          className="sale_item"
          data-aos-once="true"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="d-flex">
            <Countdown date={Date.now() + defaultDate} renderer={hours} />
          </span>
          <span className="d-block">hours</span>
        </div>
        <div
          className="sale_item"
          data-aos-once="true"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="d-flex">
            {" "}
            <Countdown date={Date.now() + defaultDate} renderer={minutes} />
          </span>
          <span className="d-block">minutes</span>
        </div>
        <div
          className="sale_item"
          data-aos-once="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span className="d-flex">
            <Countdown date={Date.now() + defaultDate} renderer={seconds} />
          </span>
          <span className="d-block">seconds</span>
        </div>
      </div>

      <div
        className="btn_control text-center py-3 pt-md-5"
        data-aos-once="true"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <a
          href="https://www.pinksale.finance/launchpads?chain=BSC"
          target={"_blank"}
          className="btngradiente btn btn-light rounded-pill">
          Buy FairLaunch Pinksale
        </a>
      </div>
    </div>
  );
}
