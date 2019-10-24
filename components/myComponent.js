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
    if (window.FB) {
      this.facebookData !== window.FB.getAuthResponse() &&
        this.setState({ facebookData: window.FB.getAuthResponse() });
    }
  }

  responseFacebook(resp) {
    console.log(resp);
    var respo = false;
    fetch("https://stark-retreat-68154.herokuapp.com/facebook", {
      method: "post",
      body: JSON.stringify(resp)
    }).then(function(res) {
      respo = res.json();
      console.log(respo);
    });
    if (respo) {
      this.setState({ response: respo });
    }
  }

  render() {
    return (
      <div>
        {/* https://www.npmjs.com/package/react-facebook-login - for info about editting */}
        <FacebookLogin
          appId="2173246342969843"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends,instagram_basic"
          callback={() => this.responseFacebook}
        />
        {this.state.response ? (
          <h1>{JSON.stringify(this.state.response)}</h1>
        ) : (
          <h1>Wait patiently</h1>
        )}
        {this.state.facebookData ? (
          <h1>{JSON.stringify(this.state.facebookData)}</h1>
        ) : (
          <h1>No data</h1>
        )}
      </div>
    );
  }
}

export default MyComponent;
