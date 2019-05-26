import styled from "styled-components";

import React from "react";

import { Element } from "react-scroll";

const Contact = styled.div`
  height: 100vh;
  width: 100vw;
  background: #2288ca;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h5 {
    text-align: center;
  }
`;

export default () => {
  return (
    <Element name="Services">
      <Contact>
        <h5>services here</h5>
      </Contact>
    </Element>
  );
};
