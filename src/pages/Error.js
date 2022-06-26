import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <div className="error-page">
        <h1 className="error-page__code">404</h1>
        <h2 className="error-page__description">
          Sorry, the page you tried cannot be found
        </h2>
        <Link to="/" className="btn error-page__button">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  text-align: center;
  background-color: var(--clr-primary-10);
  min-width: 100%;

  .error-page {
    line-height: 1;
    &__code {
      font-size: 16rem;
      margin-bottom: 1.2rem;
    }

    &__description {
      font-size: 2.8rem;
      margin-bottom: 2.4rem;
      text-transform: capitalize;
      color: var(--clr-grey-3);
    }

    &__button {
      line-height: 1.5;
    }
  }
`;
export default Error;
