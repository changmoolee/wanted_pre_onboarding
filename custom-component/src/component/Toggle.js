import React, { useState } from "react";
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ToggleContainer = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;
const ToggleContainerShadow = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 20px;
  background: #dcdcdc;
  background: ${(props) =>
    props.isToggleOn
      ? "linear-gradient(to right, #4a19cd 50%, #dcdcdc 50%) left"
      : "linear-gradient(to right, #4a19cd 50%, #dcdcdc 50%) right"};
  background-size: 200%;
  transition: 0.3s;
`;

const ToggleBall = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  transform: ${(props) =>
    props.isToggleOn ? "translate(45px ,0%)" : "translate(5px ,0%)"};
  border-radius: 50px;
  background-color: white;
  transition: 0.3s;
`;

const Toggle = () => {
  const [isToggleOn, setToggle] = useState(false);

  const controlToggle = () => {
    return setToggle(!isToggleOn);
  };

  return (
    <FeatureContainer>
      Toggle
      <Feature>
        <ToggleContainer
          onClick={() => controlToggle()}
          isToggleOn={isToggleOn}
        >
          <ToggleContainerShadow isToggleOn={isToggleOn}>
            <ToggleBall isToggleOn={isToggleOn}></ToggleBall>
          </ToggleContainerShadow>
        </ToggleContainer>
        {isToggleOn ? "Toggle Switch ON" : "Toggle Switch OFF"}
      </Feature>
    </FeatureContainer>
  );
};

export default Toggle;
