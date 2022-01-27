import React from "react";
import styled from "styled-components";

const FeatureContainer = styled.div`
  width: 80vw;
  height: 30vh;
  border: 1px black solid;
  margin-top: 5vh;
  padding: 20px;
  font-size: 24px;
  border-radius: 20px;
`;
const Feature = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px black solid;
`;
const Toggle = () => {
  return (
    <FeatureContainer>
      Toggle
      <Feature></Feature>
    </FeatureContainer>
  );
};

export default Toggle;
