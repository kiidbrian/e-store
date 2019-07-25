import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="container">
        <p className="m-0 pb-4 small text-center text-muted">
          &copy;
          {new Date().getFullYear()}. Powered by{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://hubtel.com">Hubtel</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
