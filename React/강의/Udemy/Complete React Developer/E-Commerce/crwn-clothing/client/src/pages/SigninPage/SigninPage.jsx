import React from "react";
import Signin from "../../components/Signin/Signin";
import Signup from "../../components/Signup/Signup";
import { SignInAndSignUpContainer } from "./SigninPage.styles";

const SigninPage = () => {
  return (
    <SignInAndSignUpContainer>
      <Signin />
      <Signup />
    </SignInAndSignUpContainer>
  );
};

export default SigninPage;
