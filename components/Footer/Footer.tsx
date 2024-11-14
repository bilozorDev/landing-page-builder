import React from "react";
import { useFooterSetting } from "../contexts/FooterTabSettings";

const Footer = () => {
  const { footerSettings } = useFooterSetting();
  //getCurrentYear
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 ">
        <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
          &copy; {currentYear} {footerSettings.text}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
