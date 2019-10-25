import { PureComponent } from "react";
import Head from "next/head";
import { Provider, Subscribe } from "unstated";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "bootstrap-css-only/css/bootstrap.min.css";

// dynamic imports (using window inside components) - import dynamic from "next/dynamic";
// routing (changing pages etc) - import Router from "next/router";

export default class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="Description" content="Dupnij sobie becik byqu" />
          <title>Betting</title>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#3d5194" />
        </Head>
        <Provider>
          {/* <Subscribe to={[esteticContainer]}>
              {containers => ( */}
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionLeave={false}
            transitionEnter={false}
            transitionAppearTimeout={500}
          >
            <div
              className="main"
              style={{
                height: "100%",
                minHeight: "100vh"
              }}
            >
              {children}
            </div>
          </ReactCSSTransitionGroup>
          {/* )}
          </Subscribe> */}
        </Provider>
        <style jsx global>
          {``}
        </style>
      </div>
    );
  }
}
