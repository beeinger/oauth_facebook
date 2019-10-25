import React from "react";
import FacebookButton from "../components/FacebookButton.js";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout"), {
  ssr: false
});

const Home = () => (
  <Layout>
    <FacebookButton />
  </Layout>
);

export default Home;
