import React from "react";
import FacebookLogin from "react-facebook-login";

class MyComponent extends React.Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      // https://www.npmjs.com/package/react-facebook-login - for info about editting
      <FacebookLogin
        appId="2173246342969843"
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,user_friends"
        callback={this.responseFacebook}
      />
    );
  }
}

export default MyComponent;
