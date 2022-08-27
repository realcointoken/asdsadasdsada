import React from "react";
import DesignSectionDot from "../DesignSectionDot/DesignSectionDot";
export function ContactUs(props) {
  return (
    <div id="ContactUs">
      <div className="container-xxl py-5">
        <div className="row">
          <div className="col-12">
            <div className=" py-3 text-center">
              <DesignSectionDot></DesignSectionDot>
              <div className="text-center">
                <h3
                  className="py-3"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  We 0 fees to all traders.
                </h3>
                <p
                  className="w-75 mx-auto"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-11 col-md-10 col-lg-9">
            <ContactSendingForm></ContactSendingForm>
          </div>
        </div>
      </div>
    </div>
  );
}
        </div>

        <div
          className="btn_action py-5 text-center"
          data-aos-once="true"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <button className="btn btn-secondary px-5 rounded-pill">
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
