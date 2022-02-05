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
`;
const ToggleContainerShadow = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: ${(props) => (props.isToggleOn ? "none" : "#dcdcdc")};
  box-shadow: ${(props) =>
    props.isToggleOn ? "100px 0 0 0 #4a19cd inset" : "none"};
  transition: 0.6s;
`;

const ToggleBall = styled.div`
  position: relative;
  width: 35%;
  height: 70%;
  transform: ${(props) =>
    props.isToggleOn ? "translate(170% ,0%)" : "translate(20% ,0%)"};
  border-radius: 50px;
  background-color: white;
  transition: 0.6s;
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
