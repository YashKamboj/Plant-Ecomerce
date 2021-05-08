import React from "react";
import "./homepage-style.scss";
import Directory from "../../components/directory/directory-component";
import IntoImg from "../../components/intro/intro-component";

const HomePage = () => (
  <div className="homepage">
    <IntoImg />
    <Directory />
  </div>
);

export default HomePage;
