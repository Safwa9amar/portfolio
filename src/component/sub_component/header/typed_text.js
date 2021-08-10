
import React, { Component } from "react";
import Typed from "react-typed";

class Typedtext extends Component {
  render() {
    return (
      <div>
        <h1 className="d-inline font-weight-lighter text-white">
          <Typed
            strings={[
              "Web Designer",
              "Web Developer",
              "Front End Developer",
              "Apps Designer",
              "Apps Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h1>
      </div>
    );
  }
}


export default Typedtext;