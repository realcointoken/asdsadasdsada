import React from "react";

function LeftSideNavbar(props) {
  return (
    <div
      id="LeftSideNavbar"
      className="rounded-pill px-md-2 py-4"
      data-aos-delay="500"
      data-aos="fade-up-left"
    >
      <ul className="list-unstyled m-0">
        <li className="p-3">
          <a
            className="btn btn-muted shadow-0 p-0 m-0"
            href="https://www.reddit.com/user/InDexSale"
          >
            <i className="fab fa-reddit" aria-hidden="true"></i>
          </a>
        </li>
        <li className="p-3">
          <a className="btn btn-muted shadow-0 p-0 m-0" href="https://www.facebook.com/indexsale">
            <i className="fab fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li className="p-3">
          <a
            className="btn btn-muted shadow-0 p-0 m-0"
            href="https://twitter.com/In_Dex_Sale"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li className="p-3">
          <a
            className="btn btn-muted shadow-0 p-0 m-0"
            href="https://t.me/InDexSaleGlobal"
          >
            <i className="fab fa-telegram" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LeftSideNavbar;
