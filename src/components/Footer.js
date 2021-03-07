import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import $ from "jquery";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <i className="lab la-facebook-f"></i>
        <i className="lab la-twitter"></i>
        <i className="lab la-tumblr"></i>
        <i className="lab la-instagram"></i>
      </div>
      <p className="light-gray-text">
        The Lord of The Rings Series is © by the Tolkien Estate. Website Design
        © by Anny Ng. Content gathered from Tolkengateway.net This is a
        non-profit project. All rights reserved by the owners.
      </p>
    </div>
  );
};
export default Footer;
