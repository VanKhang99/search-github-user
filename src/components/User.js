import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Followers from "./Followers";
const User = () => {
  return (
    <Wrapper>
      <Card />
      <Followers />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.2rem;
  padding-top: 4.8rem;
`;

export default User;
