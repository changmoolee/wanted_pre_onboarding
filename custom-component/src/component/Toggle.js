import React, { useState } from "react";
import styled from "styled-components";
import { FeatureContainer } from "./layout/layout";
import { Feature } from "./layout/layout";

const ToggleContainer = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Shadow = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 20px;
  background: #dcdcdc;
  background: ${(props) =>
    props.checked
      ? "linear-gradient(to right, #4a19cd 50%, #dcdcdc 50%) left"
      : "linear-gradient(to right, #4a19cd 50%, #dcdcdc 50%) right"};
  background-size: 200%;
  transition: 0.3s;
`;

const Ball = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  transform: ${(props) =>
    props.checked ? "translate(45px ,0%)" : "translate(5px ,0%)"};
  border-radius: 50px;
  background-color: white;
  transition: 0.3s;
`;

const Toggle = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked((checked) => !checked);
  };

  return (
    <FeatureContainer>
      Toggle
      <Feature>
        <ToggleContainer onClick={handleToggle} checked={checked}>
          <Shadow checked={checked}>
            <Ball checked={checked}></Ball>
          </Shadow>
        </ToggleContainer>
        {checked ? "Toggle Switch ON" : "Toggle Switch OFF"}
      </Feature>
    </FeatureContainer>
  );
};

export default Toggle;
