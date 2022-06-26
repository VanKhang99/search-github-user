import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { useGlobalContext } from "../context/context";

const Search = () => {
  const { loading, requests, error, searchGithubUser } = useGlobalContext();
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
  };

  const handleInput = (e) => {
    setUser(e.target.value);
  };

  return (
    <Wrapper>
      {error.show && (
        <ErrorWrapper>
          <p>{error.message}</p>
        </ErrorWrapper>
      )}
      <div className="search-container">
        <form className="form" onSubmit={handleSubmit}>
          <MdSearch className="form__icon" />
          <input
            type="text"
            className="form__input"
            placeholder="Enter Github User"
            onChange={handleInput}
          />

          {requests > 0 && !loading && (
            <button className="btn form__button">Search</button>
          )}
        </form>

        <h3 className="request-text">Requests : {requests} / 60</h3>
      </div>
    </Wrapper>
  );
};

const ErrorWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 90vw;
  transform: translateY(-100%);

  p {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    color: red;
    letter-spacing: var(--spacing);
    font-size: 1.6rem;
  }
`;

const Wrapper = styled.section`
  position: relative;
  .search-container {
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
    column-gap: 2.8rem;
  }

  .form {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 0.8rem;
    padding: 0.8rem;
    background-color: #fff;
    border-radius: var(--radius);

    &__icon {
      font-size: 2.1rem;
      color: var(--clr-grey-5);
    }

    &__input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.4rem 0.8rem;
      font-size: 2.1rem;

      &::placeholder {
        color: var(--clr-grey-3);
      }
    }

    &__button {
      font-size: 2.1rem;
      text-transform: none;
      padding: 0.4rem 0.8rem;
      color: var(--clr-white);
    }
  }

  .request-text {
    font-size: 2.8rem;
    padding: 0 0.8rem;
    color: var(--clr-grey-5);
    font-weight: 400;
  }
`;
export default Search;
