import React from "react";

class Scroll extends React.Component {
  render() {
    return (
      <>
        {/* Scroll to Bottom */}
        <i className="fa fa-2x fa-angle-down text-white scroll-to-bottom" />
        {/* Back to Top */}
        <a href="#test" className="btn btn-outline-dark px-0 back-to-top">
          <i className="fa fa-angle-double-up" />
        </a>
      </>
    );
  }
}
export default Scroll;

