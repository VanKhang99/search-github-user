import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  const userIsAuthenticated = user && isAuthenticated;

  console.log(userIsAuthenticated, { isLoading, isAuthenticated, user });

  return (
    <Wrapper>
      {userIsAuthenticated && user.picture && (
        <img src={user.picture} alt={user.name} />
      )}

      {userIsAuthenticated && user.name && (
        <p>
          Welcome, <strong>{user.name}</strong>
        </p>
      )}

      {userIsAuthenticated ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>Log in</button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 2.4rem;
  margin-bottom: 6.4rem;
  background-color: #fff;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto auto 10rem;
  column-gap: 2.4rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  p {
    font-size: 1.6rem;
    letter-spacing: var(--spacing);
    font-family: var(--ff-primary);
    strong {
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  button {
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    background-color: transparent;
    border: transparent;
    font-size: 1.9rem;
    cursor: pointer;
  }
`;

export default Navbar;
