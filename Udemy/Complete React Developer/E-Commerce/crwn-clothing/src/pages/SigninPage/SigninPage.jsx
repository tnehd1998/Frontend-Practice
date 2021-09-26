import React from "react";
import Signin from "../../components/Signin/Signin";
import Signup from "../../components/Signup/Signup";
import "./SigninPage.scss";

const SigninPage = () => {
  return (
    <div className="signin-page">
      <Signin />
      <Signup />
    </div>
  );
};

export default SigninPage;
