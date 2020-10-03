import React from "react";
import Carousal from "../components/common/slider/Carousal.component";
import Layout from "../components/layout/Default.layout";
const Home = (props) => {
  return (
    <Layout>
      <Carousal />
      <h1 className="display-3">Vikash Kumar Verma</h1>
      <p className="lead">Front-end Developer</p>
    </Layout>
  );
};

Home.propTypes = {};

export default Home;
