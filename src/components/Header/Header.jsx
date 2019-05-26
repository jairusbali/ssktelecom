import styled from "styled-components";

import React from "react";

import Typography from "@material-ui/core/Typography";

import { Element } from "react-scroll";

const Header = styled.div`
  margin-top: 4rem;
  height: calc(100vh - 4rem);
  width: 100vw;
  background-image: url("assets/images/headers/header.jpeg");
  background-size: cover;
  background-position: center center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <Element name="Home">
      <Header>
        <Typography variant="h4" gutterBottom color="textPrimary">
          Cabling & Data Services
        </Typography>
      </Header>
    </Element>
  );
};
