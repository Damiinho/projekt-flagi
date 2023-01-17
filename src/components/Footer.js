import React from "react";
import "../style/Footer.css";

class Footer extends React.Component {
  render() {
    return <footer>Damian Ludef — 2021–${now.getFullYear()}</footer>;
  }
}

export default Footer;
