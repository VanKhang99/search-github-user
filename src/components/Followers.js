import React from "react";
import { useGlobalContext } from "../context/context";
import styled from "styled-components";

const Followers = () => {
  const { followers } = useGlobalContext();
  return (
    <Wrapper className="wrapper">
      <div className="followers">
        {followers.map((follower) => {
          const { avatar_url, login, html_url } = follower;
          return (
            <div key={follower.id} className="follower">
              <img src={avatar_url} alt={login} className="follower__image" />
              <div className="follower__info">
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  &::before {
    content: "Followers";
  }

  .followers {
    display: grid;
    column-gap: 1.6rem;
    row-gap: 2rem;
    padding: 1.6rem 3.2rem;
    max-height: 26rem;
    overflow-y: scroll;
  }

  .follower {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1.6rem;
    padding: 0.2rem 0.8rem;

    &__image {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
    }

    &__info {
      font-size: 1.6rem;
      line-height: 1;

      h4 {
        display: block;
        letter-spacing: var(--spacing);
        margin-bottom: 0.4rem;
      }

      a {
        color: var(--clr-grey-5);
      }
    }
  }
`;
export default Followers;
