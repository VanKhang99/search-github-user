import React from "react";
import { useGlobalContext } from "../context/context";
import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
const Card = () => {
  const { userDisplay } = useGlobalContext();
  const {
    name,
    avatar_url,
    twitter_username,
    bio,
    html_url,
    company,
    location,
    blog,
  } = userDisplay;

  return (
    <Wrapper className="wrapper user">
      <header className="user__header">
        <img src={avatar_url} alt={name} className="user__image" />
        <div className="user__name">
          <h4>{name}</h4>
          <p>@{twitter_username}</p>
        </div>
        <a href={html_url} className="user__follow">
          Follow
        </a>
      </header>

      <p className="user__bio">{bio}</p>
      <div className="user__company">
        <MdBusiness /> {company}
      </div>
      <div className="user__location">
        <MdLocationOn /> {location}
      </div>
      <div className="user__link">
        <MdLink />
        <a href={`https://${blog}`}>{blog}</a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 2.4rem 3.2rem;

  &::before {
    content: "User";
  }

  .user {
    &__header {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      column-gap: 1.6rem;
      margin-bottom: 1.6rem;
    }

    &__image {
      width: 7.5rem;
      height: 7.5rem;
      border-radius: 50%;
    }

    &__name {
      h4 {
        margin-bottom: 4px;
        letter-spacing: var(--spacing);
        line-height: 1;
      }
      p {
        color: var(--clr-grey-5);
      }
    }

    &__follow:visited,
    &__follow:link {
      --color: var(--clr-primary-5);
      display: inline-block;
      padding: 0.4rem 1.2rem;
      border: 1px solid var(--color);
      color: var(--color);
      border-radius: 1000px;
      letter-spacing: var(--spacing);
      transition: var(--transition);

      &:hover,
      &:active {
        color: var(--clr-white);
        background-color: var(--clr-primary-5);
      }
    }

    &__bio,
    &__company,
    &__location,
    &__link {
      line-height: 1.5;

      display: flex;
      align-items: center;
      margin-bottom: 4px;
      color: var(--clr-grey-5);

      svg {
        margin-right: 0.8rem;
        font-size: 2.1rem;
      }
    }

    &__bio {
      margin-bottom: 2rem;
    }

    &__link {
      a:link,
      a:visited {
        color: var(--clr-primary-5);
        transition: var(--transition);
      }

      a:hover,
      a:active {
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default Card;
