import React from "react";
import FacebookLogin from "react-facebook-login";
import { Button } from "react-bootstrap";

class FacebookButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: false,
      facebookData: false,
      api_address: "https://stark-retreat-68154.herokuapp.com/facebook"
    };
    this.facebookHandler = this.facebookHandler.bind(this);
  }

  componentDidMount() {
    this.facebookHandler("startup");
  }

  facebookHandler(status) {
    if (status === "logout") {
      this.setState({
        response: false,
        facebookData: false
      });
    } else {
      setTimeout(async () => {
        if (window.FB) {
          var fbdata = await window.FB.getAuthResponse();
          if (fbdata && "accessToken" in fbdata) {
            if (this.state.facebookData !== fbdata) {
              this.setState({ facebookData: fbdata });
              var respo = false;
              fetch(this.state.api_address, {
                method: "post",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(fbdata)
              }).then(async function(res) {
                respo = await res.json();
              });
              if (respo && respo !== this.state.response) {
                this.setState({ response: respo });
              }
            }
          }
        }
      }, 100);
    }
  }

  render() {
    return (
      <div>
        {/* https://www.npmjs.com/package/react-facebook-login - for info about editting */}
        {/* {this.state.facebookData ? ( */}
        <Button
          variant="primary"
          onClick={() => {
            window.FB.logout() & this.facebookHandler("logout");
          }}
        >
          Log out
        </Button>
        {/* ) : (
          <FacebookLogin
            appId="2173246342969843"
            autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,user_friends,instagram_basic"
            callback={() => this.facebookHandler("login")}
          />
        )} */}
      </div>
    );
  }
}

export default FacebookButton;
