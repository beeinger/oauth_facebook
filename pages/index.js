import React from "react";
import Head from "next/head";
import FacebookButton from "../components/FacebookButton.js";

const Home = () => (
  <div>
    <Head>
      <title>Facebook Button</title>
    </Head>
    <FacebookButton />
  </div>
);

export default Home;
