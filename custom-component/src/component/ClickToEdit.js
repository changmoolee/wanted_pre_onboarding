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

const ClickToEdit = () => {
  return <FeatureContainer>ClickToEdit</FeatureContainer>;
};

export default ClickToEdit;
