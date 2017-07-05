import React, { Component } from "react";
import PropTypes from "prop-types";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a
          className="github-link"
          href="https://github.com/kalininilya/hackernews-react-app"
          target="_blank"
        >
          kalininilya/hackernews-react-app
        </a>
      </footer>
    );
  }
}

Footer.propTypes = {};

export default Footer;
