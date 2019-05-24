import styled from "styled-components";

import React from "react";

const Contact = styled.div`
  height: 100vh;
  width: 100vw;
  background: #4f4f4f;
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
    <Contact>
      <h5>Contact form here support@ssktelecom.tech</h5>
    </Contact>
  );
};
