import React from "react";
import Head from "next/head";
import MyComponent from "../components/myComponent.js";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MyComponent />
  </div>
);

export default Home;
