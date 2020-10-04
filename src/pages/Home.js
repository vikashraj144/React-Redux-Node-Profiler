import React from "react";
import AboutMe from "../components/common/AboutMe.component";
import Award from "../components/common/Award.component";
import Resume from "../components/common/Resume.component";
import Carousal from "../components/common/slider/Carousal.component";
import Layout from "../components/layout/Default.layout";
const Home = (props) => {
  return (
    <Layout>
      <Carousal />
      <AboutMe />
      <Resume />
      <Award />
      <h1 className="display-3">Vikash Kumar Verma</h1>
      <p className="lead">Front-end Developer</p>
    </Layout>
  );
};

Home.propTypes = {};

export default Home;
