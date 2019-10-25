import React from "react";
import FacebookButton from "../components/FacebookButton.js";
import dynamic from "next/dynamic";
import Layout from "../components/Layout"

const Home = () => (
  <Layout>
    <FacebookButton />
  </Layout>
);

export default Home;
