import React from "react";
import FacebookLogin from "react-facebook-login";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: false
    };
  }
  responseFacebook(resp) {
    console.log(resp);
    var that = this;
    fetch("https://stark-retreat-68154.herokuapp.com/facebook", {
      method: "post",
      body: JSON.stringify(resp)
    }).then(function(res) {
      that.setState({ response: res.json() });
    });
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
      </div>
    );
  }
}

export default MyComponent;
