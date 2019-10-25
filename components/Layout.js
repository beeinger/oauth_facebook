import React, { PureComponent } from "react";
import Head from "next/head";

export default class Layout extends PureComponent {
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }} className="wrapper">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Facebook Button</title>

          <link
            rel="preload"
            as="style"
            href="/static/resources/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="/static/resources/css/bootstrap.min.css"
          />
        </Head>
      </div>
    );
  }
}
