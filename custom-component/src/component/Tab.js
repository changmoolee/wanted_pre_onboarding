import React, { useState } from "react";
import styled, { css } from "styled-components";

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
`;
const TabContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const TabButton = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  color: ${(props) =>
    props.index === props.clickedButton ? "white" : "black"};
  background-color: ${(props) =>
    props.index === props.clickedButton ? "#000080" : "#dcdcdc"};
`;

const Tab = () => {
  const tabCollection = ["Tab1", "Tab2", "Tab3"];

  const [clickedButton, setClickedButton] = useState(0);

  const controlClickedButton = (index) => {
    setClickedButton(index);
  };

  return (
    <FeatureContainer>
      Tab
      <Feature>
        <TabContainer>
          {tabCollection.map((tab, index) => {
            return (
              <TabButton
                clickedButton={clickedButton}
                index={index}
                key={index}
                onClick={() => controlClickedButton(index)}
              >
                &nbsp;&nbsp;{tab}
              </TabButton>
            );
          })}
        </TabContainer>
      </Feature>
    </FeatureContainer>
  );
};

export default Tab;
