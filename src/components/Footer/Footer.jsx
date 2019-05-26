import styled from "styled-components";

import React from "react";
import { Element } from "react-scroll";

const Footer = styled.div`
  height: 3rem;
  width: 100vw;
  background: #4f4f4f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    text-align: center;
  }
`;

export default () => {
  return (
    <Element name="Footer">
      <Footer>
        <h5>&copy; SSK Telecom 2019</h5>
      </Footer>
    </Element>
  );
};
