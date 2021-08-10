import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        {/* Footer Start */}
        <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
          <div className="container text-center py-5">
            <div className="d-flex justify-content-center mb-4">
              <a className="btn btn-light btn-social mr-2" href="#test">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-light btn-social mr-2" href="#test">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-light btn-social mr-2" href="#test">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="btn btn-light btn-social" href="#test">
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="d-flex justify-content-center mb-3">
              <a className="text-white" href="#test">
                Privacy
              </a>
              <span className="px-3">|</span>
              <a className="text-white" href="#test">
                Terms
              </a>
              <span className="px-3">|</span>
              <a className="text-white" href="#test">
                FAQs
              </a>
              <span className="px-3">|</span>
              <a className="text-white" href="#test">
                Help
              </a>
            </div>
            <p className="m-0">
              ©{" "}
              <a className="text-white font-weight-bold" href="#test">
                Domain Name
              </a>
              . All Rights Reserved. Designed by{" "}
              <a
                className="text-white font-weight-bold"
                href="https://htmlcodex.com"
              >
                HTML Codex
              </a>
            </p>
          </div>
        </div>
        {/* Footer End */}
      </>
    );
  }
}
export default Footer;
