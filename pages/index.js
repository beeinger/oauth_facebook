import React from "react";
import Head from "next/head";
import MyComponent from "../components/myComponent.js";

const Home = () => (
  <div>
    <div id="fb-root"></div>
    <script
      async
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v4.0&appId=2173246342969843&autoLogAppEvents=1"
    ></script>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div
      class="fb-login-button"
      data-width=""
      data-size="large"
      data-button-type="continue_with"
      data-auto-logout-link="true"
      data-use-continue-as="true"
    ></div>
  </div>
);

export default Home;
