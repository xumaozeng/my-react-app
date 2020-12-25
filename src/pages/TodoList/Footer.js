import React from "react";
import Link from "./Link";

const Footer = () => (
  <p>
    Show: <Link filter="SHOW_ALL">ALL</Link>
    {", "}
    <Link filter="SHOW_ACTIVE">Active</Link>
    {", "}
    <Link filter="SHOW_COMPLETED">Completed</Link>
  </p>
);
export default Footer;
