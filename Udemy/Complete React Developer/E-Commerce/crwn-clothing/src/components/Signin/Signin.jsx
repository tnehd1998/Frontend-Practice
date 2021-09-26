import React, { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./Signin.scss";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form obSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            name="email"
            label="Email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Submit</CustomButton>
        </form>
      </div>
    );
  }
}

export default Signin;
