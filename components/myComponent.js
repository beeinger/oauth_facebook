import React from "react";
import FacebookLogin from "react-facebook-login";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: false,
      facebookData: false
    };
    this.facebookHandler = this.facebookHandler.bind(this);
  }

  componentDidMount() {
    console.log("componendidmount");
    this.facebookHandler("startup");
  }

  facebookHandler(status) {
    console.log("facebook handler");
    if (status === "logout") {
      console.log("logout");
      this.setState({
        response: false,
        facebookData: false
      });
    } else {
      console.log(status);
      setTimeout(async () => {
        if (window.FB) {
          var fbdata = await window.FB.getAuthResponse();
          if (fbdata && "accessToken" in fbdata) {
            console.log("logged in");
            if (this.state.facebookData !== fbdata) {
              console.log("check");
              this.setState({ facebookData: fbdata });
              var respo = false;
              fetch("https://stark-retreat-68154.herokuapp.com/facebook", {
                method: "post",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(fbdata)
              }).then(async function(res) {
                respo = await res.json();
                console.log("sent data to server", respo);
              });
              if (respo && respo !== this.state.response) {
                this.setState({ response: respo });
              }
            }
          }
        }
      }, 500);
    }
  }

  render() {
    return (
      <div>
        {/* https://www.npmjs.com/package/react-facebook-login - for info about editting */}
        {this.state.facebookData ? (
          <div>
            <h1>{JSON.stringify(this.state.facebookData)}</h1>
            <button
              onClick={() => {
                window.FB.logout() & this.facebookHandler("logout");
              }}
            >
              Log out
            </button>
          </div>
        ) : (
          <div>
            <FacebookLogin
              appId="2173246342969843"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends,instagram_basic"
              callback={() => this.facebookHandler("login")}
            />
          </div>
        )}
      </div>
    );
  }
}

export default MyComponent;
