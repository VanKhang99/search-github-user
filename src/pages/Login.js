import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper className="login-page">
      <img src={loginImg} alt="Login Image" className="login-page__image" />
      <h1 className="login-page__title">Github User</h1>
      <button className="btn" onClick={() => loginWithRedirect()}>
        Log in / Sign up
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: center;

  .login-page {
    &__image {
      width: 60rem;
      margin-bottom: 3.2rem;
    }

    &__title {
      font-size: 6.4rem;
      line-height: 1;
      margin-bottom: 2.4rem;
    }
  }
`;
export default Login;
