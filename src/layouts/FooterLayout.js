import React, { Children } from "react";
import Footer from "../components/Footer";

const FooterLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default FooterLayout;
