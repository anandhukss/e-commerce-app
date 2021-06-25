import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../button/button.component";
import { SigninWithGoogle } from "../../firebase/firebase.utils";

//

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
    console.log("clicked");
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
    console.log(name);
    console.log(value);
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title" >I already have an account</h2>
        <span>Login with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.password}
            required
            type="text"
          />

          <FormInput
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            type="password"
          />
          <CustomButton handler={this.handleSubmit} children="Sign in" type="submit" />
          
          <CustomButton handler={SigninWithGoogle} google children="Sign in with Google" type="submit" />
        </form>
      </div>
    );
  }
}
