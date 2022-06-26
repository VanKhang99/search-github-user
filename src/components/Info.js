import React from "react";
import { useGlobalContext } from "../context/context";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const UserInfo = () => {
  const { userDisplay } = useGlobalContext();
  const { public_repos, followers, following, public_gists } = userDisplay;

  const infoArray = [
    {
      id: 1,
      icon: <GoRepo />,
      label: "repos",
      values: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers />,
      label: "followers",
      values: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus />,
      label: "following",
      values: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist />,
      label: "gists",
      values: public_gists,
      color: "yellow",
    },
  ];

  return (
    <Wrapper>
      <div className="info-container">
        {infoArray.map((item) => {
          const { icon, label, values, color } = item;
          return (
            <div key={item.id} className="info">
              <div className={`info__icon info__icon--${color}`}>{icon}</div>
              <div className="info__number">
                <h3>{values}</h3>
                <p>{label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .info-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    column-gap: 3.2rem;
    row-gap: 1.6rem;

    @media only screen and (max-width: 40em) {
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }
  }

  .info {
    background-color: #fff;
    border-radius: var(--radius);
    padding: 1.6rem 3.2rem;

    display: flex;
    align-items: center;
    gap: 4.8rem;

    &__icon {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }

      &--pink {
        background-color: rgb(255, 224, 240);
        color: rgb(218, 74, 145);
      }

      &--green {
        background-color: var(--clr-primary-10);
        color: var(--clr-primary-5);
      }

      &--purple {
        background-color: rgb(230, 230, 255);
        color: rgb(93, 85, 250);
      }

      &--yellow {
        background-color: rgb(255, 251, 234);
        color: rgb(240, 180, 41);
      }
    }

    &__number {
      h3 {
        font-size: 2.8rem;
        font-weight: bold;
        line-height: 1;
      }

      p {
        color: var(--clr-grey-5);
        font-size: 1.6rem;
        line-height: 1.5;
        text-transform: capitalize;
      }
    }
  }
`;

export default UserInfo;
