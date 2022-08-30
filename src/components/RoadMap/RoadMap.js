import React from "react";
import DesignSectionDot from "../DesignSectionDot/DesignSectionDot";
function RoadMap(props) {
  let roadMapObj = [
    {
      id: 1,
      name: "First Week",
      list: ["Token Promotion", "Fixed Swap Protocol", "Pre Sale Fairlaunch on Pinksale"],
    },
    {
      id: 2,
      name: "Second Week",
      list: ["Project Launch and Sales"],
    },
    {
      id: 3,
      name: "October 2022",
      list: ["In-Dex Sale Pools"],
    },
    {
      id: 2,
      name: "November 2022",
      list: ["Bridge"],
    },
    {id: 5,
      name: "January 2023",
      list: ["Launchpad"],
    },
    {
      id: 6,
      name: "February 2023",
      list: ["StableCoin"],
    },
    {
      id: 7,
      name: "April 2023",
      list: ["Lending"],
    },
    {
      id: 8,
      name: "May 2023",
      list: ["Governance"],
    },
    {
      id: 9,
      name: "June 2023",
      list: ["More Strongest Partnership"],
    },
  ];
  let roadMapObjOdd = roadMapObj.filter((n) => n.id % 2 != 0);
  //console.log(roadMapObjOdd);
  let roadMapObjEven = roadMapObj.filter((n) => n.id % 2 == 0);
  //console.log(roadMapObjEven)
  return (
    <div id="RoadMap" className="py-5">
      <div className="container-xxl py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center py-3 ">
            <DesignSectionDot></DesignSectionDot>
            <h3
              className="py-3"
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Product Launch Roadmap
            </h3>
          </div>
          <div className="col-10 col-sm-8 col-lg-6 text-center">
            <h3 data-aos-once="true" data-aos="fade-up" data-aos-delay="400">
              <i className="fa fa-minus" aria-hidden="true"></i> 2022{" "}
              <i className="fa fa-minus" aria-hidden="true"></i>
            </h3>
          </div>
        </div>
      </div>
      <div className="d-none d-xl-block" id="roadMap_line_wrapper">
        {/* top line cards */}
        <div className="top_line_cards">
          {roadMapObjOdd.map((v) => {
            return (
              <div className="line_cards" key={v.id}>
                <div className="line_with_icons">
                  <div className="icon_wrapper">
                    <img
                      src={require("../../assets/images/pen.svg").default}
                      alt=""
                    />
                  </div>
                  <div className="line_content_wrapper">
                    <ul className="list-unstyled text-start line_article_list">
                      {v.list.map((j) => {
                        return (
                          <li
                            key={j}
                            data-aos-once="true"
                            data-aos="fade-left"
                            data-aos-delay={10 * v.id}
                          >
                            <p>{j}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="line_duration">
                    <p
                      data-aos-once="true"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      {" "}
                      {v.name}{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="d-xl-none"
        id="roadMap_mobile_line"
        data-aos-once="true"
        data-aos="fade-right"
      >
        <span id="line_draw"></span>
        {/* left side */}
        <div className="line_content_wrapper_left">
          {roadMapObjEven.map((v) => {
            return (
              <div className="line_content" key={v.id}>
                <h4> {v.name} </h4>
                <ul className="list-unstyled m-0">
                  {v.list.map((j) => {
                    return (
                      <li key={j}>
                        {" "}
                        <i
                          className="fa fa-check-circle"
                          aria-hidden="true"
                        ></i>{" "}
                        <p>{j}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        {/* left side */}

        <div className="line_content_wrapper_right">
          {/* right side  */}

          {roadMapObjOdd.map((v) => {
            return (
              <div className="line_content" key={v.id}>
                <h4>{v.name}</h4>
                <ul className="list-unstyled m-0">
                  {v.list.map((j) => {
                    return (
                      <li key={j}>
                        {" "}
                        <i
                          className="fa fa-check-circle"
                          aria-hidden="true"
                        ></i>{" "}
                        <p>{j}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          {/* right side  */}
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
