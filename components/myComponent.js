import React from "react";
import FacebookLogin from "react-facebook-login";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: false,
      facebookData: false
    };
  }

  componentDidMount() {
    console.log("componendidmount");
    setTimeout(async () => {
      if (window.FB) {
        var fbdata = await window.FB.getAuthResponse();
        if (fbdata && "accessToken" in fbdata) {
          console.log("window.FB");
          if (this.state.facebookData !== fbdata) {
            console.log("try");
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
              console.log(respo);
            });
            if (respo && respo !== this.state.response) {
              this.setState({ response: respo });
            }
          }
        }
      }
    }, 500);
  }

  render() {
    return (
      <div>
        {/* https://www.npmjs.com/package/react-facebook-login - for info about editting */}
        {this.state.facebookData ? (
          <div>
            <h1>{JSON.stringify(this.state.facebookData)}</h1>
            <button onClick={() => window.FB.logout()}>Log out</button>
          </div>
        ) : (
          <div>
            <FacebookLogin
              appId="2173246342969843"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends,instagram_basic"
              callback={() => this.componentDidMount()}
            />
          </div>
        )}
      </div>
    );
  }
}

export default MyComponent;
